import { Sudoku } from "../../core/Sudoku";

export interface IState {
  game: Sudoku;
  selectedCellName: string;
  viewCellOptions: boolean;
  viewCellNames: boolean;
}
