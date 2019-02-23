import { Status } from "./Status";

export class Cell {
  // the name of the cell
  public readonly name: string;

  // the value of the cell
  private value: number | null;

  // the possible options for of the cell
  private options: Array<number>;

  constructor(
    name: string,
    value: number | null,
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
  public Status(): Status {
    if (this.value === undefined) {
      return Status.Valid;
    }

    if (this.options.find(option => option === this.value) !== undefined) {
      return this.options.length === 1 ? Status.Valid : Status.Unknown;
    }

    return Status.Invalid;
  }

  // returns true if specified number is a valid option for this cell, false otherwise - no side effects
  public isValidOption(digit: number): boolean {
    var found: number | undefined = this.options.find(
      option => option === digit
    );
    return found !== undefined;
  }

  // invalidate specified option for this cell
  public invalidateOption(digit: number): void {
    var newOptions: Array<number> = this.options.filter(
      option => option !== digit
    );
    this.options = newOptions;
  }
}
