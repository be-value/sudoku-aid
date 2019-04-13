import { Reducer } from "redux";
import { IAction } from "../actions/IAction";
import {
  SELECT_CELL,
  CELL_INPUT,
  TOGGLE_VIEW_CELL_OPTIONS,
  TOGGLE_VIEW_CELL_NAMES,
  SELECT_SUDOKU_TYPE,
  TOGGLE_VIEW_CELL_HINTS,
  NEW_SUDOKU
} from "../actions/constants";
import { IState } from "../store/IState";
import { persistState, selectSudokuType, selectNewSudoku } from "../store/persist-state";

function rootReducer(state: IState, action: IAction): IState {
  let newState: IState | undefined;

  // selecting a cell for input (or deselecting a cel when that cell was selected)
  if (action.type === SELECT_CELL) {
    newState = Object.assign({}, state);
    newState.sudokuChoice.selectedCellName = action.payload;
  }

  // inputting some value into the selected cell - or clearing the cell
  if (action.type === CELL_INPUT) {
    newState = Object.assign({}, state);
    let cellName: string = newState.sudokuChoice.selectedCellName;
    let inputValue: number | undefined = action.payload;

    newState.sudokuChoice.game.applyInput(cellName, inputValue);
    newState.sudokuChoice.game.recalculateGame(cellName);
  }

  // toggling the visibility of the cell options
  if (action.type === TOGGLE_VIEW_CELL_OPTIONS) {
    newState = Object.assign({}, state, { viewCellOptions: action.payload });
  }

  // toggling the visibility of the cell options
  if (action.type === TOGGLE_VIEW_CELL_NAMES) {
    newState = Object.assign({}, state, { viewCellNames: action.payload });
  }

  // toggling the visibility of cell hints
  if (action.type === TOGGLE_VIEW_CELL_HINTS) {
    newState = Object.assign({}, state, { viewCellHints: action.payload });
    newState.sudokuChoice.game.processHints(action.payload);
  }

  // selecting another sudoku type
  if (action.type === SELECT_SUDOKU_TYPE) {
    newState = Object.assign({}, state, {sudokuChoice: selectSudokuType(action.payload)});
  }

  // selecting a new sudoku
  if (action.type === NEW_SUDOKU) {
    newState = Object.assign({}, state, {sudokuChoice: selectNewSudoku(action.payload)});
  }

  // only if we created new/changed state
  if (newState !== undefined) {
    persistState(newState);
    return newState;
  }

  return state;
}

export default rootReducer as Reducer<IState, IAction>;