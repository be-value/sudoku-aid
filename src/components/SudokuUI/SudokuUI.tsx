import React, { Component } from "react";
import { connect } from "react-redux";
import CellUI from "../CellUI/CellUI";
import { selectCell } from "../../utils/actions";
import { ISudokuUIUIProps } from "./ISudokuUIProps";
import { ISudokuUIState } from "./ISudokuUIState";

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

  onClick = () => {
    alert("hello");
    this.props.selectCell("Hi from redux");
  }

  render(): JSX.Element {
    return (
      <div style={{ textAlign: "center" }} onClick={this.onClick}>
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
          <CellUI size={this.cellWidth()} x={0*this.cellWidth()} y={ 0 * this.cellWidth()}>a1</CellUI>
          <CellUI size={this.cellWidth()} x={1*this.cellWidth()} y={ 0 * this.cellWidth()}>b1</CellUI>
          <CellUI size={this.cellWidth()} x={2*this.cellWidth()} y={ 0 * this.cellWidth()}>c1</CellUI>
          <CellUI size={this.cellWidth()} x={3*this.cellWidth()} y={ 0 * this.cellWidth()}>d1</CellUI>
          <CellUI size={this.cellWidth()} x={4*this.cellWidth()} y={ 0 * this.cellWidth()}>e1 </CellUI>
          <CellUI size={this.cellWidth()} x={5*this.cellWidth()} y={ 0 * this.cellWidth()}>f1</CellUI>
          <CellUI size={this.cellWidth()} x={6*this.cellWidth()} y={ 0 * this.cellWidth()}>g1</CellUI>
          <CellUI size={this.cellWidth()} x={7*this.cellWidth()} y={ 0 * this.cellWidth()}>h1</CellUI>
          <CellUI size={this.cellWidth()} x={8*this.cellWidth()} y={ 0 * this.cellWidth()}>i1</CellUI>
          <CellUI size={this.cellWidth()} x={0*this.cellWidth()} y={ 1 * this.cellWidth()}>a2</CellUI>
          <CellUI size={this.cellWidth()} x={1*this.cellWidth()} y={ 1 * this.cellWidth()}>b2</CellUI>
          <CellUI size={this.cellWidth()} x={2*this.cellWidth()} y={ 1 * this.cellWidth()}>c2</CellUI>
          <CellUI size={this.cellWidth()} x={3*this.cellWidth()} y={ 1 * this.cellWidth()}>d2</CellUI>
          <CellUI size={this.cellWidth()} x={4*this.cellWidth()} y={ 1 * this.cellWidth()}>e2</CellUI>
          <CellUI size={this.cellWidth()} x={5*this.cellWidth()} y={ 1 * this.cellWidth()}>f2</CellUI>
          <CellUI size={this.cellWidth()} x={6*this.cellWidth()} y={ 1 * this.cellWidth()}>g2</CellUI>
          <CellUI size={this.cellWidth()} x={7*this.cellWidth()} y={ 1 * this.cellWidth()}>h2</CellUI>
          <CellUI size={this.cellWidth()} x={8*this.cellWidth()} y={ 1 * this.cellWidth()}>i2</CellUI>
          <CellUI size={this.cellWidth()} x={0*this.cellWidth()} y={ 2 * this.cellWidth()}>a3</CellUI>
          <CellUI size={this.cellWidth()} x={1*this.cellWidth()} y={ 2 * this.cellWidth()}>b3</CellUI>
          <CellUI size={this.cellWidth()} x={2*this.cellWidth()} y={ 2 * this.cellWidth()}>c3</CellUI>
          <CellUI size={this.cellWidth()} x={3*this.cellWidth()} y={ 2 * this.cellWidth()}>d3</CellUI>
          <CellUI size={this.cellWidth()} x={4*this.cellWidth()} y={ 2 * this.cellWidth()}>e3</CellUI>
          <CellUI size={this.cellWidth()} x={5*this.cellWidth()} y={ 2 * this.cellWidth()}>f3</CellUI>
          <CellUI size={this.cellWidth()} x={6*this.cellWidth()} y={ 2 * this.cellWidth()}>g3</CellUI>
          <CellUI size={this.cellWidth()} x={7*this.cellWidth()} y={ 2 * this.cellWidth()}>h3</CellUI>
          <CellUI size={this.cellWidth()} x={8*this.cellWidth()} y={ 2 * this.cellWidth()}>i3</CellUI>
          <CellUI size={this.cellWidth()} x={0*this.cellWidth()} y={ 3 * this.cellWidth()}>a4</CellUI>
          <CellUI size={this.cellWidth()} x={1*this.cellWidth()} y={ 3 * this.cellWidth()}>b4</CellUI>
          <CellUI size={this.cellWidth()} x={2*this.cellWidth()} y={ 3 * this.cellWidth()}>c4</CellUI>
          <CellUI size={this.cellWidth()} x={3*this.cellWidth()} y={ 3 * this.cellWidth()}>d4</CellUI>
          <CellUI size={this.cellWidth()} x={4*this.cellWidth()} y={ 3 * this.cellWidth()}>e4</CellUI>
          <CellUI size={this.cellWidth()} x={5*this.cellWidth()} y={ 3 * this.cellWidth()}>f4</CellUI>
          <CellUI size={this.cellWidth()} x={6*this.cellWidth()} y={ 3 * this.cellWidth()}>g4</CellUI>
          <CellUI size={this.cellWidth()} x={7*this.cellWidth()} y={ 3 * this.cellWidth()}>h4</CellUI>
          <CellUI size={this.cellWidth()} x={8*this.cellWidth()} y={ 3 * this.cellWidth()}>i4</CellUI>
          <CellUI size={this.cellWidth()} x={0*this.cellWidth()} y={ 4 * this.cellWidth()}>a5</CellUI>
          <CellUI size={this.cellWidth()} x={1*this.cellWidth()} y={ 4 * this.cellWidth()}>b5</CellUI>
          <CellUI size={this.cellWidth()} x={2*this.cellWidth()} y={ 4 * this.cellWidth()}>c5</CellUI>
          <CellUI size={this.cellWidth()} x={3*this.cellWidth()} y={ 4 * this.cellWidth()}>d5</CellUI>
          <CellUI size={this.cellWidth()} x={4*this.cellWidth()} y={ 4 * this.cellWidth()}>e5</CellUI>
          <CellUI size={this.cellWidth()} x={5*this.cellWidth()} y={ 4 * this.cellWidth()}>f5</CellUI>
          <CellUI size={this.cellWidth()} x={6*this.cellWidth()} y={ 4 * this.cellWidth()}>g5</CellUI>
          <CellUI size={this.cellWidth()} x={7*this.cellWidth()} y={ 4 * this.cellWidth()}>h5</CellUI>
          <CellUI size={this.cellWidth()} x={8*this.cellWidth()} y={ 4 * this.cellWidth()}>i5</CellUI>
          <CellUI size={this.cellWidth()} x={0*this.cellWidth()} y={ 5 * this.cellWidth()}>a6</CellUI>
          <CellUI size={this.cellWidth()} x={1*this.cellWidth()} y={ 5 * this.cellWidth()}>b6</CellUI>
          <CellUI size={this.cellWidth()} x={2*this.cellWidth()} y={ 5 * this.cellWidth()}>c6</CellUI>
          <CellUI size={this.cellWidth()} x={3*this.cellWidth()} y={ 5 * this.cellWidth()}>d6</CellUI>
          <CellUI size={this.cellWidth()} x={4*this.cellWidth()} y={ 5 * this.cellWidth()}>e6</CellUI>
          <CellUI size={this.cellWidth()} x={5*this.cellWidth()} y={ 5 * this.cellWidth()}>f6</CellUI>
          <CellUI size={this.cellWidth()} x={6*this.cellWidth()} y={ 5 * this.cellWidth()}>g6</CellUI>
          <CellUI size={this.cellWidth()} x={7*this.cellWidth()} y={ 5 * this.cellWidth()}>h6</CellUI>
          <CellUI size={this.cellWidth()} x={8*this.cellWidth()} y={ 5 * this.cellWidth()}>i6</CellUI>
          <CellUI size={this.cellWidth()} x={0*this.cellWidth()} y={ 6 * this.cellWidth()}>a7</CellUI>
          <CellUI size={this.cellWidth()} x={1*this.cellWidth()} y={ 6 * this.cellWidth()}>b7</CellUI>
          <CellUI size={this.cellWidth()} x={2*this.cellWidth()} y={ 6 * this.cellWidth()}>c7</CellUI>
          <CellUI size={this.cellWidth()} x={3*this.cellWidth()} y={ 6 * this.cellWidth()}>d7</CellUI>
          <CellUI size={this.cellWidth()} x={4*this.cellWidth()} y={ 6 * this.cellWidth()}>e7</CellUI>
          <CellUI size={this.cellWidth()} x={5*this.cellWidth()} y={ 6 * this.cellWidth()}>f7</CellUI>
          <CellUI size={this.cellWidth()} x={6*this.cellWidth()} y={ 6 * this.cellWidth()}>g7</CellUI>
          <CellUI size={this.cellWidth()} x={7*this.cellWidth()} y={ 6 * this.cellWidth()}>h7</CellUI>
          <CellUI size={this.cellWidth()} x={8*this.cellWidth()} y={ 6 * this.cellWidth()}>i7</CellUI>
          <CellUI size={this.cellWidth()} x={0*this.cellWidth()} y={ 7 * this.cellWidth()}>a8</CellUI>
          <CellUI size={this.cellWidth()} x={1*this.cellWidth()} y={ 7 * this.cellWidth()}>b8</CellUI>
          <CellUI size={this.cellWidth()} x={2*this.cellWidth()} y={ 7 * this.cellWidth()}>c8</CellUI>
          <CellUI size={this.cellWidth()} x={3*this.cellWidth()} y={ 7 * this.cellWidth()}>d8</CellUI>
          <CellUI size={this.cellWidth()} x={4*this.cellWidth()} y={ 7 * this.cellWidth()}>e8</CellUI>
          <CellUI size={this.cellWidth()} x={5*this.cellWidth()} y={ 7 * this.cellWidth()}>f8</CellUI>
          <CellUI size={this.cellWidth()} x={6*this.cellWidth()} y={ 7 * this.cellWidth()}>g8</CellUI>
          <CellUI size={this.cellWidth()} x={7*this.cellWidth()} y={ 7 * this.cellWidth()}>h8</CellUI>
          <CellUI size={this.cellWidth()} x={8*this.cellWidth()} y={ 7 * this.cellWidth()}>i8</CellUI>
          <CellUI size={this.cellWidth()} x={0*this.cellWidth()} y={ 8 * this.cellWidth()}>a9</CellUI>
          <CellUI size={this.cellWidth()} x={1*this.cellWidth()} y={ 8 * this.cellWidth()}>b9</CellUI>
          <CellUI size={this.cellWidth()} x={2*this.cellWidth()} y={ 8 * this.cellWidth()}>c9</CellUI>
          <CellUI size={this.cellWidth()} x={3*this.cellWidth()} y={ 8 * this.cellWidth()}>d9</CellUI>
          <CellUI size={this.cellWidth()} x={4*this.cellWidth()} y={ 8 * this.cellWidth()}>e9</CellUI>
          <CellUI size={this.cellWidth()} x={5*this.cellWidth()} y={ 8 * this.cellWidth()}>f9</CellUI>
          <CellUI size={this.cellWidth()} x={6*this.cellWidth()} y={ 8 * this.cellWidth()}>g9</CellUI>
          <CellUI size={this.cellWidth()} x={7*this.cellWidth()} y={ 8 * this.cellWidth()}>h9</CellUI>
          <CellUI size={this.cellWidth()} x={8*this.cellWidth()} y={ 8 * this.cellWidth()}>i9</CellUI>
        </svg>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch: any): any {
  return {
    selectCell: (cell: string) => dispatch(selectCell(cell))
  };
}

export default connect(null, mapDispatchToProps)(SudokuUI);
