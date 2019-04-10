import { Cell } from "./Cell";
import { ISudokuConfigurator } from "./config/ISudokuConfigurator";

export class Sudoku {
    private cfg: ISudokuConfigurator;

    constructor(cfg: ISudokuConfigurator) {
        this.cfg = cfg;
    }

    public getCell = (cellName: string): Cell => {
        return this.cfg.cells[cellName];
    }

    public processInput = (cellName: string, inputValue: number | undefined): void => {
        let newCell: Cell = this.cfg.cells[cellName];
        newCell.value = inputValue;

        this.recalculateGame(cellName);
    }

    public processHints = (enable: boolean): void => {
        // if false, disable all hints
        if (!enable) {
            this.allCells().forEach(c => c.hintHighlight = false);
            return;
        }

        let hintCells: Cell[] = new Array<Cell>();
        // singleton cells
        this.allClusters().forEach((cluster: Cell[]) => {
            this.singletonOptionCells(cluster).forEach((cell: Cell) => hintCells.push(cell));
        });

        // single option cells
        this.allCells().forEach(cell => {
            if (cell.value === undefined && cell.options.length === 1) {
                hintCells.push(cell);
            }
        });

        // enable next line for debugging purposes only to show all hints at same time
        // hintCells.forEach(cell => cell.hintHighlight = true);
        if (hintCells.length > 0) {
            let idx: number = this.getRandomInt(hintCells.length);
            hintCells[idx].hintHighlight = true;
        }
    }

    private recalculateGame = (cellName: string | undefined):void => {
        let suspects: Array<Cell>;
        if (cellName !== undefined) {
            suspects = this.affectedCells(this.affectedClusters(cellName));
        } else {
            suspects = this.allCells();
        }

        suspects.forEach(cell => {
            let affectedCells: Cell[] = this.affectedCells(this.affectedClusters(cell.name));
            let filledValues: number[] = this.filledValues(affectedCells);
            let duplicateValues: number[] = this.duplicateValues(filledValues);

            cell.invalidateOptions(this.uniqueValues(filledValues));
            cell.hasValidValue = (cell.value === undefined && cell.options.length !== 0)
               || (cell.value !== undefined && !duplicateValues.includes(cell.value as number));
        });
    }

    private affectedCells = (clusters: Cell[][]): Cell[] => {
        var cells: Set<Cell> = new Set(Array<Cell>().concat(...clusters));
        return Array.from(cells);
    }

    private filledValues = (cells: Cell[]): number[] => {
        return cells.filter(c1 => c1.value !== undefined).map(c2 => c2.value) as number[];
    }

    private uniqueValues = (values: number[]): number[] => {
        var uniqueSet: Set<number> = new Set(values);
        return Array.from(uniqueSet);
    }

    private duplicateValues = (values: number[]): number[] => {
        var sorted: number[] = values.slice().sort((a, b) => a - b);
        // js by default uses a crappy string compare - so use sorting method
        // (we use slice to clone the array so the original array won't be modified)
        let results: number[] = new Array<number>();
        for (let i: number = 0; i < sorted.length - 1; i++) {
            if (sorted[i + 1] === sorted[i] &&
                !results.includes(sorted[i])) {
                results.push(sorted[i]);
            }
        }
        return results;
    }

    private allCells = (): Cell[] => {
        return Object.keys(this.cfg.cells) // all cell names
            .map((key: string) => this.cfg.cells[key]);
    }

    private allClusters = (): Cell[][] => {
        return Object.keys(this.cfg.clusters) // all cluster names
            .map((key: string) => this.cfg.clusters[key]);
    }

    private affectedClusters = (cellName: string): Cell[][] => {
        return Object.keys(this.cfg.clusters) // all cluster names
            .filter(key => this.cfg.clusters[key]
                .some((c: { name: string; }) => c.name === cellName)) // all cluster names that contain our cell
            .map((key: string) => this.cfg.clusters[key]); // all clusters that contain our cell
    }

    private singletonOptionCells = (cluster: Cell[]): Cell[] => {
        let result: Cell[] = new Array<Cell>();
        let optionsSets: number[][] = new Array<number[]>();
        cluster.filter(cell => cell.value === undefined).forEach(cell => optionsSets.push(cell.options));
        cluster.forEach(cell => {
            cell.options.forEach((option: number) => {
                if (this.isSingleton(option, optionsSets)
                    && cell.value === undefined) {
                    result.push(cell);
                }
            });
        });
        return result;
    }

    // return true only when the option is exactly in one optionsSet
    private isSingleton =(option: number, optionsSets: number[][]): boolean => {
        let resultSets: number[][] = new Array<number[]>();
        optionsSets.filter((options: number[]) => {
            if (options.includes(option)) {
                resultSets.push(options);
            }
        });
        return resultSets.length === 1;
    }

    private getRandomInt = (max: number): number => {
        return Math.floor(Math.random() * Math.floor(max));
    }

    private printClusters = () => {
        // tslint:disable-next-line:forin
        for (var clusterName in this.cfg.clusters) {
            this.printCluster(clusterName);
        }
    }

    private printCluster = (clusterName: string) => {
        var cluster: any = this.cfg.clusters[clusterName];
            var cellNames: Array<string> = new Array<string>();
            for (var cell of cluster) {
                cellNames.push(cell.name);
            }
            // tslint:disable-next-line:no-console
            console.debug(`${clusterName} = [${cellNames.join()}]`);
    }
}