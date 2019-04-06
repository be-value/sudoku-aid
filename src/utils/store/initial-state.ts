import { IState } from "./IState";
import { SudokuType, sudokuChoice } from "../../components/Game/SudokuType";

const initialState: IState = {
  sudokuChoice: sudokuChoice(SudokuType._9x9),
  selectedCellName: "",
  viewCellOptions: false,
  viewCellNames: false,
  viewCellHints: false
};

export default initialState;

