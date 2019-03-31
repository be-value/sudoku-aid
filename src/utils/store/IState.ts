import { ISudokuChoice } from "../../components/Game/SudokuType";

export interface IState {
  sudokuChoice: ISudokuChoice;
  selectedCellName: string;
  viewCellOptions: boolean;
  viewCellNames: boolean;
}
