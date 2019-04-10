import { SudokuType } from "../Game/SudokuType";

export interface ISudokuLayout {
  lastIdx: number;
  cols: Array<string>;
  rows: Array<string>;
}

export function sudokuLayout(type: SudokuType): ISudokuLayout {
  switch (type) {
    case SudokuType._6x6:
    case SudokuType._6x6Cross:
      return {
        lastIdx: 5,
        cols: ["a", "b", "c", "d", "e", "f"],
        rows: ["1", "2", "3", "4", "5", "6"]
      };
    case SudokuType._9x9:
    case SudokuType._9x9Cross:
      return {
        lastIdx: 8,
        cols: ["a", "b", "c", "d", "e", "f", "g", "h", "i"],
        rows: ["1", "2", "3", "4", "5", "6", "7", "8", "9"]
      };
  }
}

export function nextCellName(type: SudokuType, currentCellName: string, keyCode: number): string {
  let layout: ISudokuLayout = sudokuLayout(type);
  let current: Array<string> = currentCellName.split("");
  let name: string | undefined = undefined;
  switch (keyCode) {
    case 35: // end
      name = layout.cols[layout.lastIdx] + current[1];
      break;
    case 36: // home
      name = layout.cols[0] + current[1];
      break;
    case 37: { // arrow left
      let idx: number = layout.cols.indexOf(current[0]) - 1;
      if (idx < 0) {
        idx = layout.lastIdx;
      }
      name = layout.cols[idx] + current[1];
      break;
    }
    case 39: { // arrow right
      let idx: number = layout.cols.indexOf(current[0]) + 1;
      if (idx > layout.lastIdx) {
        idx = 0;
      }
      name = layout.cols[idx] + current[1];
      break;
    }
    case 33: // pgUp
      name = current[0] + layout.rows[0];
      break;
    case 34: // pgDn
      name = current[0] + layout.rows[layout.lastIdx];
      break;
    case 38: { // arrow up
      let idx: number = layout.rows.indexOf(current[1]) - 1;
      if (idx < 0) {
        idx = layout.lastIdx;
      }
      name = current[0] + layout.rows[idx];
      break;
    }
    case 40: { // arrow down
      let idx: number = layout.rows.indexOf(current[1]) + 1;
      if (idx > layout.lastIdx) {
        idx = 0;
      }
      name = current[0] + layout.rows[idx];
      break;
    }
  }

  return name as string;
}

