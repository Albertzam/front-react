import authService from "../../services/auth.service";
import {
  loginRequest,
  loginRequestError,
  loginRequestSuccess,
} from "./auth.actions";

export const login = (email: string, password: string) => (dispatch: any) => {
  const data = { email, password };
  dispatch(loginRequest(data));
  return authService.login(email, password).then(
    (data) => {
      if (data != "") {
        dispatch(loginRequestSuccess(data));
      } else {
        dispatch(
          loginRequestError({
            name: "Error",
            message: "Usuario o contraseña incorrecto",
          })
        );
      }
    },
    (error) => {
      dispatch(loginRequestError(error));
    }
  );
};

export default {
  login,
};
