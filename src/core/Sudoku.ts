import { Cell } from "./Cell";

export class Sudoku {
    private readonly cols: string = "abcdefghi";
    private readonly rows: string = "123456789";
    private cells: any = {};
    private clusters: any = {};

    constructor() {
        this.createCells();
        this.createClusters();
        this.printClusters();
    }

    createCells = () => {
        Array.from(this.cols).forEach(c => Array.from(this.rows).forEach(r => this.cells[`${c}${r}`] = new Cell(`${c}${r}`, null )));
    }

    createClusters = () => {
        Array.from(this.cols).forEach(c => this.createCluster(c, c, this.rows));
        Array.from(this.rows).forEach(r => this.createCluster(r, this.cols, r));
        this.createCluster("I", this.cols.substring(0, 3), this.rows.substring(0, 3));
        this.createCluster("II", this.cols.substring(3, 6), this.rows.substring(0, 3));
        this.createCluster("III", this.cols.substring(6), this.rows.substring(0, 3));
        this.createCluster("IV", this.cols.substring(0, 3), this.rows.substring(3, 6));
        this.createCluster("V", this.cols.substring(3, 6), this.rows.substring(3, 6));
        this.createCluster("VI", this.cols.substring(6), this.rows.substring(3, 6));
        this.createCluster("VII", this.cols.substring(0, 3), this.rows.substring(6));
        this.createCluster("VIII", this.cols.substring(3, 6), this.rows.substring(6));
        this.createCluster("IX", this.cols.substring(6), this.rows.substring(6));
    }

    createCluster = (clusterName: string, colsStr: string, rowsStr: string) => {
        let keys : Array<string> = new Array<string>();
        Array.from(colsStr).forEach(col => Array.from(rowsStr).forEach(row => keys.push(`${col}${row}`)));
        this.clusters[clusterName] = keys.map(key => this.cells[key]);
    }

    printClusters = () => {
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