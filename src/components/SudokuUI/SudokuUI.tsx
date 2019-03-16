import React, { Component } from "react";
import { connect } from "react-redux";
import CellUI from "../CellUI/CellUI";
import { selectCell } from "../../utils/actions";
import { ISudokuUIUIProps } from "./ISudokuUIProps";
import { ISudokuUIState } from "./ISudokuUIState";
import { ISudokuState } from "../../utils/store/ISudokuState";

class SudokuUI extends Component<ISudokuUIUIProps | any, ISudokuUIState> {
  constructor(props: any) {
    super(props);
    this.state = { width: window.innerWidth, height: window.innerHeight };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }

  componentDidMount(): void {
    this.updateWindowDimensions();
    window.addEventListener("resize", this.updateWindowDimensions);
  }

  componentWillUnmount(): void {
    window.removeEventListener("resize", this.updateWindowDimensions);
  }

  updateWindowDimensions(): void {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  }

  myWidth = () => {
    return this.state.width < this.state.height ? this.state.width-13 : this.state.height-13;
  }

  cellWidth = () => {
    return this.myWidth() / 9;
  }

  render(): JSX.Element {
    return (
      <div style={{ textAlign: "center" }}>
        <svg style={{ width: this.myWidth(), height: this.myWidth() }}>
          <rect x="0" y="0" width={this.myWidth()} height={this.myWidth()} style={{ stroke: "black", strokeWidth: 8, fill: "none" }}></rect>
          <line x1={3*this.cellWidth()-2} y1={0}
                x2={3*this.cellWidth()-2} y2={this.myWidth()}
                style={{ stroke: "black", strokeWidth: 4 }}></line>
          <line x1={6*this.cellWidth()-2} y1={0}
                x2={6*this.cellWidth()-2} y2={this.myWidth()}
                style={{ stroke: "black", strokeWidth: 4 }}></line>
          <line x1={0} y1={3*this.cellWidth()-2}
                x2={this.myWidth()} y2={3*this.cellWidth()-2}
                style={{ stroke: "black", strokeWidth: 4 }}></line>
          <line x1={0} y1={6*this.cellWidth()-2}
                x2={this.myWidth()} y2={6*this.cellWidth()-2}
                style={{ stroke: "black", strokeWidth: 4 }}></line>
          <CellUI size={this.cellWidth()} x={0*this.cellWidth()} y={ 0 * this.cellWidth()} cell={this.props.cells["a1"]}></CellUI>
          <CellUI size={this.cellWidth()} x={1*this.cellWidth()} y={ 0 * this.cellWidth()} cell={this.props.cells["b1"]}></CellUI>
          <CellUI size={this.cellWidth()} x={2*this.cellWidth()} y={ 0 * this.cellWidth()} cell={this.props.cells["c1"]}></CellUI>
          <CellUI size={this.cellWidth()} x={3*this.cellWidth()} y={ 0 * this.cellWidth()} cell={this.props.cells["d1"]}></CellUI>
          <CellUI size={this.cellWidth()} x={4*this.cellWidth()} y={ 0 * this.cellWidth()} cell={this.props.cells["e1"]}></CellUI>
          <CellUI size={this.cellWidth()} x={5*this.cellWidth()} y={ 0 * this.cellWidth()} cell={this.props.cells["f1"]}></CellUI>
          <CellUI size={this.cellWidth()} x={6*this.cellWidth()} y={ 0 * this.cellWidth()} cell={this.props.cells["g1"]}></CellUI>
          <CellUI size={this.cellWidth()} x={7*this.cellWidth()} y={ 0 * this.cellWidth()} cell={this.props.cells["h1"]}></CellUI>
          <CellUI size={this.cellWidth()} x={8*this.cellWidth()} y={ 0 * this.cellWidth()} cell={this.props.cells["i1"]}></CellUI>
          <CellUI size={this.cellWidth()} x={0*this.cellWidth()} y={ 1 * this.cellWidth()} cell={this.props.cells["a2"]}></CellUI>
          <CellUI size={this.cellWidth()} x={1*this.cellWidth()} y={ 1 * this.cellWidth()} cell={this.props.cells["b2"]}></CellUI>
          <CellUI size={this.cellWidth()} x={2*this.cellWidth()} y={ 1 * this.cellWidth()} cell={this.props.cells["c2"]}></CellUI>
          <CellUI size={this.cellWidth()} x={3*this.cellWidth()} y={ 1 * this.cellWidth()} cell={this.props.cells["d2"]}></CellUI>
          <CellUI size={this.cellWidth()} x={4*this.cellWidth()} y={ 1 * this.cellWidth()} cell={this.props.cells["e2"]}></CellUI>
          <CellUI size={this.cellWidth()} x={5*this.cellWidth()} y={ 1 * this.cellWidth()} cell={this.props.cells["f2"]}></CellUI>
          <CellUI size={this.cellWidth()} x={6*this.cellWidth()} y={ 1 * this.cellWidth()} cell={this.props.cells["g2"]}></CellUI>
          <CellUI size={this.cellWidth()} x={7*this.cellWidth()} y={ 1 * this.cellWidth()} cell={this.props.cells["h2"]}></CellUI>
          <CellUI size={this.cellWidth()} x={8*this.cellWidth()} y={ 1 * this.cellWidth()} cell={this.props.cells["i2"]}></CellUI>
          <CellUI size={this.cellWidth()} x={0*this.cellWidth()} y={ 2 * this.cellWidth()} cell={this.props.cells["a3"]}></CellUI>
          <CellUI size={this.cellWidth()} x={1*this.cellWidth()} y={ 2 * this.cellWidth()} cell={this.props.cells["b3"]}></CellUI>
          <CellUI size={this.cellWidth()} x={2*this.cellWidth()} y={ 2 * this.cellWidth()} cell={this.props.cells["c3"]}></CellUI>
          <CellUI size={this.cellWidth()} x={3*this.cellWidth()} y={ 2 * this.cellWidth()} cell={this.props.cells["d3"]}></CellUI>
          <CellUI size={this.cellWidth()} x={4*this.cellWidth()} y={ 2 * this.cellWidth()} cell={this.props.cells["e3"]}></CellUI>
          <CellUI size={this.cellWidth()} x={5*this.cellWidth()} y={ 2 * this.cellWidth()} cell={this.props.cells["f3"]}></CellUI>
          <CellUI size={this.cellWidth()} x={6*this.cellWidth()} y={ 2 * this.cellWidth()} cell={this.props.cells["g3"]}></CellUI>
          <CellUI size={this.cellWidth()} x={7*this.cellWidth()} y={ 2 * this.cellWidth()} cell={this.props.cells["h3"]}></CellUI>
          <CellUI size={this.cellWidth()} x={8*this.cellWidth()} y={ 2 * this.cellWidth()} cell={this.props.cells["i3"]}></CellUI>
          <CellUI size={this.cellWidth()} x={0*this.cellWidth()} y={ 3 * this.cellWidth()} cell={this.props.cells["a4"]}></CellUI>
          <CellUI size={this.cellWidth()} x={1*this.cellWidth()} y={ 3 * this.cellWidth()} cell={this.props.cells["b4"]}></CellUI>
          <CellUI size={this.cellWidth()} x={2*this.cellWidth()} y={ 3 * this.cellWidth()} cell={this.props.cells["c4"]}></CellUI>
          <CellUI size={this.cellWidth()} x={3*this.cellWidth()} y={ 3 * this.cellWidth()} cell={this.props.cells["d4"]}></CellUI>
          <CellUI size={this.cellWidth()} x={4*this.cellWidth()} y={ 3 * this.cellWidth()} cell={this.props.cells["e4"]}></CellUI>
          <CellUI size={this.cellWidth()} x={5*this.cellWidth()} y={ 3 * this.cellWidth()} cell={this.props.cells["f4"]}></CellUI>
          <CellUI size={this.cellWidth()} x={6*this.cellWidth()} y={ 3 * this.cellWidth()} cell={this.props.cells["g4"]}></CellUI>
          <CellUI size={this.cellWidth()} x={7*this.cellWidth()} y={ 3 * this.cellWidth()} cell={this.props.cells["h4"]}></CellUI>
          <CellUI size={this.cellWidth()} x={8*this.cellWidth()} y={ 3 * this.cellWidth()} cell={this.props.cells["i4"]}></CellUI>
          <CellUI size={this.cellWidth()} x={0*this.cellWidth()} y={ 4 * this.cellWidth()} cell={this.props.cells["a5"]}></CellUI>
          <CellUI size={this.cellWidth()} x={1*this.cellWidth()} y={ 4 * this.cellWidth()} cell={this.props.cells["b5"]}></CellUI>
          <CellUI size={this.cellWidth()} x={2*this.cellWidth()} y={ 4 * this.cellWidth()} cell={this.props.cells["c5"]}></CellUI>
          <CellUI size={this.cellWidth()} x={3*this.cellWidth()} y={ 4 * this.cellWidth()} cell={this.props.cells["d5"]}></CellUI>
          <CellUI size={this.cellWidth()} x={4*this.cellWidth()} y={ 4 * this.cellWidth()} cell={this.props.cells["e5"]}></CellUI>
          <CellUI size={this.cellWidth()} x={5*this.cellWidth()} y={ 4 * this.cellWidth()} cell={this.props.cells["f5"]}></CellUI>
          <CellUI size={this.cellWidth()} x={6*this.cellWidth()} y={ 4 * this.cellWidth()} cell={this.props.cells["g5"]}></CellUI>
          <CellUI size={this.cellWidth()} x={7*this.cellWidth()} y={ 4 * this.cellWidth()} cell={this.props.cells["h5"]}></CellUI>
          <CellUI size={this.cellWidth()} x={8*this.cellWidth()} y={ 4 * this.cellWidth()} cell={this.props.cells["i5"]}></CellUI>
          <CellUI size={this.cellWidth()} x={0*this.cellWidth()} y={ 5 * this.cellWidth()} cell={this.props.cells["a6"]}></CellUI>
          <CellUI size={this.cellWidth()} x={1*this.cellWidth()} y={ 5 * this.cellWidth()} cell={this.props.cells["b6"]}></CellUI>
          <CellUI size={this.cellWidth()} x={2*this.cellWidth()} y={ 5 * this.cellWidth()} cell={this.props.cells["c6"]}></CellUI>
          <CellUI size={this.cellWidth()} x={3*this.cellWidth()} y={ 5 * this.cellWidth()} cell={this.props.cells["d6"]}></CellUI>
          <CellUI size={this.cellWidth()} x={4*this.cellWidth()} y={ 5 * this.cellWidth()} cell={this.props.cells["e6"]}></CellUI>
          <CellUI size={this.cellWidth()} x={5*this.cellWidth()} y={ 5 * this.cellWidth()} cell={this.props.cells["f6"]}></CellUI>
          <CellUI size={this.cellWidth()} x={6*this.cellWidth()} y={ 5 * this.cellWidth()} cell={this.props.cells["g6"]}></CellUI>
          <CellUI size={this.cellWidth()} x={7*this.cellWidth()} y={ 5 * this.cellWidth()} cell={this.props.cells["h6"]}></CellUI>
          <CellUI size={this.cellWidth()} x={8*this.cellWidth()} y={ 5 * this.cellWidth()} cell={this.props.cells["i6"]}></CellUI>
          <CellUI size={this.cellWidth()} x={0*this.cellWidth()} y={ 6 * this.cellWidth()} cell={this.props.cells["a7"]}></CellUI>
          <CellUI size={this.cellWidth()} x={1*this.cellWidth()} y={ 6 * this.cellWidth()} cell={this.props.cells["b7"]}></CellUI>
          <CellUI size={this.cellWidth()} x={2*this.cellWidth()} y={ 6 * this.cellWidth()} cell={this.props.cells["c7"]}></CellUI>
          <CellUI size={this.cellWidth()} x={3*this.cellWidth()} y={ 6 * this.cellWidth()} cell={this.props.cells["d7"]}></CellUI>
          <CellUI size={this.cellWidth()} x={4*this.cellWidth()} y={ 6 * this.cellWidth()} cell={this.props.cells["e7"]}></CellUI>
          <CellUI size={this.cellWidth()} x={5*this.cellWidth()} y={ 6 * this.cellWidth()} cell={this.props.cells["f7"]}></CellUI>
          <CellUI size={this.cellWidth()} x={6*this.cellWidth()} y={ 6 * this.cellWidth()} cell={this.props.cells["g7"]}></CellUI>
          <CellUI size={this.cellWidth()} x={7*this.cellWidth()} y={ 6 * this.cellWidth()} cell={this.props.cells["h7"]}></CellUI>
          <CellUI size={this.cellWidth()} x={8*this.cellWidth()} y={ 6 * this.cellWidth()} cell={this.props.cells["i7"]}></CellUI>
          <CellUI size={this.cellWidth()} x={0*this.cellWidth()} y={ 7 * this.cellWidth()} cell={this.props.cells["a8"]}></CellUI>
          <CellUI size={this.cellWidth()} x={1*this.cellWidth()} y={ 7 * this.cellWidth()} cell={this.props.cells["b8"]}></CellUI>
          <CellUI size={this.cellWidth()} x={2*this.cellWidth()} y={ 7 * this.cellWidth()} cell={this.props.cells["c8"]}></CellUI>
          <CellUI size={this.cellWidth()} x={3*this.cellWidth()} y={ 7 * this.cellWidth()} cell={this.props.cells["d8"]}></CellUI>
          <CellUI size={this.cellWidth()} x={4*this.cellWidth()} y={ 7 * this.cellWidth()} cell={this.props.cells["e8"]}></CellUI>
          <CellUI size={this.cellWidth()} x={5*this.cellWidth()} y={ 7 * this.cellWidth()} cell={this.props.cells["f8"]}></CellUI>
          <CellUI size={this.cellWidth()} x={6*this.cellWidth()} y={ 7 * this.cellWidth()} cell={this.props.cells["g8"]}></CellUI>
          <CellUI size={this.cellWidth()} x={7*this.cellWidth()} y={ 7 * this.cellWidth()} cell={this.props.cells["h8"]}></CellUI>
          <CellUI size={this.cellWidth()} x={8*this.cellWidth()} y={ 7 * this.cellWidth()} cell={this.props.cells["i8"]}></CellUI>
          <CellUI size={this.cellWidth()} x={0*this.cellWidth()} y={ 8 * this.cellWidth()} cell={this.props.cells["a9"]}></CellUI>
          <CellUI size={this.cellWidth()} x={1*this.cellWidth()} y={ 8 * this.cellWidth()} cell={this.props.cells["b9"]}></CellUI>
          <CellUI size={this.cellWidth()} x={2*this.cellWidth()} y={ 8 * this.cellWidth()} cell={this.props.cells["c9"]}></CellUI>
          <CellUI size={this.cellWidth()} x={3*this.cellWidth()} y={ 8 * this.cellWidth()} cell={this.props.cells["d9"]}></CellUI>
          <CellUI size={this.cellWidth()} x={4*this.cellWidth()} y={ 8 * this.cellWidth()} cell={this.props.cells["e9"]}></CellUI>
          <CellUI size={this.cellWidth()} x={5*this.cellWidth()} y={ 8 * this.cellWidth()} cell={this.props.cells["f9"]}></CellUI>
          <CellUI size={this.cellWidth()} x={6*this.cellWidth()} y={ 8 * this.cellWidth()} cell={this.props.cells["g9"]}></CellUI>
          <CellUI size={this.cellWidth()} x={7*this.cellWidth()} y={ 8 * this.cellWidth()} cell={this.props.cells["h9"]}></CellUI>
          <CellUI size={this.cellWidth()} x={8*this.cellWidth()} y={ 8 * this.cellWidth()} cell={this.props.cells["i9"]}></CellUI>
        </svg>
      </div>
    );
  }
}

function mapStateToProps(state: ISudokuState): any {
  return { cells: state.game.cells };
}

export default connect(mapStateToProps, null)(SudokuUI);
