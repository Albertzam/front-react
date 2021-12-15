import { ApiCallAction, User } from "../entities";

export type UserLoginRequest = ApiCallAction;

export interface UserLoginRequestSuccess extends ApiCallAction {
  user: User;
}

export type UserLoginRequestError = ApiCallAction;

export interface UserLoginRequestLogout {}
export type AuthActions = UserLoginRequest &
  UserLoginRequestSuccess &
  UserLoginRequestError &
  UserLoginRequestLogout;
