import { createStore, compose } from "redux";
import rootReducer from "../reducers";
import { devToolsEnhancer } from "redux-devtools-extension";
import { getInitialState } from "./initial-state";

const store: any = createStore(
  rootReducer,
  getInitialState(),
  compose(devToolsEnhancer({}))
);

export default store;