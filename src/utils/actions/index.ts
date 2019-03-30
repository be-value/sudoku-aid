import { IAction } from "./IAction";
import { SELECT_CELL, CELL_INPUT, TOGGLE_VIEW_CELL_OPTIONS } from "./constants";

// redux action for selecting a new cell
export function selectCell (payload: string | undefined): IAction {
  return { type: SELECT_CELL, payload };
}

// redux action for inputting/removing a value to/from a cell
export function cellInput (payload: number | undefined ): IAction {
  return { type: CELL_INPUT, payload };
}

// redux action for toggling visibility of cell options
export function toggleViewCellOptions (payload: boolean): IAction {
  return { type: TOGGLE_VIEW_CELL_OPTIONS, payload };
}