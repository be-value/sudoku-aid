import React, { Component } from "react";
import Cell from "../Cell/Cell";
import { ISudokuState } from "./ISudokuState";

class Sudoku9x9 extends Component<any, ISudokuState> {
  constructor(props: any) {
    super(props);
    this.state = { width: window.innerWidth, height: window.innerHeight };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }

  private readonly lineWidth: number = 3;
  private readonly verticalDividers: number = 4;
  private readonly horizontalDividers: number = 4;
  private readonly cellsPerRow: number = 9;
  private readonly horizontalCellsPerCluster: number = 3;
  private readonly verticalCellsPerCluster: number = 3;

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

  minDividers = () => {
    return (this.verticalDividers < this.horizontalDividers
      ? this.verticalDividers
      : this.horizontalDividers);
  }

  cellWidth = () => {
    return ((this.myWidth()-(this.minDividers()*this.lineWidth)) / this.cellsPerRow);
  }

  posX = (posNo: number) => {
    let factor: number = 1 + Math.floor(posNo/this.horizontalCellsPerCluster);
    return posNo * this.cellWidth() + factor*this.lineWidth;
  }

  posY = (posNo: number) => {
    let factor: number = 1 + Math.floor(posNo/this.verticalCellsPerCluster);
    return posNo * this.cellWidth() + factor*this.lineWidth;
  }

  linePosX = (posNo: number) => {
    let factor: number = posNo * this.horizontalCellsPerCluster;
    return factor * this.cellWidth() + (posNo + 0.5) * this.lineWidth;
  }

  linePosY = (posNo: number) => {
    let factor: number = posNo * this.verticalCellsPerCluster;
    return factor * this.cellWidth() + (posNo + 0.5) * this.lineWidth;
  }

  render(): JSX.Element {
    return (
      <div style={{ float: "left"}} tabIndex={0}>
        <svg style={{ width: this.myWidth(), height: this.myWidth() }}>
          <rect x="0"
                y="0"
                width={this.myWidth()}
                height={this.myWidth()}
                style={{ stroke: "black", strokeWidth: 2*this.lineWidth, fill: "none" }}>
          </rect>
          <line x1={this.linePosX(1)} y1={0}
                x2={this.linePosX(1)} y2={this.myWidth()}
                style={{ stroke: "black", strokeWidth: this.lineWidth }}></line>
          <line x1={this.linePosX(2)} y1={0}
                x2={this.linePosX(2)} y2={this.myWidth()}
                style={{ stroke: "black", strokeWidth: this.lineWidth }}></line>
          <line x1={0} y1={this.linePosY(1)}
                x2={this.myWidth()} y2={this.linePosY(1)}
                style={{ stroke: "black", strokeWidth: this.lineWidth }}></line>
          <line x1={0} y1={this.linePosY(2)}
                x2={this.myWidth()} y2={this.linePosY(2)}
                style={{ stroke: "black", strokeWidth: this.lineWidth }}></line>
          <Cell size={this.cellWidth()} x={this.posX(0)} y={this.posY(0)} cellName={"a1"}/>
          <Cell size={this.cellWidth()} x={this.posX(1)} y={this.posY(0)} cellName={"b1"}/>
          <Cell size={this.cellWidth()} x={this.posX(2)} y={this.posY(0)} cellName={"c1"}/>
          <Cell size={this.cellWidth()} x={this.posX(3)} y={this.posY(0)} cellName={"d1"}/>
          <Cell size={this.cellWidth()} x={this.posX(4)} y={this.posY(0)} cellName={"e1"}/>
          <Cell size={this.cellWidth()} x={this.posX(5)} y={this.posY(0)} cellName={"f1"}/>
          <Cell size={this.cellWidth()} x={this.posX(6)} y={this.posY(0)} cellName={"g1"}/>
          <Cell size={this.cellWidth()} x={this.posX(7)} y={this.posY(0)} cellName={"h1"}/>
          <Cell size={this.cellWidth()} x={this.posX(8)} y={this.posY(0)} cellName={"i1"}/>
          <Cell size={this.cellWidth()} x={this.posX(0)} y={this.posY(1)} cellName={"a2"}/>
          <Cell size={this.cellWidth()} x={this.posX(1)} y={this.posY(1)} cellName={"b2"}/>
          <Cell size={this.cellWidth()} x={this.posX(2)} y={this.posY(1)} cellName={"c2"}/>
          <Cell size={this.cellWidth()} x={this.posX(3)} y={this.posY(1)} cellName={"d2"}/>
          <Cell size={this.cellWidth()} x={this.posX(4)} y={this.posY(1)} cellName={"e2"}/>
          <Cell size={this.cellWidth()} x={this.posX(5)} y={this.posY(1)} cellName={"f2"}/>
          <Cell size={this.cellWidth()} x={this.posX(6)} y={this.posY(1)} cellName={"g2"}/>
          <Cell size={this.cellWidth()} x={this.posX(7)} y={this.posY(1)} cellName={"h2"}/>
          <Cell size={this.cellWidth()} x={this.posX(8)} y={this.posY(1)} cellName={"i2"}/>
          <Cell size={this.cellWidth()} x={this.posX(0)} y={this.posY(2)} cellName={"a3"}/>
          <Cell size={this.cellWidth()} x={this.posX(1)} y={this.posY(2)} cellName={"b3"}/>
          <Cell size={this.cellWidth()} x={this.posX(2)} y={this.posY(2)} cellName={"c3"}/>
          <Cell size={this.cellWidth()} x={this.posX(3)} y={this.posY(2)} cellName={"d3"}/>
          <Cell size={this.cellWidth()} x={this.posX(4)} y={this.posY(2)} cellName={"e3"}/>
          <Cell size={this.cellWidth()} x={this.posX(5)} y={this.posY(2)} cellName={"f3"}/>
          <Cell size={this.cellWidth()} x={this.posX(6)} y={this.posY(2)} cellName={"g3"}/>
          <Cell size={this.cellWidth()} x={this.posX(7)} y={this.posY(2)} cellName={"h3"}/>
          <Cell size={this.cellWidth()} x={this.posX(8)} y={this.posY(2)} cellName={"i3"}/>
          <Cell size={this.cellWidth()} x={this.posX(0)} y={this.posY(3)} cellName={"a4"}/>
          <Cell size={this.cellWidth()} x={this.posX(1)} y={this.posY(3)} cellName={"b4"}/>
          <Cell size={this.cellWidth()} x={this.posX(2)} y={this.posY(3)} cellName={"c4"}/>
          <Cell size={this.cellWidth()} x={this.posX(3)} y={this.posY(3)} cellName={"d4"}/>
          <Cell size={this.cellWidth()} x={this.posX(4)} y={this.posY(3)} cellName={"e4"}/>
          <Cell size={this.cellWidth()} x={this.posX(5)} y={this.posY(3)} cellName={"f4"}/>
          <Cell size={this.cellWidth()} x={this.posX(6)} y={this.posY(3)} cellName={"g4"}/>
          <Cell size={this.cellWidth()} x={this.posX(7)} y={this.posY(3)} cellName={"h4"}/>
          <Cell size={this.cellWidth()} x={this.posX(8)} y={this.posY(3)} cellName={"i4"}/>
          <Cell size={this.cellWidth()} x={this.posX(0)} y={this.posY(4)} cellName={"a5"}/>
          <Cell size={this.cellWidth()} x={this.posX(1)} y={this.posY(4)} cellName={"b5"}/>
          <Cell size={this.cellWidth()} x={this.posX(2)} y={this.posY(4)} cellName={"c5"}/>
          <Cell size={this.cellWidth()} x={this.posX(3)} y={this.posY(4)} cellName={"d5"}/>
          <Cell size={this.cellWidth()} x={this.posX(4)} y={this.posY(4)} cellName={"e5"}/>
          <Cell size={this.cellWidth()} x={this.posX(5)} y={this.posY(4)} cellName={"f5"}/>
          <Cell size={this.cellWidth()} x={this.posX(6)} y={this.posY(4)} cellName={"g5"}/>
          <Cell size={this.cellWidth()} x={this.posX(7)} y={this.posY(4)} cellName={"h5"}/>
          <Cell size={this.cellWidth()} x={this.posX(8)} y={this.posY(4)} cellName={"i5"}/>
          <Cell size={this.cellWidth()} x={this.posX(0)} y={this.posY(5)} cellName={"a6"}/>
          <Cell size={this.cellWidth()} x={this.posX(1)} y={this.posY(5)} cellName={"b6"}/>
          <Cell size={this.cellWidth()} x={this.posX(2)} y={this.posY(5)} cellName={"c6"}/>
          <Cell size={this.cellWidth()} x={this.posX(3)} y={this.posY(5)} cellName={"d6"}/>
          <Cell size={this.cellWidth()} x={this.posX(4)} y={this.posY(5)} cellName={"e6"}/>
          <Cell size={this.cellWidth()} x={this.posX(5)} y={this.posY(5)} cellName={"f6"}/>
          <Cell size={this.cellWidth()} x={this.posX(6)} y={this.posY(5)} cellName={"g6"}/>
          <Cell size={this.cellWidth()} x={this.posX(7)} y={this.posY(5)} cellName={"h6"}/>
          <Cell size={this.cellWidth()} x={this.posX(8)} y={this.posY(5)} cellName={"i6"}/>
          <Cell size={this.cellWidth()} x={this.posX(0)} y={this.posY(6)} cellName={"a7"}/>
          <Cell size={this.cellWidth()} x={this.posX(1)} y={this.posY(6)} cellName={"b7"}/>
          <Cell size={this.cellWidth()} x={this.posX(2)} y={this.posY(6)} cellName={"c7"}/>
          <Cell size={this.cellWidth()} x={this.posX(3)} y={this.posY(6)} cellName={"d7"}/>
          <Cell size={this.cellWidth()} x={this.posX(4)} y={this.posY(6)} cellName={"e7"}/>
          <Cell size={this.cellWidth()} x={this.posX(5)} y={this.posY(6)} cellName={"f7"}/>
          <Cell size={this.cellWidth()} x={this.posX(6)} y={this.posY(6)} cellName={"g7"}/>
          <Cell size={this.cellWidth()} x={this.posX(7)} y={this.posY(6)} cellName={"h7"}/>
          <Cell size={this.cellWidth()} x={this.posX(8)} y={this.posY(6)} cellName={"i7"}/>
          <Cell size={this.cellWidth()} x={this.posX(0)} y={this.posY(7)} cellName={"a8"}/>
          <Cell size={this.cellWidth()} x={this.posX(1)} y={this.posY(7)} cellName={"b8"}/>
          <Cell size={this.cellWidth()} x={this.posX(2)} y={this.posY(7)} cellName={"c8"}/>
          <Cell size={this.cellWidth()} x={this.posX(3)} y={this.posY(7)} cellName={"d8"}/>
          <Cell size={this.cellWidth()} x={this.posX(4)} y={this.posY(7)} cellName={"e8"}/>
          <Cell size={this.cellWidth()} x={this.posX(5)} y={this.posY(7)} cellName={"f8"}/>
          <Cell size={this.cellWidth()} x={this.posX(6)} y={this.posY(7)} cellName={"g8"}/>
          <Cell size={this.cellWidth()} x={this.posX(7)} y={this.posY(7)} cellName={"h8"}/>
          <Cell size={this.cellWidth()} x={this.posX(8)} y={this.posY(7)} cellName={"i8"}/>
          <Cell size={this.cellWidth()} x={this.posX(0)} y={this.posY(8)} cellName={"a9"}/>
          <Cell size={this.cellWidth()} x={this.posX(1)} y={this.posY(8)} cellName={"b9"}/>
          <Cell size={this.cellWidth()} x={this.posX(2)} y={this.posY(8)} cellName={"c9"}/>
          <Cell size={this.cellWidth()} x={this.posX(3)} y={this.posY(8)} cellName={"d9"}/>
          <Cell size={this.cellWidth()} x={this.posX(4)} y={this.posY(8)} cellName={"e9"}/>
          <Cell size={this.cellWidth()} x={this.posX(5)} y={this.posY(8)} cellName={"f9"}/>
          <Cell size={this.cellWidth()} x={this.posX(6)} y={this.posY(8)} cellName={"g9"}/>
          <Cell size={this.cellWidth()} x={this.posX(7)} y={this.posY(8)} cellName={"h9"}/>
          <Cell size={this.cellWidth()} x={this.posX(8)} y={this.posY(8)} cellName={"i9"}/>
        </svg>
      </div>
    );
  }
}

export default Sudoku9x9;
