import React from "react";
import ReactDOM from "react-dom";
import SudokuUI from "./SudokuUI";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<SudokuUI />, div);
  ReactDOM.unmountComponentAtNode(div);
});
