import * as React from "react";
import { IDigitBoxState } from "./IDigitBoxState";
import { IDigitBoxProps } from "./IDigitBoxProps";


class DigitBox extends React.Component<IDigitBoxProps, IDigitBoxState> {
  constructor(props: IDigitBoxProps) {
    super(props);
    this.state = {};
  }

  public render(): JSX.Element {
    return (
      <svg width={this.props.size} height={this.props.size} x={this.props.x} y={this.props.y}>
        <rect x="0" y="0" width={this.props.size} height={this.props.size} style={{ stroke: "black", strokeWidth: 1, fill: "none" }}></rect>
        <text x={this.props.size*.25} y={this.props.size*.75} fontSize={this.props.size*.9}>{this.props.children}</text>
      </svg>
    );
  }
}

export default DigitBox;
