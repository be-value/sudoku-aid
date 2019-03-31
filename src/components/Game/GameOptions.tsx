import React, { Component } from "react";
import Switch from "react-switch";
import { toggleViewCellOptions } from "../../utils/actions";
import { connect } from "react-redux";
import { IState } from "../../utils/store/IState";
import { IGameOptionsProps } from "./IGameOptionsProps";

class GameOptions extends Component<IGameOptionsProps> {
  constructor(props: any) {
    super(props);
    this.handleViewCellOptionsChanged = this.handleViewCellOptionsChanged.bind(this);
  }

  handleViewCellOptionsChanged = (checked: boolean) => {
    if (this.props.toggleViewCellOptions !== undefined) {
      this.props.toggleViewCellOptions(checked);
    }
  }

  render(): JSX.Element {
    return (
      <div style={{ float: "left", marginLeft: "30px"}}>
        <h1>Sudoku aid</h1>
        <div style={{ marginBottom: "15px"}}>
          <Switch onChange={this.handleViewCellOptionsChanged} checked={this.props.viewCellOptions as boolean}></Switch>
          <span style={{ marginLeft: "15px"}}>Show cell options</span>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state: IState): any {
  return {
    viewCellOptions: state.viewCellOptions
  };
}

function mapDispatchToProps(dispatch: any): any {
  return {
    toggleViewCellOptions: (show: boolean) =>
      dispatch(toggleViewCellOptions(show))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GameOptions);
