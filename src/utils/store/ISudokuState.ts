import { Sudoku } from "../../core/Sudoku";

export interface ISudokuState {
  game: Sudoku;
  selectedCellName: string;
}
