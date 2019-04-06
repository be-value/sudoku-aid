import { SudokuType } from "./SudokuType";

export interface IGameOptionsProps {
  viewCellOptions?: boolean;
  toggleViewCellOptions?(show: boolean): void;
  viewCellNames?: boolean;
  toggleViewCellNames?(show: boolean): void;
  viewCellHints?: boolean;
  toggleViewCellHints?(show: boolean): void;
  sudokuType?: SudokuType;
  chooseSudokuType?(chosen: SudokuType): void;
}