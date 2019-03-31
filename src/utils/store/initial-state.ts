import { Sudoku } from "../../core/Sudoku";
import { ISudokuState } from "./ISudokuState";
import { Sudoku9x9Configurator } from "../../core/Sudoku9x9Configurator";

const initialState: ISudokuState = {
  game: new  Sudoku(new Sudoku9x9Configurator()),
  selectedCellName: "",
  viewCellOptions: false,
  viewCellNames: true
};

export default initialState;

