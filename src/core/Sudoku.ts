import { Cell } from "./Cell";
import { ISudokuConfigurator } from "./ISudokuConfigurator";

export class Sudoku {
    private cfg: ISudokuConfigurator;

    constructor(cfg: ISudokuConfigurator) {
        this.cfg = cfg;
    }

    public getCell = (cellName: string) => {
        return this.cfg.cells[cellName];
    }

    public processInput = (cellName: string, inputValue: number | undefined) => {
        let newCell: Cell = this.cfg.cells[cellName];
        newCell.value = inputValue;

        this.recalculateGame(cellName);
    }

    public nextCellName = (currentCellName: string, keyCode: number) => {
        return this.cfg.nextCellName(currentCellName, keyCode);
    }

    public recalculateGame = (cellName: string | undefined) => {
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
            cell.hasValidValue = cell.value === undefined || !duplicateValues.includes(cell.value as number);
        });
    }

    private affectedCells = (clusters: Cell[][]) => {
        var cells: Set<Cell> = new Set(Array<Cell>().concat(...clusters));
        return Array.from(cells);
    }

    private filledValues = (cells: Cell[]) => {
        return cells.filter(c1 => c1.value !== undefined).map(c2 => c2.value) as number[];
    }

    private uniqueValues = (values: number[]) => {
        var uniqueSet: Set<number> = new Set(values);
        return Array.from(uniqueSet);
    }

    private duplicateValues = (values: number[]) => {
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

    private allCells = () => {
        return Object.keys(this.cfg.cells) // all cell names
            .map((key: string) => this.cfg.cells[key]);
    }

    private affectedClusters = (cellName: string) => {
        return Object.keys(this.cfg.clusters) // all cluster names
            .filter(key => this.cfg.clusters[key]
                .some((c: { name: string; }) => c.name === cellName)) // all cluster names that contain our cell
            .map((key: string) => this.cfg.clusters[key]); // all clusters that contain our cell
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