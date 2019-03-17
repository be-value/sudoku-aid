import { Cell } from "../../core/Cell";

export interface ICellUIProps {
  size: number;
  x: number;
  y: number;
  cell: Cell;
  selectCell?: any;
  isSelected?: boolean;
}
