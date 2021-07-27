import * as actionTypes from "./actionTypes";

const initialState: LoginState = {
  login: [],
};

const reducer = (
  state: LoginState = initialState,
  action: LoginAction
): LoginState => {
  switch (action.type) {
    case actionTypes.ADD_LOGIN:
      const novoLogin: ILogin = {
        id: action.login.id,
        nome: action.login.nome,
        email: action.login.email,
      };
      return {
        ...state,
        login: state.login.concat(novoLogin)
      };
    case actionTypes.REMOVE_LOGIN:
      const loginRemovido: ILogin[] = state.login.filter(login => login.id !== action.login.id);
      return {
        ...state,
        login: loginRemovido
      };
  
    default:
      break;
  }
  return state;
};

export default reducer;