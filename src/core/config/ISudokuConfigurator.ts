export interface ISudokuConfigurator {
  cells: any;
  clusters: any;
  nextCellName(currentCellName: string, keycode: number): string;
}