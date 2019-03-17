import { IAction } from "./IAction";
import { SELECT_CELL, CELL_INPUT } from "./constants";

// reduc action for selecting a new cell
export function selectCell (payload: string | undefined): IAction {
  return { type: SELECT_CELL, payload };
}

export function cellInput (payload: number | undefined ): IAction {
  return { type: CELL_INPUT, payload };
}