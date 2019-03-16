import { IAction } from "./IAction";
import { SELECT_CELL } from "./constants";

// reduc action for selecting a new cell
export function selectCell (payload: string): IAction {
  return { type: SELECT_CELL, payload };
}