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
      <div style={{ textAlign: "center" }}>
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
          <CellUI size={this.cellWidth()} x={this.pos(0)} y={this.pos(0)} cell={this.props.cells.a1}/>
          <CellUI size={this.cellWidth()} x={this.pos(1)} y={this.pos(0)} cell={this.props.cells.b1}/>
          <CellUI size={this.cellWidth()} x={this.pos(2)} y={this.pos(0)} cell={this.props.cells.c1}/>
          <CellUI size={this.cellWidth()} x={this.pos(3)} y={this.pos(0)} cell={this.props.cells.d1}/>
          <CellUI size={this.cellWidth()} x={this.pos(4)} y={this.pos(0)} cell={this.props.cells.e1}/>
          <CellUI size={this.cellWidth()} x={this.pos(5)} y={this.pos(0)} cell={this.props.cells.f1}/>
          <CellUI size={this.cellWidth()} x={this.pos(6)} y={this.pos(0)} cell={this.props.cells.g1}/>
          <CellUI size={this.cellWidth()} x={this.pos(7)} y={this.pos(0)} cell={this.props.cells.h1}/>
          <CellUI size={this.cellWidth()} x={this.pos(8)} y={this.pos(0)} cell={this.props.cells.i1}/>
          <CellUI size={this.cellWidth()} x={this.pos(0)} y={this.pos(1)} cell={this.props.cells.a2}/>
          <CellUI size={this.cellWidth()} x={this.pos(1)} y={this.pos(1)} cell={this.props.cells.b2}/>
          <CellUI size={this.cellWidth()} x={this.pos(2)} y={this.pos(1)} cell={this.props.cells.c2}/>
          <CellUI size={this.cellWidth()} x={this.pos(3)} y={this.pos(1)} cell={this.props.cells.d2}/>
          <CellUI size={this.cellWidth()} x={this.pos(4)} y={this.pos(1)} cell={this.props.cells.e2}/>
          <CellUI size={this.cellWidth()} x={this.pos(5)} y={this.pos(1)} cell={this.props.cells.f2}/>
          <CellUI size={this.cellWidth()} x={this.pos(6)} y={this.pos(1)} cell={this.props.cells.g2}/>
          <CellUI size={this.cellWidth()} x={this.pos(7)} y={this.pos(1)} cell={this.props.cells.h2}/>
          <CellUI size={this.cellWidth()} x={this.pos(8)} y={this.pos(1)} cell={this.props.cells.i2}/>
          <CellUI size={this.cellWidth()} x={this.pos(0)} y={this.pos(2)} cell={this.props.cells.a3}/>
          <CellUI size={this.cellWidth()} x={this.pos(1)} y={this.pos(2)} cell={this.props.cells.b3}/>
          <CellUI size={this.cellWidth()} x={this.pos(2)} y={this.pos(2)} cell={this.props.cells.c3}/>
          <CellUI size={this.cellWidth()} x={this.pos(3)} y={this.pos(2)} cell={this.props.cells.d3}/>
          <CellUI size={this.cellWidth()} x={this.pos(4)} y={this.pos(2)} cell={this.props.cells.e3}/>
          <CellUI size={this.cellWidth()} x={this.pos(5)} y={this.pos(2)} cell={this.props.cells.f3}/>
          <CellUI size={this.cellWidth()} x={this.pos(6)} y={this.pos(2)} cell={this.props.cells.g3}/>
          <CellUI size={this.cellWidth()} x={this.pos(7)} y={this.pos(2)} cell={this.props.cells.h3}/>
          <CellUI size={this.cellWidth()} x={this.pos(8)} y={this.pos(2)} cell={this.props.cells.i3}/>
          <CellUI size={this.cellWidth()} x={this.pos(0)} y={this.pos(3)} cell={this.props.cells.a4}/>
          <CellUI size={this.cellWidth()} x={this.pos(1)} y={this.pos(3)} cell={this.props.cells.b4}/>
          <CellUI size={this.cellWidth()} x={this.pos(2)} y={this.pos(3)} cell={this.props.cells.c4}/>
          <CellUI size={this.cellWidth()} x={this.pos(3)} y={this.pos(3)} cell={this.props.cells.d4}/>
          <CellUI size={this.cellWidth()} x={this.pos(4)} y={this.pos(3)} cell={this.props.cells.e4}/>
          <CellUI size={this.cellWidth()} x={this.pos(5)} y={this.pos(3)} cell={this.props.cells.f4}/>
          <CellUI size={this.cellWidth()} x={this.pos(6)} y={this.pos(3)} cell={this.props.cells.g4}/>
          <CellUI size={this.cellWidth()} x={this.pos(7)} y={this.pos(3)} cell={this.props.cells.h4}/>
          <CellUI size={this.cellWidth()} x={this.pos(8)} y={this.pos(3)} cell={this.props.cells.i4}/>
          <CellUI size={this.cellWidth()} x={this.pos(0)} y={this.pos(4)} cell={this.props.cells.a5}/>
          <CellUI size={this.cellWidth()} x={this.pos(1)} y={this.pos(4)} cell={this.props.cells.b5}/>
          <CellUI size={this.cellWidth()} x={this.pos(2)} y={this.pos(4)} cell={this.props.cells.c5}/>
          <CellUI size={this.cellWidth()} x={this.pos(3)} y={this.pos(4)} cell={this.props.cells.d5}/>
          <CellUI size={this.cellWidth()} x={this.pos(4)} y={this.pos(4)} cell={this.props.cells.e5}/>
          <CellUI size={this.cellWidth()} x={this.pos(5)} y={this.pos(4)} cell={this.props.cells.f5}/>
          <CellUI size={this.cellWidth()} x={this.pos(6)} y={this.pos(4)} cell={this.props.cells.g5}/>
          <CellUI size={this.cellWidth()} x={this.pos(7)} y={this.pos(4)} cell={this.props.cells.h5}/>
          <CellUI size={this.cellWidth()} x={this.pos(8)} y={this.pos(4)} cell={this.props.cells.i5}/>
          <CellUI size={this.cellWidth()} x={this.pos(0)} y={this.pos(5)} cell={this.props.cells.a6}/>
          <CellUI size={this.cellWidth()} x={this.pos(1)} y={this.pos(5)} cell={this.props.cells.b6}/>
          <CellUI size={this.cellWidth()} x={this.pos(2)} y={this.pos(5)} cell={this.props.cells.c6}/>
          <CellUI size={this.cellWidth()} x={this.pos(3)} y={this.pos(5)} cell={this.props.cells.d6}/>
          <CellUI size={this.cellWidth()} x={this.pos(4)} y={this.pos(5)} cell={this.props.cells.e6}/>
          <CellUI size={this.cellWidth()} x={this.pos(5)} y={this.pos(5)} cell={this.props.cells.f6}/>
          <CellUI size={this.cellWidth()} x={this.pos(6)} y={this.pos(5)} cell={this.props.cells.g6}/>
          <CellUI size={this.cellWidth()} x={this.pos(7)} y={this.pos(5)} cell={this.props.cells.h6}/>
          <CellUI size={this.cellWidth()} x={this.pos(8)} y={this.pos(5)} cell={this.props.cells.i6}/>
          <CellUI size={this.cellWidth()} x={this.pos(0)} y={this.pos(6)} cell={this.props.cells.a7}/>
          <CellUI size={this.cellWidth()} x={this.pos(1)} y={this.pos(6)} cell={this.props.cells.b7}/>
          <CellUI size={this.cellWidth()} x={this.pos(2)} y={this.pos(6)} cell={this.props.cells.c7}/>
          <CellUI size={this.cellWidth()} x={this.pos(3)} y={this.pos(6)} cell={this.props.cells.d7}/>
          <CellUI size={this.cellWidth()} x={this.pos(4)} y={this.pos(6)} cell={this.props.cells.e7}/>
          <CellUI size={this.cellWidth()} x={this.pos(5)} y={this.pos(6)} cell={this.props.cells.f7}/>
          <CellUI size={this.cellWidth()} x={this.pos(6)} y={this.pos(6)} cell={this.props.cells.g7}/>
          <CellUI size={this.cellWidth()} x={this.pos(7)} y={this.pos(6)} cell={this.props.cells.h7}/>
          <CellUI size={this.cellWidth()} x={this.pos(8)} y={this.pos(6)} cell={this.props.cells.i7}/>
          <CellUI size={this.cellWidth()} x={this.pos(0)} y={this.pos(7)} cell={this.props.cells.a8}/>
          <CellUI size={this.cellWidth()} x={this.pos(1)} y={this.pos(7)} cell={this.props.cells.b8}/>
          <CellUI size={this.cellWidth()} x={this.pos(2)} y={this.pos(7)} cell={this.props.cells.c8}/>
          <CellUI size={this.cellWidth()} x={this.pos(3)} y={this.pos(7)} cell={this.props.cells.d8}/>
          <CellUI size={this.cellWidth()} x={this.pos(4)} y={this.pos(7)} cell={this.props.cells.e8}/>
          <CellUI size={this.cellWidth()} x={this.pos(5)} y={this.pos(7)} cell={this.props.cells.f8}/>
          <CellUI size={this.cellWidth()} x={this.pos(6)} y={this.pos(7)} cell={this.props.cells.g8}/>
          <CellUI size={this.cellWidth()} x={this.pos(7)} y={this.pos(7)} cell={this.props.cells.h8}/>
          <CellUI size={this.cellWidth()} x={this.pos(8)} y={this.pos(7)} cell={this.props.cells.i8}/>
          <CellUI size={this.cellWidth()} x={this.pos(0)} y={this.pos(8)} cell={this.props.cells.a9}/>
          <CellUI size={this.cellWidth()} x={this.pos(1)} y={this.pos(8)} cell={this.props.cells.b9}/>
          <CellUI size={this.cellWidth()} x={this.pos(2)} y={this.pos(8)} cell={this.props.cells.c9}/>
          <CellUI size={this.cellWidth()} x={this.pos(3)} y={this.pos(8)} cell={this.props.cells.d9}/>
          <CellUI size={this.cellWidth()} x={this.pos(4)} y={this.pos(8)} cell={this.props.cells.e9}/>
          <CellUI size={this.cellWidth()} x={this.pos(5)} y={this.pos(8)} cell={this.props.cells.f9}/>
          <CellUI size={this.cellWidth()} x={this.pos(6)} y={this.pos(8)} cell={this.props.cells.g9}/>
          <CellUI size={this.cellWidth()} x={this.pos(7)} y={this.pos(8)} cell={this.props.cells.h9}/>
          <CellUI size={this.cellWidth()} x={this.pos(8)} y={this.pos(8)} cell={this.props.cells.i9}/>
        </svg>
      </div>
    );
  }
}

function mapStateToProps(state: ISudokuState): any {
  return { cells: state.game.cells };
}

export default connect(mapStateToProps, null)(SudokuUI);
