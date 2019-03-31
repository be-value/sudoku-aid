import React, { Component } from "react";
import Sudoku9x9 from "../Sudoku/Sudoku9x9";
import GameOptions from "./GameOptions";


const Game: any = () => (
  <div>
    <Sudoku9x9 />
    <GameOptions />
  </div>
);

export default Game;
