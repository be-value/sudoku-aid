import React from "react";
import store from "../../utils/store";
import { Provider } from "react-redux";
import SudokuUI from "../SudokuUI/SudokuUI";


const App : any = () => (
  <Provider store={store}>
    <SudokuUI/>
  </Provider>
);

export default App;
