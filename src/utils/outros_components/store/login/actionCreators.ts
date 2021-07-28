import * as actionTypes from "./actionTypes";

export function addLogin(login: ILogin) {
  const action: LoginAction = {
    type: actionTypes.ADD_LOGIN,
    login,
  };

  return action;
}

export function removeLogin(login: ILogin) {
  const action: LoginAction = {
    type: actionTypes.REMOVE_LOGIN,
    login,
  };
  
  return action;
}
