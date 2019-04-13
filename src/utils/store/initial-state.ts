import { IState } from "./IState";
import { SudokuType, sudokuChoice } from "../../components/Game/SudokuType";

const initialState: IState = {
  sudokuChoice: sudokuChoice(SudokuType._9x9),
  viewCellOptions: false,
  viewCellNames: false,
  viewCellHints: false
};

function getInitialState(): IState {
  alert("getting initial state");
  return initialState;
}

export default getInitialState;

