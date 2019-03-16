import { Action } from "redux";
import { Sudoku } from "../../core/Sudoku";
import { Cell } from "../../core/Cell";
import { IAction } from "../actions/IAction";
import { SELECT_CELL } from "../actions/constants";
import { ISudokuState } from "../store/ISudokuState";

function rootReducer(state: ISudokuState, action: IAction): any {

  if (action.type === SELECT_CELL) {
    let newState: any = Object.assign({}, state, {selectedCellName: action.payload});
    return newState;
  }

  return state;
}

export default rootReducer;