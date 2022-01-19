import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// const stringToken:string = 'token';

const localStorageValue = localStorage.getItem('token') ? JSON.parse(localStorage.getItem('token') || '') : null;

type LocalStorage = {
  email: string,
  password: string,
  token: boolean,
}

type Login = {
  email: string,
  password: string,
  localStorageKey: string,
  localStorageValue: LocalStorage | null,
}

const auth = createSlice({
  name: 'auth',
  initialState: {
    email: localStorageValue?.email || '',
    password: localStorageValue?.password || '',
    token: localStorageValue?.token || false
  },
  reducers: {
    login (state, action: PayloadAction<Login>) {
      state.email = action.payload.email;
      state.password = action.payload.password;
      state.token = true
    },

    logout (state, action: PayloadAction<Login>) {
      state.email = action.payload.email;
      state.password = action.payload.password;
      state.token = false
    }
  }
})

export const { login, logout } = auth.actions;

export default auth.reducer;