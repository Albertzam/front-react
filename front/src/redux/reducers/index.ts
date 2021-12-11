import { combineReducers } from "redux";
import { UserState } from "../entities";
import auth from "./auth";

export interface State {
  auth: UserState;
}

export default combineReducers<State>({
  auth,
});
