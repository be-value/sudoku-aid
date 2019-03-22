export class Cell {
  // the name of the cell
  public readonly name: string;

  // the value of the cell
  public value: number | undefined;

  // the possible options for of the cell
  public options: Array<number> | undefined;

  // an indicator whether the cell value is value in its clusters
  public hasValidValue: boolean;

  constructor(
    name: string,
    value: number | undefined
  ) {
    this.name = name;
    this.value = value;
    this.options = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    this.hasValidValue = true;
  }

  public invalidateOptions(digits: number[]): void {
    this.options = [1, 2, 3, 4, 5, 6, 7, 8, 9].filter(option => !digits.includes(option));
  }
}
