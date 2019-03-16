import { createStore, Store, Action } from "redux";
import rootReducer from "../reducers/index";

const store: Store<{}, Action<any>> = createStore(rootReducer);

export default store;