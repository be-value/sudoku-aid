export class Cell {
  // the name of the cell
  public readonly name: string;

  // the value of the cell
  public value: number | undefined;

  // the possible options for of the cell
  public options: Array<number>;

  // an indicator whether the cell value is value in its clusters
  public hasValidValue: boolean;

  constructor(
    name: string,
    options: Array<number>
  ) {
    this.name = name;
    this.value = undefined;
    this.options = options;
    this.hasValidValue = true;
  }

  public invalidateOptions(digits: number[]): void {
    this.options = this.options.filter(option => !digits.includes(option));
  }
}
