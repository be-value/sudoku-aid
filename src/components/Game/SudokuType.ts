import { Component } from "react";
import { Sudoku } from "../../core/Sudoku";
import { Sudoku6x6Configurator } from "../../core/config/Sudoku6x6Configurator";
import { Sudoku9x9Configurator } from "../../core/config/Sudoku9x9Configurator";
import Sudoku6x6 from "../Sudoku/Sudoku6x6";
import Sudoku9x9 from "../Sudoku/Sudoku9x9";

export enum SudokuType {
  _9x9,
  _9x9Cross,
  _6x6,
  _6x6Cross
}

export interface ISudokuChoice {
  type: SudokuType;
  game: Sudoku;
  frontend: Component;
}

const sudokuChoices: Array<ISudokuChoice> = [
  {
    type: SudokuType._9x9,
    game: new Sudoku(new Sudoku9x9Configurator(false)),
    frontend: new Sudoku9x9(undefined)
  },
  {
    type: SudokuType._9x9,
    game: new Sudoku(new Sudoku9x9Configurator(true)),
    frontend: new Sudoku9x9(undefined)
  },
  {
    type: SudokuType._6x6,
    game: new Sudoku(new Sudoku6x6Configurator(false)),
    frontend: new Sudoku6x6(undefined)
  },
  {
    type: SudokuType._6x6,
    game: new Sudoku(new Sudoku6x6Configurator(true)),
    frontend: new Sudoku6x6(undefined)
  }
];

function getRandomInt(max: number): number {
  return Math.floor(Math.random() * Math.floor(max));
}

export function sudokuChoice(type: SudokuType): ISudokuChoice {
  return sudokuChoices.find(sc => sc.type === type) as ISudokuChoice;
}

export function randomSudokuChoice(): ISudokuChoice {
  let idx: number = getRandomInt(sudokuChoices.length);
  return sudokuChoices[idx];
}
