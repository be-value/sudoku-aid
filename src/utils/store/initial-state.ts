import { IState } from "./IState";
import { randomSudokuChoice } from "../../components/Game/SudokuType";

const initialState: IState = {
  sudokuChoice: randomSudokuChoice(),
  selectedCellName: "",
  viewCellOptions: false,
  viewCellNames: false
};

export default initialState;

