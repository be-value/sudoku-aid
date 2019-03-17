import * as React from "react";
import { ICellUIState } from "./ICellUIState";
import { ICellUIProps } from "./ICellUIProps";
import { connect } from "react-redux";
import { selectCell } from "../../utils/actions";
import styles from "./CellUI.module.scss";

class CellUI extends React.Component<ICellUIProps, ICellUIState> {
  constructor(props: ICellUIProps) {
    super(props);
    this.state = { isSelected: false};
  }

    private onClick = () => {
    this.setState( {isSelected: !this.state.isSelected });
    this.props.selectCell(this.props.cell.name);
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
        <g className={this.state.isSelected ? styles.selectedCell : styles.cell}>
          <rect
            x="0"
            y="0"
            width={this.props.size}
            height={this.props.size}
          />
          // TODO: resize the fontsize to .9 ipv .5 AND show .value ipv .name
          <text
            x={this.props.size * 0.25}
            y={this.props.size * 0.75}
            fontSize={this.props.size * 0.6}
          >
            {this.props.cell.name}
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

export default connect(
  null,
  mapDispatchToProps
)(CellUI);
