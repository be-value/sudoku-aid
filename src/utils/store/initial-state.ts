import { Sudoku } from "../../core/Sudoku";
import { ISudokuState } from "./ISudokuState";

const initialState: ISudokuState = {
  game: new  Sudoku(),
  selectedCellName: "",
  viewCellOptions: false
};

export default initialState;

