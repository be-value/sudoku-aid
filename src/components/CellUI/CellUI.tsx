import * as React from "react";
import { ICellUIState } from "./ICellUIState";
import { ICellUIProps } from "./ICellUIProps";
import { connect } from "react-redux";
import { selectCell, cellInput } from "../../utils/actions";
import styles from "./CellUI.module.scss";
import { ISudokuState } from "../../utils/store/ISudokuState";

class CellUI extends React.Component<ICellUIProps, ICellUIState> {
  constructor(props: ICellUIProps) {
    super(props);
  }

  private cellInput = (e: any) => {
    // prevent default behavior to prevent input field getting populated
    e.preventDefault();
    let i: number = +e.key;
    if (this.props.isCellSelected) {
      if (i > 0 && i < 10) {
        this.props.cellInput(i); // digits 1 throuhg 9
      } else {
        if (e.keyCode === 8 || e.keyCode === 32 || e.keyCode === 46) {
          this.props.cellInput(undefined); // backspace, space and delete
        }
      }
    }
  }

  private selectMe = () => {
    this.props.isCellSelected
      ? this.props.selectCell(undefined)
      : this.props.selectCell(this.props.cellName);

    // set focus on hidden input field to trigger ipad keyboard to pop up
    let element: HTMLElement | null = document.getElementById(
      this.props.cellName
    );
    if (element !== null) {
      element.focus();
    }
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
        <g
          className={
            this.props.isCellSelected
              ? (this.props.hasValidValue
                ? styles.selectedCell
                : styles.invalidSelectedCell)
              : (this.props.hasValidValue
                ? styles.cell
                : styles.invalidCell)
          }
        >
          <rect x="0" y="0" width={this.props.size} height={this.props.size} />
          <foreignObject>
            <input id={this.props.cellName} type={"number"} />
          </foreignObject>
          <text
            tabIndex={0}
            x={this.props.size * 0.35}
            y={this.props.size * 0.7}
            fontSize={this.props.size * 0.65}
          >
            {this.props.cellValue}
          </text>
          <text
            x={this.props.size * 0.05}
            y={this.props.size * 0.95}
            fontSize={this.props.size * 0.15}
          >
            {this.props.cellOptions}
          </text>
        </g>
      </svg>
    );
  }
}

function mapStateToProps(state: ISudokuState, ownProps: ICellUIProps): any {
  return {
    isCellSelected: ownProps.cellName === state.selectedCellName,
    hasValidValue: state.game.getCell(ownProps.cellName).hasValidValue,
    cellValue: state.game.getCell(ownProps.cellName).value,
    cellOptions: state.game.getCell(ownProps.cellName).options
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
