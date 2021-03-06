import React from "react";
import { ICellState } from "./ICellState";
import { ICellProps } from "./ICellProps";
import { connect } from "react-redux";
import { selectCell, cellInput } from "../../utils/actions";
import styles from "./Cell.module.scss";
import { IState } from "../../utils/store/IState";
import { Cell } from "../../core/Cell";
import { nextCellName } from "../Sudoku/Navigator";
import { SudokuType } from "../../core/config/SudokuType";

class CellUI extends React.Component<ICellProps, ICellState> {
  constructor(props: ICellProps) {
    super(props);
    this.state = { classes: this.classNames(this.props)};
  }

  componentWillReceiveProps(nextProps: ICellProps): void {
    this.setState( {classes: this.classNames(nextProps)});
  }


  private cellInput = (e: any) => {
    // prevent default behavior to prevent input field getting populated
    e.preventDefault();
    if (this.props.isCellSelected) {
        if (e.keyCode === 8 || e.keyCode === 32 || e.keyCode === 46) {
          this.props.cellInput(undefined); // backspace, space and delete
        } else {
          if (e.keyCode > 32 && e.keyCode < 41) {
            let targetCell: string = nextCellName(this.props.sudokuType as SudokuType, this.props.cellName, e.keyCode);
            if (targetCell !== undefined) {
              this.selectCell(targetCell);
            }
          } else {
          let i: number = +e.key;
          if (i > 0 && i < 10) {
            this.props.cellInput(i); // digits 1 throuhg 9
          }
        }
      }
    }
  }

  private selectCell = (cellName: string) => {
    this.props.selectCell(cellName);
    this.selectInputElement(cellName);
  }

  private selectMe = () => {
    this.props.isCellSelected
      ? this.props.selectCell(undefined)
      : this.selectCell(this.props.cellName);
    this.selectInputElement(this.props.cellName);
  }

  private selectInputElement = (cellName: any) => {
    // set focus on hidden input field to trigger ipad keyboard to pop up
    let element: HTMLElement | null = document.getElementById(
      cellName
    );
    if (element !== null) {
      element.focus();
    }
  }

  private classNames = (props: ICellProps) => {
    let classes: any = {
      [styles.cell]: true,
      // tslint:disable:max-line-length
      [styles.bkWhite]: props.hasValidValue && !props.isCellSelected && !props.crossHighlight && !(props.viewCellHints && props.hintHighlight),
      [styles.bkLightGray]: props.hasValidValue && !props.isCellSelected && props.crossHighlight && !(props.viewCellHints && props.hintHighlight),
      [styles.bkLightBlue]: props.hasValidValue && props.isCellSelected && !(props.viewCellHints && props.hintHighlight),
      [styles.bkLightRed]: !props.hasValidValue && !(props.viewCellHints && props.hintHighlight),
      [styles.bkLightGreen]: props.viewCellHints && props.hintHighlight,
      [styles.fgBlack]: !props.isCellSelected && props.hasValidValue,
      [styles.fgBlue]: props.isCellSelected && props.hasValidValue,
      [styles.fgRed]: !props.hasValidValue
    };
    return Object.entries(classes).filter(([key, value]) => value).map(([key, value]) => key).join(" ");
  }

  public render(): JSX.Element {
    return (
      <svg
        width={this.props.size}
        height={this.props.size}
        x={this.props.x}
        y={this.props.y}
        onClick={this.selectMe}
        onKeyDown={this.cellInput}
        tabIndex={0}
      >
        <g className={this.state.classes}>
          <rect x="0" y="0" width={this.props.size} height={this.props.size} />
          <foreignObject>
            <input id={this.props.cellName} type={"number"} />
          </foreignObject>
          <text
            tabIndex={0}
            x={this.props.size * 0.30}
            y={this.props.size * 0.8}
            fontSize={this.props.size * 0.8}
          >
            {this.props.cellValue}
          </text>
          { this.props.viewCellOptions && this.props.cellValue === undefined && <text
            x={this.props.size * 0.05}
            y={this.props.size * 0.95}
            fontSize={this.props.size * 0.15}
          >
            {this.props.cellOptions}
          </text>}
          { this.props.viewCellNames && <text
            x={this.props.size * 0.05}
            y={this.props.size * 0.1}
            fontSize={this.props.size * 0.1}
          >
            {this.props.cellName}
          </text>}
        </g>
      </svg>
    );
  }
}

function mapStateToProps(state: IState, ownProps: ICellProps): any {
  let cell: Cell = state.sudokuChoice.game.getCell(ownProps.cellName);
  return {
    isCellSelected: ownProps.cellName === state.sudokuChoice.selectedCellName,
    hasValidValue: cell.hasValidValue,
    cellValue: cell.value,
    cellOptions: cell.options,
    crossHighlight: cell.crossHighlight,
    hintHighlight: cell.hintHighlight,
    sudokuType: state.sudokuChoice.type,
    viewCellOptions: state.viewCellOptions,
    viewCellNames: state.viewCellNames,
    viewCellHints: state.viewCellHints,
  };
}

function mapDispatchToProps(dispatch: any): any {
  return {
    selectCell: (cellName: string | undefined) =>
      dispatch(selectCell(cellName)),
    cellInput: (value: number | undefined) => dispatch(cellInput(value))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CellUI);
