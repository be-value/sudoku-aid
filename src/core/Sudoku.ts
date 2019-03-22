import { Cell } from "./Cell";
import { array } from "prop-types";

const cols: string = "abcdefghi";
const rows: string = "123456789";

export class Sudoku {
    private cells: any = {};
    private clusters: any = {};

    constructor() {
        this.createCells();
        this.createClusters();
        this.printClusters();
    }

    public getCell(cellName: string): Cell {
        return this.cells[cellName];
    }

    public processInput(cellName: string, inputValue: number | undefined): void {
        let newCell: Cell = this.cells[cellName];
        newCell.value = inputValue;

        this.recalculateGame(cellName);
    }

    private recalculateGame(cellName: string): void {
        this.affectedCells(this.affectedClusters(cellName)).forEach(cell => {
            let affectedCells: Cell[] = this.affectedCells(this.affectedClusters(cell.name));
            let filledValues: number[] = this.filledValues(affectedCells);
            let duplicateValues: number[] = this.duplicateValues(filledValues);

            cell.invalidateOptions(this.uniqueValues(filledValues));
            cell.hasValidValue = cell.value === undefined || !duplicateValues.includes(cell.value as number);
        });
    }

    private affectedCells(clusters: Cell[][]): Cell[] {
        var cells: Set<Cell> = new Set(Array<Cell>().concat(...clusters));
        return Array.from(cells);
    }

    private filledValues(cells: Cell[]): number[] {
        return cells.filter(c1 => c1.value !== undefined).map(c2 => c2.value) as number[];
    }

    private uniqueValues(values: number[]): number[] {
        var uniqueSet: Set<number> = new Set(values);
        return Array.from(uniqueSet);
    }

    private duplicateValues(values: number[]): number[] {
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

    private affectedClusters(cellName: string): Cell[][] {
        return Object.keys(this.clusters) // all cluster names
            .filter(key => this.clusters[key]
                .some((c: { name: string; }) => c.name === cellName)) // all cluster names that contain our cell
            .map((key: string) => this.clusters[key]); // all clusters that contain our cell
    }

    private createCells = () => {
        Array.from(cols).forEach(c => Array.from(rows).forEach(r => this.cells[`${c}${r}`] = new Cell(`${c}${r}`, undefined)));
    }

    private createClusters = () => {
        Array.from(cols).forEach(c => this.createCluster(c, c, rows));
        Array.from(rows).forEach(r => this.createCluster(r, cols, r));
        this.createCluster("I", cols.substring(0, 3), rows.substring(0, 3));
        this.createCluster("II", cols.substring(3, 6), rows.substring(0, 3));
        this.createCluster("III", cols.substring(6), rows.substring(0, 3));
        this.createCluster("IV", cols.substring(0, 3), rows.substring(3, 6));
        this.createCluster("V", cols.substring(3, 6), rows.substring(3, 6));
        this.createCluster("VI", cols.substring(6), rows.substring(3, 6));
        this.createCluster("VII", cols.substring(0, 3), rows.substring(6));
        this.createCluster("VIII", cols.substring(3, 6), rows.substring(6));
        this.createCluster("IX", cols.substring(6), rows.substring(6));
    }

    private createCluster = (clusterName: string, colsStr: string, rowsStr: string) => {
        let keys: Array<string> = new Array<string>();
        Array.from(colsStr).forEach(col => Array.from(rowsStr).forEach(row => keys.push(`${col}${row}`)));
        this.clusters[clusterName] = keys.map(key => this.cells[key]);
    }

    private printClusters = () => {
        // tslint:disable-next-line:forin
        for (var clusterName in this.clusters) {
            var cluster: any = this.clusters[clusterName];
            var cellNames: Array<string> = new Array<string>();
            for (var cell of cluster) {
                cellNames.push(cell.name);
            }
            // tslint:disable-next-line:no-console
            console.debug(`${clusterName} = [${cellNames.join()}]`);
        }
    }
}