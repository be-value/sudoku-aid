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


interface IPersistentStateOptions {
  sudokuType: SudokuType;
  viewCellOptions: boolean;
  viewCellNames: boolean;
  viewCellHints: boolean;
}

export function sudokuChoice(type: SudokuType): ISudokuChoice {
  return sudokuChoices.find(sc => sc.type === type) as ISudokuChoice;
}

export function persistState(newState: IState): void {
  let persistentOptions: IPersistentStateOptions = {
    sudokuType: newState.sudokuChoice.type,
    viewCellOptions: newState.viewCellOptions,
    viewCellNames: newState.viewCellNames,
    viewCellHints: newState.viewCellHints
  };
}

export function dehydrateState(): IState {
  return {
    sudokuChoice: sudokuChoice(SudokuType._9x9),
    viewCellOptions: false,
    viewCellNames: false,
    viewCellHints: false
  };
}
