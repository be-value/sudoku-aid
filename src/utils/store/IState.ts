import { ISudokuChoice } from "../../components/Game/SudokuType";

export interface IState {
  sudokuChoice: ISudokuChoice;
  viewCellOptions: boolean;
  viewCellNames: boolean;
  viewCellHints: boolean;
}
