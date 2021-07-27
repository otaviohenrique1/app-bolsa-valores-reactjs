import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState, AppThunk } from './store';

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
      state.id = id;
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
