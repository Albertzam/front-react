import { combineReducers } from "redux";
import { CourseState } from "../../components/components/courses/entities";
import { UserState } from "../entities";
import auth from "./auth";
import menu from "./menu";
import course from "../../components/components/courses/redux/reducer/curse.reducer";

export interface State {
  auth: UserState;
  menu: any;
  course: CourseState;
}

export default combineReducers<State>({
  auth,
  menu,
  course,
});
