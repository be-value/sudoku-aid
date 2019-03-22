import { Reducer } from "redux";
import { IAction } from "../actions/IAction";
import { SELECT_CELL, CELL_INPUT } from "../actions/constants";
import { ISudokuState } from "../store/ISudokuState";

function rootReducer(state: ISudokuState, action: IAction): ISudokuState {

  // Selecting a cell for input (or deselecting a cel when that cell was selected)
  if (action.type === SELECT_CELL) {
    let newState: ISudokuState = Object.assign({}, state);
    newState.selectedCellName = action.payload;
    return newState;
  }

  // inputting some value into the selected cell - or clearing the cell
  if (action.type === CELL_INPUT) {
    let newState: ISudokuState = Object.assign({}, state);
    let cellName: string = newState.selectedCellName;
    let inputValue: number | undefined = action.payload;

    newState.game.processInput(cellName, inputValue);
    newState.game.recalculateOptions(cellName);
    newState.game.validateCells(cellName);
    
    return newState;
  }

  return state;
}

export default rootReducer as Reducer<ISudokuState, IAction>;