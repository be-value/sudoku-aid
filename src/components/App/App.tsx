import React from "react";
import store from "../../utils/store";
import { Provider } from "react-redux";
import Game from "../Game/Game";


const App : any = () => (
  <Provider store={store}>
    <Game />
  </Provider>
);

export default App;
