import { Cell } from "../../core/Cell";

export interface ICellUIProps {
  size: number;
  x: number;
  y: number;
  cellName: string;
  // connected properties
  selectedCellName?: string;
  cellValue?: number;
  cellOptions?: any;
  selectCell?: any;
  cellInput?: any;
}
