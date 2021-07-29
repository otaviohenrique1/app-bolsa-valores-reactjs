import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "../login/loginSlice";
import usuarioReducer from "../usuario/usuarioSlice";
import favoritoReducer from "../favorito/favoritoSlice";
import empresaRecenteReducer from "../empresa_recente/empresaRecenteSlice";

export const store = configureStore({
  reducer: {
    login: loginReducer,
    usuario: usuarioReducer,
    favorito: favoritoReducer,
    empresaRecente: empresaRecenteReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;