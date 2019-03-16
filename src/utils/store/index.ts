import { createStore, compose } from "redux";
import rootReducer from "../reducers";
import { devToolsEnhancer } from "redux-devtools-extension";
import initialState from "./initial-state";

const store: any = createStore(
  rootReducer,
  initialState as any,
  compose(devToolsEnhancer({}))
);

export default store;