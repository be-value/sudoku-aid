import { Reducer } from "redux";
import { IAction } from "../actions/IAction";
import { SELECT_CELL } from "../actions/constants";
import { ISudokuState } from "../store/ISudokuState";

function rootReducer(state: ISudokuState, action: IAction): ISudokuState {

  if (action.type === SELECT_CELL) {
    let newState: any = Object.assign({}, state, {selectedCellName: action.payload});
    return newState;
  }

  return state;
}

export default rootReducer as Reducer<ISudokuState, IAction>;