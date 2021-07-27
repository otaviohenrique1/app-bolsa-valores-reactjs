import { applyMiddleware, createStore, Store } from "redux";
import thunk from "redux-thunk";
import reducer from "./favorito/reducer";

export const store1: Store<
  FavoritoState,
  FavoritoAction
> & { dispatch: DispatchTypeFavorito } = createStore(reducer, applyMiddleware(thunk));
