export class Cell {
  // the name of the cell
  public readonly name: string;

  // the value of the cell
  public value: number | undefined;

  // the possible options for of the cell
  public options: Array<number>;

  // an indicator whether the cell value is valid in its clusters
  public hasValidValue: boolean;

  // an indicator for visibility in cross clusters
  public crossHighlight: boolean;

  // an indicator for hinting
  public hintHighlight: boolean;

  // the complete list of all the possible options
  private readonly allOptions: Array<number>;

  constructor(
    name: string,
    options: Array<number>
  ) {
    this.name = name;
    this.value = undefined;
    // create copies of the original options arrays!
    this.allOptions = [...options];
    this.options = [...options];
    this.hasValidValue = true;
    this.crossHighlight = false;
    this.hintHighlight = false;
  }

  public invalidateOptions(digits: number[]): void {
    this.options = this.allOptions.filter(option => !digits.includes(option));
  }
}
