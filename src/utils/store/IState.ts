import { SudokuType } from "../../core/config/SudokuType";
import { Sudoku } from "../../core/Sudoku";

export interface ISudokuChoice {
  type: SudokuType;
  game: Sudoku;
  selectedCellName: string;
}

export interface IState {
  sudokuChoice: ISudokuChoice;
  viewCellOptions: boolean;
  viewCellNames: boolean;
  viewCellHints: boolean;
}

