import * as actionTypes from "./actionTypes";

const initialStateLogin: LoginState = {
  id: '',
  nome: '',
  email: ''
};

export const reducerLogin = (
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

const initialStateFavorito: FavoritoState = {
  favoritos: [],
};

export const reducerFavorito = (
  state: FavoritoState = initialStateFavorito,
  action: FavoritoAction
): FavoritoState => {
  switch (action.type) {
    case actionTypes.ADD_FAVORITO:
      const novoFavorito: IFavorito = {
        id: action.favorito.id,
        favorito: action.favorito.favorito,
        src: action.favorito.src,
        alt: action.favorito.alt,
        nome_empresa: action.favorito.nome_empresa,
        codigo_empresa: action.favorito.codigo_empresa,
        porcentagem: action.favorito.porcentagem,
      };
      return {
        ...state,
        favoritos: state.favoritos.concat(novoFavorito)
      };
    case actionTypes.REMOVE_FAVORITO:
      const favoritoRemovido: IFavorito[] = state.favoritos.filter(favorito => favorito.id !== action.favorito.id);
      return {
        ...state,
        favoritos: favoritoRemovido
      };
  }
  return state;
};

const initialStateEmpresasRecentes: EmpresasRecentesState = {
  empresasRecentes: [],
};

export const reducerEmpresasRecentes = (
  state: EmpresasRecentesState = initialStateEmpresasRecentes,
  action: EmpresasRecentesAction
): EmpresasRecentesState => {
  switch (action.type) {
    case actionTypes.ADD_EMPRESA_RECENTE:
      const novaEmpresaRecente: IEmpresasRecentes = {
        id: action.empresaRecente.id,
        favorito: action.empresaRecente.favorito,
        src: action.empresaRecente.src,
        alt: action.empresaRecente.alt,
        nome_empresa: action.empresaRecente.nome_empresa,
        codigo_empresa: action.empresaRecente.codigo_empresa,
        porcentagem: action.empresaRecente.porcentagem,
      };
      return {
        ...state,
        empresasRecentes: state.empresasRecentes.concat(novaEmpresaRecente)
      };
    case actionTypes.REMOVE_EMPRESA_RECENTE:
      const empresaRecenteRemovida: IEmpresasRecentes[] = state.empresasRecentes.filter(empresaRecente => empresaRecente.id !== action.empresaRecente.id);
      return {
        ...state,
        empresasRecentes: empresaRecenteRemovida
      };
  }
  return state;
};

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