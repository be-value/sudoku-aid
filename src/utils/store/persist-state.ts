import { SudokuType } from "../../core/config/SudokuType";
import { IState, ISudokuChoice } from "./IState";
import { Sudoku9x9Configurator } from "../../core/config/Sudoku9x9Configurator";
import { Sudoku6x6Configurator } from "../../core/config/Sudoku6x6Configurator";
import { Sudoku } from "../../core/Sudoku";

const sudokuChoices: Array<ISudokuChoice> = [
  {
    type: SudokuType._9x9,
    game: new Sudoku(new Sudoku9x9Configurator(false)),
    selectedCellName: ""
  },
  {
    type: SudokuType._9x9Cross,
    game: new Sudoku(new Sudoku9x9Configurator(true)),
    selectedCellName: ""
  },
  {
    type: SudokuType._6x6,
    game: new Sudoku(new Sudoku6x6Configurator(false)),
    selectedCellName: ""
  },
  {
    type: SudokuType._6x6Cross,
    game: new Sudoku(new Sudoku6x6Configurator(true)),
    selectedCellName: ""
  }
];


// =================================== Application state options ========================================
interface IPersistentStateOptions {
  sudokuType: SudokuType;
  viewCellOptions: boolean;
  viewCellNames: boolean;
  viewCellHints: boolean;
}

function persistStateOptions(options: IPersistentStateOptions): void {
  let serialized: string = JSON.stringify(options);
  localStorage.setItem("options", serialized);
}

function dehydrateStateOptions(): IPersistentStateOptions {
  let serialized: string | null = localStorage.getItem("options");
  if (serialized === null) {
    return {
      sudokuType: SudokuType._9x9,
      viewCellOptions: false,
      viewCellNames: false,
      viewCellHints: false
    };
  }

  JSON.parse(serialized);
  let result: IPersistentStateOptions = Object.assign({}, JSON.parse(serialized));
  return result;
}
// ======================================================================================================

export function sudokuChoice(type: SudokuType): ISudokuChoice {
  return sudokuChoices.find(sc => sc.type === type) as ISudokuChoice;
}

export function persistState(newState: IState): void {

  // persist state options
  let persistedStateOptions: IPersistentStateOptions = {
    sudokuType: newState.sudokuChoice.type,
    viewCellOptions: newState.viewCellOptions,
    viewCellNames: newState.viewCellNames,
    viewCellHints: newState.viewCellHints
  };

  persistStateOptions(persistedStateOptions);

  // todo: persist sudoku state
}

export function dehydrateState(): IState {
  let options: IPersistentStateOptions = dehydrateStateOptions();
  return {
    sudokuChoice: sudokuChoice(options.sudokuType),
    viewCellOptions: options.viewCellOptions,
    viewCellNames: options.viewCellNames,
    viewCellHints: options.viewCellHints
  };
}