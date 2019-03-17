import { Cell } from "./Cell";

const cols: string = "abcdefghi";
const rows: string = "123456789";

export class Sudoku {
    public cells: any = {};
    public clusters: any = {};

    constructor() {
        this.createCells();
        this.createClusters();
        this.printClusters();
    }

    private createCells = () => {
        Array.from(cols).forEach(c => Array.from(rows).forEach(r => this.cells[`${c}${r}`] = new Cell(`${c}${r}`, undefined )));
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
        let keys : Array<string> = new Array<string>();
        Array.from(colsStr).forEach(col => Array.from(rowsStr).forEach(row => keys.push(`${col}${row}`)));
        this.clusters[clusterName] = keys.map(key => this.cells[key]);
    }

    private printClusters = () => {
        // tslint:disable-next-line:forin
        for (var clusterName in this.clusters) {
            var cluster: any = this.clusters[clusterName];
            var cellNames : Array<string> = new Array<string>();
            for (var cell of cluster) {
                cellNames.push(cell.name);
            }
            // tslint:disable-next-line:no-console
            console.debug(`${clusterName} = [${cellNames.join()}]`);
        }
    }
}