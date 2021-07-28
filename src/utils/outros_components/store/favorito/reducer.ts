import * as actionTypes from "./actionTypes";

const initialStateFavorito: FavoritoState = {
  favoritos: [],
};

const reducerFavorito = (
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
  
    default:
      break;
  }
  return state;
};

export default reducerFavorito;