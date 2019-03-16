import { Sudoku } from "../../core/Sudoku";
import { ISudokuState } from "./ISudokuState";

export default {
  game: new  Sudoku(),
  selectedCellName: "",
} as ISudokuState;

