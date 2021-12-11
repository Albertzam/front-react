import { AuthActions } from "../actions/authActions";
import { AuthType } from "../actions/authActionTypes";
import { User, UserState } from "../entities";

const user: User = JSON.parse(localStorage.getItem("user") as string);

const initialState: UserState = {
  user: {
    name: user !== null ? user.name : "",
    apellido: user !== null ? user.apellido : "",
    segApe: user !== null ? user.segApe : "",
    email: user !== null ? user.email : "",
  },
  isLoggedIn: user ? true : false,
  isInProgress: false,
};
export default function (state = initialState, action: AuthActions): UserState {
  const { type, user } = action;

  switch (type) {
    case AuthType.LOGIN_REQUEST:
      return {
        ...state,
        isInProgress: true,
      };
    case AuthType.LOGIN_SUCCESS:
      return {
        ...state,
        isLoggedIn: true,
        user: user,
        isInProgress: false,
      };
    case AuthType.LOGIN_FAIL:
      const er: any = action.error;
      console.log(er.response.data.message);
      return {
        ...state,
        isInProgress: false,
        error: er.response.data.message,
      };

    case AuthType.LOGOUT:
      return {
        ...state,
        isLoggedIn: false,
        user: undefined,
      };

    default:
      return state;
  }
}
