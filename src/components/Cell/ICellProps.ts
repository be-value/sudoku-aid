import { SudokuType } from "../../core/config/SudokuType";

export interface ICellProps {
  // properties received from parent
  size: number;
  x: number;
  y: number;
  cellName: string;

  // connected properties
  cellValue?: number;
  cellOptions?: any;
  isCellSelected?: boolean;
  hasValidValue?: boolean;
  viewCellOptions?: boolean;
  viewCellNames?: boolean;
  viewCellHints?: boolean;
  crossHighlight?: boolean;
  hintHighlight?: boolean;
  sudokuType?: SudokuType;

  // dispatching methods
  selectCell?: any;
  cellInput?: any;
}
