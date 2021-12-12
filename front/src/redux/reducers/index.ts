import { combineReducers } from "redux";
import { UserState } from "../entities";
import auth from "./auth";
import menu from "./menu";

export interface State {
  auth: UserState;
  menu: any;
}

export default combineReducers<State>({
  auth,
  menu,
});
