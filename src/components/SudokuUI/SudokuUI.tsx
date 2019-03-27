import React, { Component } from "react";
import Switch from "react-switch";
import CellUI from "../CellUI/CellUI";
import { ISudokuUIUIProps } from "./ISudokuUIProps";
import { ISudokuUIState } from "./ISudokuUIState";

class SudokuUI extends Component<ISudokuUIUIProps | any, ISudokuUIState> {
  constructor(props: any) {
    super(props);
    this.state = { width: window.innerWidth, height: window.innerHeight };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }

  private readonly lineWidth: number = 3;

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
    return this.state.width < this.state.height ? this.state.width : this.state.height;
  }

  cellWidth = () => {
    return ((this.myWidth()-(4*this.lineWidth)) / 9.0);
  }

  pos = (posNo: number) => {
    let factor: number = posNo < 3 ? 1 : posNo < 6 ? 2 : 3;
    return posNo * this.cellWidth() + factor*this.lineWidth;
  }

  linePos = (posNo: number) => {
    let factor: number = posNo < 1 ? 0 : posNo < 2 ? 3 : 6;
    return factor * this.cellWidth() + (posNo + 0.5) * this.lineWidth;
  }

  render(): JSX.Element {
    return (
      <div>
        <div style={{ float: "left"}} tabIndex={0}>
          <svg style={{ width: this.myWidth(), height: this.myWidth() }}>
            <rect x="0"
                  y="0"
                  width={this.myWidth()}
                  height={this.myWidth()}
                  style={{ stroke: "black", strokeWidth: 2*this.lineWidth, fill: "none" }}>
            </rect>
            <line x1={this.linePos(1)} y1={0}
                  x2={this.linePos(1)} y2={this.myWidth()}
                  style={{ stroke: "black", strokeWidth: this.lineWidth }}></line>
            <line x1={this.linePos(2)} y1={0}
                  x2={this.linePos(2)} y2={this.myWidth()}
                  style={{ stroke: "black", strokeWidth: this.lineWidth }}></line>
            <line x1={0} y1={this.linePos(1)}
                  x2={this.myWidth()} y2={this.linePos(1)}
                  style={{ stroke: "black", strokeWidth: this.lineWidth }}></line>
            <line x1={0} y1={this.linePos(2)}
                  x2={this.myWidth()} y2={this.linePos(2)}
                  style={{ stroke: "black", strokeWidth: this.lineWidth }}></line>
            <CellUI size={this.cellWidth()} x={this.pos(0)} y={this.pos(0)} cellName={"a1"}/>
            <CellUI size={this.cellWidth()} x={this.pos(1)} y={this.pos(0)} cellName={"b1"}/>
            <CellUI size={this.cellWidth()} x={this.pos(2)} y={this.pos(0)} cellName={"c1"}/>
            <CellUI size={this.cellWidth()} x={this.pos(3)} y={this.pos(0)} cellName={"d1"}/>
            <CellUI size={this.cellWidth()} x={this.pos(4)} y={this.pos(0)} cellName={"e1"}/>
            <CellUI size={this.cellWidth()} x={this.pos(5)} y={this.pos(0)} cellName={"f1"}/>
            <CellUI size={this.cellWidth()} x={this.pos(6)} y={this.pos(0)} cellName={"g1"}/>
            <CellUI size={this.cellWidth()} x={this.pos(7)} y={this.pos(0)} cellName={"h1"}/>
            <CellUI size={this.cellWidth()} x={this.pos(8)} y={this.pos(0)} cellName={"i1"}/>
            <CellUI size={this.cellWidth()} x={this.pos(0)} y={this.pos(1)} cellName={"a2"}/>
            <CellUI size={this.cellWidth()} x={this.pos(1)} y={this.pos(1)} cellName={"b2"}/>
            <CellUI size={this.cellWidth()} x={this.pos(2)} y={this.pos(1)} cellName={"c2"}/>
            <CellUI size={this.cellWidth()} x={this.pos(3)} y={this.pos(1)} cellName={"d2"}/>
            <CellUI size={this.cellWidth()} x={this.pos(4)} y={this.pos(1)} cellName={"e2"}/>
            <CellUI size={this.cellWidth()} x={this.pos(5)} y={this.pos(1)} cellName={"f2"}/>
            <CellUI size={this.cellWidth()} x={this.pos(6)} y={this.pos(1)} cellName={"g2"}/>
            <CellUI size={this.cellWidth()} x={this.pos(7)} y={this.pos(1)} cellName={"h2"}/>
            <CellUI size={this.cellWidth()} x={this.pos(8)} y={this.pos(1)} cellName={"i2"}/>
            <CellUI size={this.cellWidth()} x={this.pos(0)} y={this.pos(2)} cellName={"a3"}/>
            <CellUI size={this.cellWidth()} x={this.pos(1)} y={this.pos(2)} cellName={"b3"}/>
            <CellUI size={this.cellWidth()} x={this.pos(2)} y={this.pos(2)} cellName={"c3"}/>
            <CellUI size={this.cellWidth()} x={this.pos(3)} y={this.pos(2)} cellName={"d3"}/>
            <CellUI size={this.cellWidth()} x={this.pos(4)} y={this.pos(2)} cellName={"e3"}/>
            <CellUI size={this.cellWidth()} x={this.pos(5)} y={this.pos(2)} cellName={"f3"}/>
            <CellUI size={this.cellWidth()} x={this.pos(6)} y={this.pos(2)} cellName={"g3"}/>
            <CellUI size={this.cellWidth()} x={this.pos(7)} y={this.pos(2)} cellName={"h3"}/>
            <CellUI size={this.cellWidth()} x={this.pos(8)} y={this.pos(2)} cellName={"i3"}/>
            <CellUI size={this.cellWidth()} x={this.pos(0)} y={this.pos(3)} cellName={"a4"}/>
            <CellUI size={this.cellWidth()} x={this.pos(1)} y={this.pos(3)} cellName={"b4"}/>
            <CellUI size={this.cellWidth()} x={this.pos(2)} y={this.pos(3)} cellName={"c4"}/>
            <CellUI size={this.cellWidth()} x={this.pos(3)} y={this.pos(3)} cellName={"d4"}/>
            <CellUI size={this.cellWidth()} x={this.pos(4)} y={this.pos(3)} cellName={"e4"}/>
            <CellUI size={this.cellWidth()} x={this.pos(5)} y={this.pos(3)} cellName={"f4"}/>
            <CellUI size={this.cellWidth()} x={this.pos(6)} y={this.pos(3)} cellName={"g4"}/>
            <CellUI size={this.cellWidth()} x={this.pos(7)} y={this.pos(3)} cellName={"h4"}/>
            <CellUI size={this.cellWidth()} x={this.pos(8)} y={this.pos(3)} cellName={"i4"}/>
            <CellUI size={this.cellWidth()} x={this.pos(0)} y={this.pos(4)} cellName={"a5"}/>
            <CellUI size={this.cellWidth()} x={this.pos(1)} y={this.pos(4)} cellName={"b5"}/>
            <CellUI size={this.cellWidth()} x={this.pos(2)} y={this.pos(4)} cellName={"c5"}/>
            <CellUI size={this.cellWidth()} x={this.pos(3)} y={this.pos(4)} cellName={"d5"}/>
            <CellUI size={this.cellWidth()} x={this.pos(4)} y={this.pos(4)} cellName={"e5"}/>
            <CellUI size={this.cellWidth()} x={this.pos(5)} y={this.pos(4)} cellName={"f5"}/>
            <CellUI size={this.cellWidth()} x={this.pos(6)} y={this.pos(4)} cellName={"g5"}/>
            <CellUI size={this.cellWidth()} x={this.pos(7)} y={this.pos(4)} cellName={"h5"}/>
            <CellUI size={this.cellWidth()} x={this.pos(8)} y={this.pos(4)} cellName={"i5"}/>
            <CellUI size={this.cellWidth()} x={this.pos(0)} y={this.pos(5)} cellName={"a6"}/>
            <CellUI size={this.cellWidth()} x={this.pos(1)} y={this.pos(5)} cellName={"b6"}/>
            <CellUI size={this.cellWidth()} x={this.pos(2)} y={this.pos(5)} cellName={"c6"}/>
            <CellUI size={this.cellWidth()} x={this.pos(3)} y={this.pos(5)} cellName={"d6"}/>
            <CellUI size={this.cellWidth()} x={this.pos(4)} y={this.pos(5)} cellName={"e6"}/>
            <CellUI size={this.cellWidth()} x={this.pos(5)} y={this.pos(5)} cellName={"f6"}/>
            <CellUI size={this.cellWidth()} x={this.pos(6)} y={this.pos(5)} cellName={"g6"}/>
            <CellUI size={this.cellWidth()} x={this.pos(7)} y={this.pos(5)} cellName={"h6"}/>
            <CellUI size={this.cellWidth()} x={this.pos(8)} y={this.pos(5)} cellName={"i6"}/>
            <CellUI size={this.cellWidth()} x={this.pos(0)} y={this.pos(6)} cellName={"a7"}/>
            <CellUI size={this.cellWidth()} x={this.pos(1)} y={this.pos(6)} cellName={"b7"}/>
            <CellUI size={this.cellWidth()} x={this.pos(2)} y={this.pos(6)} cellName={"c7"}/>
            <CellUI size={this.cellWidth()} x={this.pos(3)} y={this.pos(6)} cellName={"d7"}/>
            <CellUI size={this.cellWidth()} x={this.pos(4)} y={this.pos(6)} cellName={"e7"}/>
            <CellUI size={this.cellWidth()} x={this.pos(5)} y={this.pos(6)} cellName={"f7"}/>
            <CellUI size={this.cellWidth()} x={this.pos(6)} y={this.pos(6)} cellName={"g7"}/>
            <CellUI size={this.cellWidth()} x={this.pos(7)} y={this.pos(6)} cellName={"h7"}/>
            <CellUI size={this.cellWidth()} x={this.pos(8)} y={this.pos(6)} cellName={"i7"}/>
            <CellUI size={this.cellWidth()} x={this.pos(0)} y={this.pos(7)} cellName={"a8"}/>
            <CellUI size={this.cellWidth()} x={this.pos(1)} y={this.pos(7)} cellName={"b8"}/>
            <CellUI size={this.cellWidth()} x={this.pos(2)} y={this.pos(7)} cellName={"c8"}/>
            <CellUI size={this.cellWidth()} x={this.pos(3)} y={this.pos(7)} cellName={"d8"}/>
            <CellUI size={this.cellWidth()} x={this.pos(4)} y={this.pos(7)} cellName={"e8"}/>
            <CellUI size={this.cellWidth()} x={this.pos(5)} y={this.pos(7)} cellName={"f8"}/>
            <CellUI size={this.cellWidth()} x={this.pos(6)} y={this.pos(7)} cellName={"g8"}/>
            <CellUI size={this.cellWidth()} x={this.pos(7)} y={this.pos(7)} cellName={"h8"}/>
            <CellUI size={this.cellWidth()} x={this.pos(8)} y={this.pos(7)} cellName={"i8"}/>
            <CellUI size={this.cellWidth()} x={this.pos(0)} y={this.pos(8)} cellName={"a9"}/>
            <CellUI size={this.cellWidth()} x={this.pos(1)} y={this.pos(8)} cellName={"b9"}/>
            <CellUI size={this.cellWidth()} x={this.pos(2)} y={this.pos(8)} cellName={"c9"}/>
            <CellUI size={this.cellWidth()} x={this.pos(3)} y={this.pos(8)} cellName={"d9"}/>
            <CellUI size={this.cellWidth()} x={this.pos(4)} y={this.pos(8)} cellName={"e9"}/>
            <CellUI size={this.cellWidth()} x={this.pos(5)} y={this.pos(8)} cellName={"f9"}/>
            <CellUI size={this.cellWidth()} x={this.pos(6)} y={this.pos(8)} cellName={"g9"}/>
            <CellUI size={this.cellWidth()} x={this.pos(7)} y={this.pos(8)} cellName={"h9"}/>
            <CellUI size={this.cellWidth()} x={this.pos(8)} y={this.pos(8)} cellName={"i9"}/>
          </svg>
        </div>
        <div style={{ float: "left", marginLeft: "30px"}}>
          <h1>Sudoku aid</h1>
          <div style={{ marginBottom: "15px"}}>
            <Switch onChange={() => {}} checked={true}></Switch>
            <span style={{ marginLeft: "15px"}}>Show cell options</span>
          </div>
          <div style={{ marginBottom: "15px"}}>
            <Switch onChange={() => {}} checked={true}></Switch>
            <span style={{ marginLeft: "15px"}}>Cross clusters</span>
          </div>
        </div>
      </div>
    );
  }
}

export default SudokuUI;
