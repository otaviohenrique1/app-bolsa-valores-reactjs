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
