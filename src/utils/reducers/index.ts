import { Reducer } from "redux";
import { IAction } from "../actions/IAction";
import { SELECT_CELL, CELL_INPUT } from "../actions/constants";
import { ISudokuState } from "../store/ISudokuState";
import { Cell } from "../../core/Cell";

function rootReducer(state: ISudokuState, action: IAction): ISudokuState {

  if (action.type === SELECT_CELL) {
    let newState: ISudokuState = Object.assign({}, state);
    newState.selectedCellName = action.payload;
    return newState;
  }

  if (action.type === CELL_INPUT) {
    let newState: ISudokuState = Object.assign({}, state);
    let newCell: Cell = newState.game.cells[newState.selectedCellName];
    newCell.value = action.payload;
    newCell.options = undefined;
    return newState;
  }

  return state;
}

export default rootReducer as Reducer<ISudokuState, IAction>;