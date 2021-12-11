import { User, UserLogin } from "../entities";
import {
  UserLoginRequest,
  UserLoginRequestError,
  UserLoginRequestSuccess,
} from "./authActions";
import { AuthType } from "./authActionTypes";

export const loginRequest = (user: UserLogin): UserLoginRequest => ({
  type: AuthType.LOGIN_REQUEST,
});

export const loginRequestSuccess = (user: User): UserLoginRequestSuccess => ({
  type: AuthType.LOGIN_SUCCESS,
  user,
});

export const loginRequestError = (error: Error): UserLoginRequestError => ({
  type: AuthType.LOGIN_FAIL,
  error,
});
