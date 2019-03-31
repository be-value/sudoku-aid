import { Sudoku } from "../../core/Sudoku";
import { IState } from "./IState";
import { Sudoku9x9Configurator } from "../../core/Sudoku9x9Configurator";

const initialState: IState = {
  game: new  Sudoku(new Sudoku9x9Configurator()),
  selectedCellName: "",
  viewCellOptions: false,
  viewCellNames: true
};

export default initialState;

