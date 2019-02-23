import { Sudoku } from "../../core/Sudoku";
import React, { Component } from "react";
import "./App.css";
import DigitBox from "../DigitBox/DigitBox";

class App extends Component {
  private sudoku : Sudoku = new Sudoku();

  render(): JSX.Element {
    return (
      <div className="App">
        <DigitBox>1</DigitBox>
        <DigitBox>2</DigitBox>
        <DigitBox>3</DigitBox>
        <DigitBox>4</DigitBox>
        <DigitBox>5</DigitBox>
        <DigitBox>6</DigitBox>
        <DigitBox>7</DigitBox>
        <DigitBox>8</DigitBox>
        <DigitBox>9</DigitBox>
      </div>
    );
  }
}

export default App;
