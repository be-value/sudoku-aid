import { IState } from "./IState";
import { dehydrateState } from "./persist-state";

export function getInitialState(): IState {
  return dehydrateState();
}

