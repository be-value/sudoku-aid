import React from "react";
import { connect } from "react-redux";
import GameOptions from "./GameOptions";
import { IState } from "../../utils/store/IState";
import { sudokuUI } from "../Sudoku/SudokuUI";

class Game extends React.Component<any> {
  constructor(props: any) {
    super(props);
  }

  public render(): JSX.Element {
    return (
      <div>
        {sudokuUI(this.props.sudokuChoice.type).render()}
        <GameOptions />
      </div>
    );
  }
}

function mapStateToProps(state: IState): any {
  return {
    sudokuChoice: state.sudokuChoice
  };
}


export default connect(
  mapStateToProps,
  null
)(Game);
