import { Action } from "redux";
import { Sudoku } from "../../core/Sudoku";
import { Cell } from "../../core/Cell";
import { IAction } from "../actions/IAction";
import { SELECT_CELL } from "../actions/constants";

const initialState: any = {
  game: Sudoku,
  selectedCell: String
};

function rootReducer(state: {} = initialState, action: IAction): any {

  if (action.type === SELECT_CELL) {
    let newState: any = Object.assign({}, state, {selectedCell: action.payload});
    return newState;
  }

  return state;
}

export default rootReducer;