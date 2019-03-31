import React, { Component } from "react";
import Switch from "react-switch";
import { toggleViewCellOptions, toggleViewCellNames } from "../../utils/actions";
import { connect } from "react-redux";
import { IState } from "../../utils/store/IState";
import { IGameOptionsProps } from "./IGameOptionsProps";

class GameOptions extends Component<IGameOptionsProps> {
  constructor(props: any) {
    super(props);
    this.handleViewCellOptionsChanged = this.handleViewCellOptionsChanged.bind(this);
    this.handleViewCellNamesChanged = this.handleViewCellNamesChanged.bind(this);
  }

  handleViewCellOptionsChanged = (checked: boolean) => {
    if (this.props.toggleViewCellOptions !== undefined) {
      this.props.toggleViewCellOptions(checked);
    }
  }

  handleViewCellNamesChanged = (checked: boolean) => {
    if (this.props.toggleViewCellNames !== undefined) {
      this.props.toggleViewCellNames(checked);
    }
  }

  render(): JSX.Element {
    return (
      <div style={{ float: "left", marginLeft: "30px"}}>
        <h1>Sudoku aid</h1>
        <div style={{ marginBottom: "15px"}}>
          <Switch onChange={this.handleViewCellNamesChanged} checked={this.props.viewCellNames as boolean}></Switch>
          <span style={{ marginLeft: "15px"}}>Show cell names</span>
        </div>
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
    viewCellOptions: state.viewCellOptions,
    viewCellNames: state.viewCellNames
  };
}

function mapDispatchToProps(dispatch: any): any {
  return {
    toggleViewCellOptions: (show: boolean) =>
      dispatch(toggleViewCellOptions(show)),
    toggleViewCellNames: (show: boolean) =>
      dispatch(toggleViewCellNames(show))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GameOptions);
