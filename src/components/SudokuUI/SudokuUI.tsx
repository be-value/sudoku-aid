import React, { Component } from "react";
import { connect } from "react-redux";
import CellUI from "../CellUI/CellUI";
import { selectCell } from "../../utils/actions";
import { ISudokuUIUIProps } from "./ISudokuUIProps";

class SudokuUI extends Component<ISudokuUIUIProps | any, {width: number, height: number}> {
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
          <CellUI size={this.cellWidth()} x={0*this.cellWidth()} y={ 0 * this.cellWidth()}>1</CellUI>
          <CellUI size={this.cellWidth()} x={1*this.cellWidth()} y={ 0 * this.cellWidth()}>2</CellUI>
          <CellUI size={this.cellWidth()} x={2*this.cellWidth()} y={ 0 * this.cellWidth()}>3</CellUI>
          <CellUI size={this.cellWidth()} x={3*this.cellWidth()} y={ 0 * this.cellWidth()}>4</CellUI>
          <CellUI size={this.cellWidth()} x={4*this.cellWidth()} y={ 0 * this.cellWidth()}>5 </CellUI>
          <CellUI size={this.cellWidth()} x={5*this.cellWidth()} y={ 0 * this.cellWidth()}>6</CellUI>
          <CellUI size={this.cellWidth()} x={6*this.cellWidth()} y={ 0 * this.cellWidth()}>7</CellUI>
          <CellUI size={this.cellWidth()} x={7*this.cellWidth()} y={ 0 * this.cellWidth()}>8</CellUI>
          <CellUI size={this.cellWidth()} x={8*this.cellWidth()} y={ 0 * this.cellWidth()}>9</CellUI>
          <CellUI size={this.cellWidth()} x={0*this.cellWidth()} y={ 1 * this.cellWidth()}>1</CellUI>
          <CellUI size={this.cellWidth()} x={1*this.cellWidth()} y={ 1 * this.cellWidth()}>2</CellUI>
          <CellUI size={this.cellWidth()} x={2*this.cellWidth()} y={ 1 * this.cellWidth()}>3</CellUI>
          <CellUI size={this.cellWidth()} x={3*this.cellWidth()} y={ 1 * this.cellWidth()}>4</CellUI>
          <CellUI size={this.cellWidth()} x={4*this.cellWidth()} y={ 1 * this.cellWidth()}>5</CellUI>
          <CellUI size={this.cellWidth()} x={5*this.cellWidth()} y={ 1 * this.cellWidth()}>6</CellUI>
          <CellUI size={this.cellWidth()} x={6*this.cellWidth()} y={ 1 * this.cellWidth()}>7</CellUI>
          <CellUI size={this.cellWidth()} x={7*this.cellWidth()} y={ 1 * this.cellWidth()}>8</CellUI>
          <CellUI size={this.cellWidth()} x={8*this.cellWidth()} y={ 1 * this.cellWidth()}>9</CellUI>
          <CellUI size={this.cellWidth()} x={0*this.cellWidth()} y={ 2 * this.cellWidth()}>1</CellUI>
          <CellUI size={this.cellWidth()} x={1*this.cellWidth()} y={ 2 * this.cellWidth()}>2</CellUI>
          <CellUI size={this.cellWidth()} x={2*this.cellWidth()} y={ 2 * this.cellWidth()}>3</CellUI>
          <CellUI size={this.cellWidth()} x={3*this.cellWidth()} y={ 2 * this.cellWidth()}>4</CellUI>
          <CellUI size={this.cellWidth()} x={4*this.cellWidth()} y={ 2 * this.cellWidth()}>5</CellUI>
          <CellUI size={this.cellWidth()} x={5*this.cellWidth()} y={ 2 * this.cellWidth()}>6</CellUI>
          <CellUI size={this.cellWidth()} x={6*this.cellWidth()} y={ 2 * this.cellWidth()}>7</CellUI>
          <CellUI size={this.cellWidth()} x={7*this.cellWidth()} y={ 2 * this.cellWidth()}>8</CellUI>
          <CellUI size={this.cellWidth()} x={8*this.cellWidth()} y={ 2 * this.cellWidth()}>9</CellUI>
          <CellUI size={this.cellWidth()} x={0*this.cellWidth()} y={ 3 * this.cellWidth()}>1</CellUI>
          <CellUI size={this.cellWidth()} x={1*this.cellWidth()} y={ 3 * this.cellWidth()}>2</CellUI>
          <CellUI size={this.cellWidth()} x={2*this.cellWidth()} y={ 3 * this.cellWidth()}>3</CellUI>
          <CellUI size={this.cellWidth()} x={3*this.cellWidth()} y={ 3 * this.cellWidth()}>4</CellUI>
          <CellUI size={this.cellWidth()} x={4*this.cellWidth()} y={ 3 * this.cellWidth()}>5</CellUI>
          <CellUI size={this.cellWidth()} x={5*this.cellWidth()} y={ 3 * this.cellWidth()}>6</CellUI>
          <CellUI size={this.cellWidth()} x={6*this.cellWidth()} y={ 3 * this.cellWidth()}>7</CellUI>
          <CellUI size={this.cellWidth()} x={7*this.cellWidth()} y={ 3 * this.cellWidth()}>8</CellUI>
          <CellUI size={this.cellWidth()} x={8*this.cellWidth()} y={ 3 * this.cellWidth()}>9</CellUI>
          <CellUI size={this.cellWidth()} x={0*this.cellWidth()} y={ 4 * this.cellWidth()}>1</CellUI>
          <CellUI size={this.cellWidth()} x={1*this.cellWidth()} y={ 4 * this.cellWidth()}>2</CellUI>
          <CellUI size={this.cellWidth()} x={2*this.cellWidth()} y={ 4 * this.cellWidth()}>3</CellUI>
          <CellUI size={this.cellWidth()} x={3*this.cellWidth()} y={ 4 * this.cellWidth()}>4</CellUI>
          <CellUI size={this.cellWidth()} x={4*this.cellWidth()} y={ 4 * this.cellWidth()}>5</CellUI>
          <CellUI size={this.cellWidth()} x={5*this.cellWidth()} y={ 4 * this.cellWidth()}>6</CellUI>
          <CellUI size={this.cellWidth()} x={6*this.cellWidth()} y={ 4 * this.cellWidth()}>7</CellUI>
          <CellUI size={this.cellWidth()} x={7*this.cellWidth()} y={ 4 * this.cellWidth()}>8</CellUI>
          <CellUI size={this.cellWidth()} x={8*this.cellWidth()} y={ 4 * this.cellWidth()}>9</CellUI>
          <CellUI size={this.cellWidth()} x={0*this.cellWidth()} y={ 5 * this.cellWidth()}>1</CellUI>
          <CellUI size={this.cellWidth()} x={1*this.cellWidth()} y={ 5 * this.cellWidth()}>2</CellUI>
          <CellUI size={this.cellWidth()} x={2*this.cellWidth()} y={ 5 * this.cellWidth()}>3</CellUI>
          <CellUI size={this.cellWidth()} x={3*this.cellWidth()} y={ 5 * this.cellWidth()}>4</CellUI>
          <CellUI size={this.cellWidth()} x={4*this.cellWidth()} y={ 5 * this.cellWidth()}>5</CellUI>
          <CellUI size={this.cellWidth()} x={5*this.cellWidth()} y={ 5 * this.cellWidth()}>6</CellUI>
          <CellUI size={this.cellWidth()} x={6*this.cellWidth()} y={ 5 * this.cellWidth()}>7</CellUI>
          <CellUI size={this.cellWidth()} x={7*this.cellWidth()} y={ 5 * this.cellWidth()}>8</CellUI>
          <CellUI size={this.cellWidth()} x={8*this.cellWidth()} y={ 5 * this.cellWidth()}>9</CellUI>
          <CellUI size={this.cellWidth()} x={0*this.cellWidth()} y={ 6 * this.cellWidth()}>1</CellUI>
          <CellUI size={this.cellWidth()} x={1*this.cellWidth()} y={ 6 * this.cellWidth()}>2</CellUI>
          <CellUI size={this.cellWidth()} x={2*this.cellWidth()} y={ 6 * this.cellWidth()}>3</CellUI>
          <CellUI size={this.cellWidth()} x={3*this.cellWidth()} y={ 6 * this.cellWidth()}>4</CellUI>
          <CellUI size={this.cellWidth()} x={4*this.cellWidth()} y={ 6 * this.cellWidth()}>5</CellUI>
          <CellUI size={this.cellWidth()} x={5*this.cellWidth()} y={ 6 * this.cellWidth()}>6</CellUI>
          <CellUI size={this.cellWidth()} x={6*this.cellWidth()} y={ 6 * this.cellWidth()}>7</CellUI>
          <CellUI size={this.cellWidth()} x={7*this.cellWidth()} y={ 6 * this.cellWidth()}>8</CellUI>
          <CellUI size={this.cellWidth()} x={8*this.cellWidth()} y={ 6 * this.cellWidth()}>9</CellUI>
          <CellUI size={this.cellWidth()} x={0*this.cellWidth()} y={ 7 * this.cellWidth()}>1</CellUI>
          <CellUI size={this.cellWidth()} x={1*this.cellWidth()} y={ 7 * this.cellWidth()}>2</CellUI>
          <CellUI size={this.cellWidth()} x={2*this.cellWidth()} y={ 7 * this.cellWidth()}>3</CellUI>
          <CellUI size={this.cellWidth()} x={3*this.cellWidth()} y={ 7 * this.cellWidth()}>4</CellUI>
          <CellUI size={this.cellWidth()} x={4*this.cellWidth()} y={ 7 * this.cellWidth()}>5</CellUI>
          <CellUI size={this.cellWidth()} x={5*this.cellWidth()} y={ 7 * this.cellWidth()}>6</CellUI>
          <CellUI size={this.cellWidth()} x={6*this.cellWidth()} y={ 7 * this.cellWidth()}>7</CellUI>
          <CellUI size={this.cellWidth()} x={7*this.cellWidth()} y={ 7 * this.cellWidth()}>8</CellUI>
          <CellUI size={this.cellWidth()} x={8*this.cellWidth()} y={ 7 * this.cellWidth()}>9</CellUI>
          <CellUI size={this.cellWidth()} x={0*this.cellWidth()} y={ 8 * this.cellWidth()}>1</CellUI>
          <CellUI size={this.cellWidth()} x={1*this.cellWidth()} y={ 8 * this.cellWidth()}>2</CellUI>
          <CellUI size={this.cellWidth()} x={2*this.cellWidth()} y={ 8 * this.cellWidth()}>3</CellUI>
          <CellUI size={this.cellWidth()} x={3*this.cellWidth()} y={ 8 * this.cellWidth()}>4</CellUI>
          <CellUI size={this.cellWidth()} x={4*this.cellWidth()} y={ 8 * this.cellWidth()}>5</CellUI>
          <CellUI size={this.cellWidth()} x={5*this.cellWidth()} y={ 8 * this.cellWidth()}>6</CellUI>
          <CellUI size={this.cellWidth()} x={6*this.cellWidth()} y={ 8 * this.cellWidth()}>7</CellUI>
          <CellUI size={this.cellWidth()} x={7*this.cellWidth()} y={ 8 * this.cellWidth()}>8</CellUI>
          <CellUI size={this.cellWidth()} x={8*this.cellWidth()} y={ 8 * this.cellWidth()}>9</CellUI>
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
