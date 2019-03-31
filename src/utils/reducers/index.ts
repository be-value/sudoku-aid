import { Reducer } from "redux";
import { IAction } from "../actions/IAction";
import { SELECT_CELL, CELL_INPUT, TOGGLE_VIEW_CELL_OPTIONS } from "../actions/constants";
import { IState } from "../store/IState";

function rootReducer(state: IState, action: IAction): IState {

  // selecting a cell for input (or deselecting a cel when that cell was selected)
  if (action.type === SELECT_CELL) {
    let newState: IState = Object.assign({}, state);
    newState.selectedCellName = action.payload;
    return newState;
  }

  // inputting some value into the selected cell - or clearing the cell
  if (action.type === CELL_INPUT) {
    let newState: IState = Object.assign({}, state);
    let cellName: string = newState.selectedCellName;
    let inputValue: number | undefined = action.payload;

    newState.game.processInput(cellName, inputValue);

    return newState;
  }

  // toggling the visibility of the cell options
  if (action.type === TOGGLE_VIEW_CELL_OPTIONS) {
    return Object.assign({}, state, { viewCellOptions: action.payload });
  }

  return state;
}

export default rootReducer as Reducer<IState, IAction>;