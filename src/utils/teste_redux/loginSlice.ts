import { createSlice } from '@reduxjs/toolkit';

export interface CounterState {
  id: string;
  nome: string;
  email: string;
}

const initialState: CounterState = {
  id: '',
  nome: '',
  email: '',
};

export const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    setId: (state) => {
      state.id = '';
    },
    setNome: (state) => {
      state.nome = '';
    },
    setEmail: (state) => {
      state.email = '';
    },
  },
});

export const { setId, setNome, setEmail } = loginSlice.actions;

export default loginSlice.reducer;
