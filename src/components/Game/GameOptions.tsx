import React, { Component } from "react";
import Switch from "@material-ui/core/Switch";
import Typography from "@material-ui/core/Typography";
import { toggleViewCellOptions, toggleViewCellNames } from "../../utils/actions";
import { connect } from "react-redux";
import { IState } from "../../utils/store/IState";
import { IGameOptionsProps } from "./IGameOptionsProps";
import { FormGroup, FormControlLabel } from "@material-ui/core";

class GameOptions extends Component<IGameOptionsProps> {
  constructor(props: any) {
    super(props);
    this.handleViewCellOptionsChanged = this.handleViewCellOptionsChanged.bind(this);
    this.handleViewCellNamesChanged = this.handleViewCellNamesChanged.bind(this);
  }

  handleViewCellOptionsChanged = (event: any, checked: boolean) => {
    if (this.props.toggleViewCellOptions !== undefined) {
      this.props.toggleViewCellOptions(checked);
    }
  }

  handleViewCellNamesChanged = (event: any, checked: boolean) => {
    if (this.props.toggleViewCellNames !== undefined) {
      this.props.toggleViewCellNames(checked);
    }
  }

  render(): JSX.Element {
    return (
      <div style={{ float: "left", marginLeft: "30px"}}>
        <h3>Sudoku aid</h3>
        <FormGroup row>
          <FormControlLabel
            control={
              <Switch onChange={this.handleViewCellNamesChanged} checked={this.props.viewCellNames as boolean} color="primary"/>
            }
            label="cell names"
          />
          <FormControlLabel
            control={
              <Switch onChange={this.handleViewCellOptionsChanged} checked={this.props.viewCellOptions as boolean} color="primary"/>
            }
            label="cell options"
          />
        </FormGroup>
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
