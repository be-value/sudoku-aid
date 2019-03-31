import { ISudokuConfigurator } from "./ISudokuConfigurator";
import { Cell } from "./Cell";

export class Sudoku6x6Configurator implements ISudokuConfigurator {
  private readonly cols: string = "abcdef";
  private readonly rows: string = "123456";
  private readonly options: Array<number> = [1, 2, 3, 4, 5, 6];
  private readonly lastIdx: number = 5;
  public cells: any = {};
  public clusters: any = {};

  constructor(crossCluster: boolean) {
    this.createCells();
    this.createClusters(crossCluster);
  }

  public nextCellName(currentCellName: string, keyCode: number): string {
    let name: string | undefined = undefined;
    switch (keyCode) {
        case 35: // end
            name = this.clusters[currentCellName[1]][this.lastIdx].name;
            break;
        case 36: // home
            name = this.clusters[currentCellName[1]][0].name;
            break;
        case 37: { // arrow left
            let cluster: Cell[] = this.clusters[currentCellName[1]];
            let currentCell: Cell = cluster.find((c: Cell) => c.name === currentCellName) as Cell;
            let idx: number = cluster.indexOf(currentCell)-1;
            name = idx === -1 ? cluster[this.lastIdx].name : cluster[idx].name;
            break;
        }
        case 39: { // arrow right
            let cluster: Cell[] = this.clusters[currentCellName[1]];
            let currentCell: Cell = cluster.find((c: Cell) => c.name === currentCellName) as Cell;
            let idx: number = cluster.indexOf(currentCell)+1;
            name = idx > this.lastIdx ? cluster[0].name : cluster[idx].name;
            break;
        }
        case 33: // pgUp
            name = this.clusters[currentCellName[0]][0].name;
            break;
        case 34: // pgDn
            name = this.clusters[currentCellName[0]][this.lastIdx].name;
            break;
        case 38: { // arrow up
            let cluster: Cell[] = this.clusters[currentCellName[0]];
            let currentCell: Cell = cluster.find((c: Cell) => c.name === currentCellName) as Cell;
            let idx: number = cluster.indexOf(currentCell)-1;
            name = idx === -1 ? cluster[this.lastIdx].name : cluster[idx].name;
            break;
        }
        case 40: { // arrow down
            let cluster: Cell[] = this.clusters[currentCellName[0]];
            let currentCell: Cell = cluster.find((c: Cell) => c.name === currentCellName) as Cell;
            let idx: number = cluster.indexOf(currentCell)+1;
            name = idx > this.lastIdx ? cluster[0].name : cluster[idx].name;
            break;
        }
    }

    return name as string;
}

  private createCells = () => {
    Array.from(this.cols)
       .forEach(c => Array.from(this.rows)
       .forEach(r => this.cells[`${c}${r}`] = new Cell(`${c}${r}`, this.options)));
  }

  private createClusters = (crossCluster: boolean) => {
      Array.from(this.cols).forEach(c => this.createCluster(c, c, this.rows));
      Array.from(this.rows).forEach(r => this.createCluster(r, this.cols, r));
      this.createCluster("I", this.cols.substring(0, 3), this.rows.substring(0, 2));
      this.createCluster("II", this.cols.substring(3), this.rows.substring(0, 2));
      this.createCluster("III", this.cols.substring(0, 3), this.rows.substring(2, 4));
      this.createCluster("IV", this.cols.substring(3), this.rows.substring(2, 4));
      this.createCluster("V", this.cols.substring(0, 3), this.rows.substring(4));
      this.createCluster("VI", this.cols.substring(3), this.rows.substring(4));

      if (crossCluster) {
        this.clusters.X = ["a1", "b2", "c3", "d4", "e5", "f6"].map(key => this.cells[key]);
        this.clusters.X.forEach((c: Cell) => c.highlight = true);
        this.clusters.Y = ["a6", "b5", "c4", "d3", "e2", "f1"].map(key => this.cells[key]);
        this.clusters.Y.forEach((c: Cell) => c.highlight = true);
      }
  }

  private createCluster = (clusterName: string, colsStr: string, rowsStr: string) => {
      let keys: Array<string> = new Array<string>();
      Array.from(colsStr).forEach(col => Array.from(rowsStr).forEach(row => keys.push(`${col}${row}`)));
      this.clusters[clusterName] = keys.map(key => this.cells[key]);
  }
}