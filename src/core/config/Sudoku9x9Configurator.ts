import { ISudokuConfigurator } from "./ISudokuConfigurator";
import { Cell } from "../Cell";

export class Sudoku9x9Configurator implements ISudokuConfigurator {
  private readonly cols: string = "abcdefghi";
  private readonly rows: string = "123456789";
  private readonly options: Array<number> = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  public cells: any = {};
  public clusters: any = {};

  constructor(crossCluster: boolean) {
    this.createCells();
    this.createClusters(crossCluster);
  }

  private createCells = () => {
    Array.from(this.cols)
       .forEach(c => Array.from(this.rows)
       .forEach(r => this.cells[`${c}${r}`] = new Cell(`${c}${r}`, this.options)));
  }

  private createClusters = (crossCluster: boolean) => {
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

      if (crossCluster) {
        this.clusters.X = ["a1", "b2", "c3", "d4", "e5", "f6", "g7", "h8", "i9"].map(key => this.cells[key]);
        this.clusters.X.forEach((c: Cell) => c.crossHighlight = true);
        this.clusters.Y = ["a9", "b8", "c7", "d6", "e5", "f4", "g3", "h2", "i1"].map(key => this.cells[key]);
        this.clusters.Y.forEach((c: Cell) => c.crossHighlight = true);
      }
  }

  private createCluster = (clusterName: string, colsStr: string, rowsStr: string) => {
      let keys: Array<string> = new Array<string>();
      Array.from(colsStr).forEach(col => Array.from(rowsStr).forEach(row => keys.push(`${col}${row}`)));
      this.clusters[clusterName] = keys.map(key => this.cells[key]);
  }
}