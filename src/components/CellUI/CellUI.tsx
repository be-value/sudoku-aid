import * as React from "react";
import { ICellUIState } from "./ICellUIState";
import { ICellUIProps } from "./ICellUIProps";
import { connect } from "react-redux";
import { selectCell } from "../../utils/actions";
import styles from "./CellUI.module.scss";
import { ISudokuState } from "../../utils/store/ISudokuState";

class CellUI extends React.Component<ICellUIProps, ICellUIState> {
  constructor(props: ICellUIProps) {
    super(props);
    this.state = {};
  }

  private onClick = () => {
    this.props.cell.name === this.props.selectedCellName
      ? this.props.selectCell("")
      : this.props.selectCell(this.props.cell.name);
  }

  public render(): JSX.Element {
    return (
      <svg
        width={this.props.size}
        height={this.props.size}
        x={this.props.x}
        y={this.props.y}
        onClick={this.onClick}
      >
        <g className={this.props.cell.name === this.props.selectedCellName ? styles.selectedCell : styles.cell}>
          <rect
            x="0"
            y="0"
            width={this.props.size}
            height={this.props.size}
          />
          // TODO: resize the fontsize to .9 ipv .5 AND show .value ipv .name
          <text
            x={this.props.size * 0.35}
            y={this.props.size * 0.65}
            fontSize={this.props.size * 0.4}
          >
            {this.props.cell.name}
          </text>
          <text
            x={this.props.size * 0.05}
            y={this.props.size * 0.95}
            fontSize={this.props.size * 0.15}
          >
            {this.props.cell.options}
          </text>
        </g>
      </svg>
    );
  }
}

function mapDispatchToProps(dispatch: any): any {
  return {
    selectCell: (cell: string) => dispatch(selectCell(cell))
  };
}

function mapStateToProps(state: ISudokuState): any {
  return {
    selectedCellName: state.selectedCellName
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CellUI);
