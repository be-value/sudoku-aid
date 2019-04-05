import React, { Component } from "react";
import Switch from "@material-ui/core/Switch";
import Select from "@material-ui/core/Select";
import FormControl from "@material-ui/core/FormControl";
import { toggleViewCellOptions, toggleViewCellNames, selectSudokuType } from "../../utils/actions";
import { connect } from "react-redux";
import { IState } from "../../utils/store/IState";
import { IGameOptionsProps } from "./IGameOptionsProps";
import { FormGroup, FormControlLabel, MenuItem, InputLabel } from "@material-ui/core";
import { SudokuType } from "./SudokuType";


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

  chooseSudokuType = (event: any) => {
    let chosen: SudokuType = event.target.value;
    if (this.props.chooseSudokuType !== undefined) {
      this.props.chooseSudokuType(chosen);
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
        <FormControl>
          <InputLabel>Sudoku</InputLabel>
          <Select
            value={this.props.sudokuType as SudokuType}
            onChange={this.chooseSudokuType}>
            <MenuItem value={SudokuType._9x9}>9x9</MenuItem>
            <MenuItem value={SudokuType._9x9Cross}>9x9 X</MenuItem>
            <MenuItem value={SudokuType._6x6}>6x6</MenuItem>
            <MenuItem value={SudokuType._6x6Cross}>6x6 X</MenuItem>
          </Select>
        </FormControl>
      </div>
    );
  }
}

function mapStateToProps(state: IState): any {
  return {
    viewCellOptions: state.viewCellOptions,
    viewCellNames: state.viewCellNames,
    sudokuType: state.sudokuChoice.type
  };
}

function mapDispatchToProps(dispatch: any): any {
  return {
    toggleViewCellOptions: (show: boolean) =>
      dispatch(toggleViewCellOptions(show)),
    toggleViewCellNames: (show: boolean) =>
      dispatch(toggleViewCellNames(show)),
    chooseSudokuType: (chosen: SudokuType) =>
      dispatch(selectSudokuType(chosen))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GameOptions);
