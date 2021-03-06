import { IAction } from "./IAction";
import {
  SELECT_CELL,
  CELL_INPUT,
  TOGGLE_VIEW_CELL_OPTIONS,
  TOGGLE_VIEW_CELL_NAMES,
  SELECT_SUDOKU_TYPE,
  TOGGLE_VIEW_CELL_HINTS,
  NEW_SUDOKU
} from "./constants";
import { SudokuType } from "../../core/config/SudokuType";

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

// redux action for toggling visibility of cell names
export function toggleViewCellNames (payload: boolean): IAction {
  return { type: TOGGLE_VIEW_CELL_NAMES, payload };
}

// reduc action for toggling viesibility of cell hints
export function toggleViewCellHints (payload: boolean): IAction {
  return { type: TOGGLE_VIEW_CELL_HINTS, payload };
}

// redux action for selecting sudoky type
export function selectSudokuType (payload: SudokuType): IAction {
  return { type: SELECT_SUDOKU_TYPE, payload };
}

// redux action for selecting a new sudoku
export function newSudoku (payload: SudokuType): IAction {
  return { type: NEW_SUDOKU, payload };
}