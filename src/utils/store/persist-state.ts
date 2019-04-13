import { SudokuType } from "../../core/config/SudokuType";
import { IState, ISudokuChoice } from "./IState";
import { Sudoku9x9Configurator } from "../../core/config/Sudoku9x9Configurator";
import { Sudoku6x6Configurator } from "../../core/config/Sudoku6x6Configurator";
import { Sudoku } from "../../core/Sudoku";
import { ISudokuConfigurator } from "../../core/config/ISudokuConfigurator";

const PERSIST_OPTIONS_KEY: string = "PERSIST_OPTIONS_KEY";

function sudokuConfigurator(type: SudokuType): ISudokuConfigurator {
  switch (type) {
    case SudokuType._9x9:
      return new Sudoku9x9Configurator(false);
    case SudokuType._9x9Cross:
      return new Sudoku9x9Configurator(true);
    case SudokuType._6x6:
      return new Sudoku6x6Configurator(false);
    case SudokuType._6x6Cross:
      return new Sudoku6x6Configurator(true);
  }
}

// =================================== Persist state options ========================================
interface IPersistentStateOptions {
  sudokuType: SudokuType;
  viewCellOptions: boolean;
  viewCellNames: boolean;
  viewCellHints: boolean;
}

function persistStateOptions(options: IPersistentStateOptions): void {
  let serialized: string = JSON.stringify(options);
  localStorage.setItem(PERSIST_OPTIONS_KEY, serialized);
}

function dehydrateStateOptions(): IPersistentStateOptions {
  let serialized: string | null = localStorage.getItem(PERSIST_OPTIONS_KEY);
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
// =================================== Persist Sudoku ===================================================
function persistSudoku(choice: ISudokuChoice): void {
  let key: string = SudokuType[choice.type];
  let value: string = choice.game.serialize();
  localStorage.setItem(key, value);
}

function dehydrateSudoku(type: SudokuType): ISudokuChoice {
  let key: string = SudokuType[type];
  let result: ISudokuChoice = {
    type: type,
    game: new Sudoku(sudokuConfigurator(type)),
    selectedCellName: ""
  };

  let serialized: string | null = localStorage.getItem(key);
  if (serialized !== null) {
    result.game.deserialize(serialized);
  }

  return result;
}

function removeSudokuState(type: SudokuType): void {
  let key: string = SudokuType[type];
  localStorage.removeItem(key);
}

// ======================================================================================================

export function selectSudokuType(type: SudokuType): ISudokuChoice {
  return dehydrateSudoku(type);
}

export function selectNewSudoku(type: SudokuType): ISudokuChoice {
  removeSudokuState(type);
  return dehydrateSudoku(type);
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

  // persist sudoku state
  persistSudoku(newState.sudokuChoice);
}

export function dehydrateState(): IState {
  let options: IPersistentStateOptions = dehydrateStateOptions();
  return {
    sudokuChoice: dehydrateSudoku(options.sudokuType),
    viewCellOptions: options.viewCellOptions,
    viewCellNames: options.viewCellNames,
    viewCellHints: options.viewCellHints
  };
}