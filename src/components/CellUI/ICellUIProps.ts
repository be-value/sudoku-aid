export interface ICellUIProps {
  // properties received from parent
  size: number;
  x: number;
  y: number;
  cellName: string;
  
  // connected properties
  cellValue?: number;
  cellOptions?: any;
  isCellSelected? : boolean;

  // dispatching methods
  selectCell?: any;
  cellInput?: any;  
}
