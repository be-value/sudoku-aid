import { Component } from "react";
import Sudoku6x6 from "../Sudoku/Sudoku6x6";
import Sudoku9x9 from "../Sudoku/Sudoku9x9";
import { SudokuType } from "../../core/config/SudokuType";

interface ISudokuUIChoice {
  type: SudokuType;
  ui: Component;
}

const sudokuUIChoices: Array<ISudokuUIChoice> = [
  {
    type: SudokuType._9x9,
    ui: new Sudoku9x9(undefined)
  },
  {
    type: SudokuType._9x9Cross,
    ui: new Sudoku9x9(undefined)
  },
  {
    type: SudokuType._6x6,
    ui: new Sudoku6x6(undefined)
  },
  {
    type: SudokuType._6x6Cross,
    ui: new Sudoku6x6(undefined),
  }
];

export function sudokuUI(type: SudokuType): Component {
  let choice: ISudokuUIChoice = sudokuUIChoices.find(uic => uic.type === type) as ISudokuUIChoice;
  return choice.ui;
}
