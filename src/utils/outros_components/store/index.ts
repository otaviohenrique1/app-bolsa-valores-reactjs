import { applyMiddleware, createStore, Store } from "redux";
import thunk from "redux-thunk";
import reducerLogin from "./login/reducer";
import reducerFavorito from "./favorito/reducer";
import reducerEmpresasRecentes from "./empresa_recente/reducer";

export const storeLogin: Store<
  LoginState,
  LoginAction
> & { dispatch: DispatchTypeLogin } = createStore(reducerLogin, applyMiddleware(thunk));

export const storeFavorito: Store<
  FavoritoState,
  FavoritoAction
> & { dispatch: DispatchTypeFavorito } = createStore(reducerFavorito, applyMiddleware(thunk));

export const storeEmpresasRecentes: Store<
  EmpresasRecentesState,
  EmpresasRecentesAction
> & { dispatch: DispatchTypeEmpresasRecentes } = createStore(reducerEmpresasRecentes, applyMiddleware(thunk));