import { Status } from "./Status";

export class Cell {
  // the name of the cell
  public readonly name: string;

  // the value of the cell
  public value: number | undefined;

  // the possible options for of the cell
  public options: Array<number> | undefined;

  constructor(
    name: string,
    value: number | undefined,
    options: Array<number> | undefined = undefined
  ) {
    this.name = name;
    this.value = value;
    if (options === undefined) {
      this.options = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    } else {
      this.options = options;
    }
  }

  // return the status of this Cell - no side effects
  // public Status(): Status {
  //   if (this.value === undefined) {
  //     return Status.Valid;
  //   }

  //   if (this.options !== undefined && this.options.find(option => option === this.value) !== undefined) {
  //     return this.options.length === 1 ? Status.Valid : Status.Unknown;
  //   }

  //   return Status.Invalid;
  // }

  // returns true if specified number is a valid option for this cell, false otherwise - no side effects
  // public isValidOption(digit: number): boolean {
  //   var found: number | undefined = this.options !== undefined ? this.options.find(
  //     option => option === digit
  //   ) : undefined;
  //   return found !== undefined;
  // }

  public invalidateOptions(digits: number[]): void {
    this.options = [1, 2, 3, 4, 5, 6, 7, 8, 9].filter(option => !digits.includes(option));
  }
}
