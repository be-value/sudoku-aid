import * as React from "react";
import { ICellUIState } from "./ICellUIState";
import { ICellUIProps } from "./ICellUIProps";
import { connect } from "react-redux";
import { selectCell } from "../../utils/actions";


class CellUI extends React.Component<ICellUIProps, ICellUIState> {
  constructor(props: ICellUIProps) {
    super(props);
    this.state = {};
  }

  onClick = () => {
    this.props.selectCell(this.props.cell.name);
  }

  public render(): JSX.Element {
    return (
      <svg width={this.props.size} height={this.props.size} x={this.props.x} y={this.props.y} onClick={this.onClick}>
        <rect x="0" y="0" width={this.props.size} height={this.props.size} style={{ stroke: "black", strokeWidth: 1, fill: "none" }}></rect>

        // TODO: resize the fontsize to .9 ipv .5 AND show .value ipv .name
        <text x={this.props.size*.25} y={this.props.size*.75} fontSize={this.props.size*.6}>{this.props.cell.name}</text>
      </svg>
    );
  }
}

function mapDispatchToProps(dispatch: any): any {
  return {
    selectCell: (cell: string) => dispatch(selectCell(cell))
  };
}

export default connect(null, mapDispatchToProps)(CellUI);

