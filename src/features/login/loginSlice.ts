import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface LoginState {
  id: string;
  nome: string;
}

const loginInitialState: LoginState = {
  id: '',
  nome: ''
};

export const loginSlice = createSlice({
  name: 'login',
  initialState: loginInitialState,
  reducers: {
    setLogin: (state, action: PayloadAction<LoginState>) => {
      return {
        ...state,
        ...action.payload
      };
    },
    removeLogin: (state, action: PayloadAction<LoginState>) => {
      return {
        ...state,
        ...action.payload
      };
    },
  }
});

export const {
  setLogin,
  removeLogin
} = loginSlice.actions;

export default loginSlice.reducer;

/*
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Login {
  id: string;
  nome: string;
}

export interface LoginState {
  login: Login;
}

const loginInitialState: LoginState = {
  login: {
    id: '',
    nome: ''
  }
};

export const loginSlice = createSlice({
  name: 'login',
  initialState: loginInitialState,
  reducers: {
    addLogin: (state, action: PayloadAction<Login>) => {
      state.login.id = action.payload.id;
      state.login.nome = action.payload.nome;
    },
    getLogin: (state) => {
      return {
        login: {
          id: state.login.id,
          nome: state.login.nome
        }
      }
    },
    // removeLogin: (state) => {
    //   state.login.id = '';
    //   state.login.nome = '';
    // },
  }
});

export const {
  addLogin,
  getLogin,
  // removeLogin
} = loginSlice.actions;

export default loginSlice.reducer;
*/