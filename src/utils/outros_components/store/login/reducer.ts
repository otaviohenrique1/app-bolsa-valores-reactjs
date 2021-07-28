import * as actionTypes from "./actionTypes";

const initialStateLogin: LoginState = {
  id: '',
  nome: '',
  email: ''
};

const reducerLogin = (
  state: LoginState = initialStateLogin,
  action: LoginAction
): LoginState => {
  switch (action.type) {
    case actionTypes.ADD_LOGIN:
      return {
          id: state.id,
          nome: state.nome,
          email: state.email
      };
    case actionTypes.REMOVE_LOGIN:
      return {
        id: '',
        nome: '',
        email: ''
      };
  }
  return state;
};

export default reducerLogin;

/*
import * as actionTypes from "./actionTypes";

const initialStateLogin: LoginState = {
  login: {
    id: '',
    nome: '',
    email: ''
  },
};

const reducerLogin = (
  state: LoginState = initialStateLogin,
  action: LoginAction
): LoginState => {
  switch (action.type) {
    case actionTypes.ADD_LOGIN:
      return {
        ...state,
        login: {
          id: state.login.id,
          nome: state.login.nome,
          email: state.login.email,
        }
      };
    case actionTypes.REMOVE_LOGIN:
      return {
        ...state,
        login: {
          id: '',
          nome: '',
          email: ''
        }
      };
  }
  return state;
};

export default reducerLogin;
*/