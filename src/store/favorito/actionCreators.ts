import * as actionTypes from "./actionTypes";

export function addFavorito(favorito: IFavorito) {
  const action: FavoritoAction = {
    type: actionTypes.ADD_FAVORITO,
    favorito,
  };

  return action;
}

export function removeFavorito(favorito: IFavorito) {
  const action: FavoritoAction = {
    type: actionTypes.REMOVE_FAVORITO,
    favorito,
  };
  
  return action;
}

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

export function addEmpresaRecente(empresaRecente: IEmpresasRecentes) {
  const action: EmpresasRecentesAction = {
    type: actionTypes.ADD_EMPRESA_RECENTE,
    empresaRecente,
  };

  return action;
}

export function removeEmpresaRecente(empresaRecente: IEmpresasRecentes) {
  const action: EmpresasRecentesAction = {
    type: actionTypes.REMOVE_EMPRESA_RECENTE,
    empresaRecente,
  };
  
  return action;
}