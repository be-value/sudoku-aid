import * as React from "react";
import { ICellUIState } from "./ICellUIState";
import { ICellUIProps } from "./ICellUIProps";


class CellUI extends React.Component<ICellUIProps, ICellUIState> {
  constructor(props: ICellUIProps) {
    super(props);
    this.state = {};
  }

  public render(): JSX.Element {
    return (
      <svg width={this.props.size} height={this.props.size} x={this.props.x} y={this.props.y}>
        <rect x="0" y="0" width={this.props.size} height={this.props.size} style={{ stroke: "black", strokeWidth: 1, fill: "none" }}></rect>

        // TODO: resize the fontsize to .9 ipv .5
        <text x={this.props.size*.25} y={this.props.size*.75} fontSize={this.props.size*.5}>{this.props.children}</text>
      </svg>
    );
  }
}

export default CellUI;
