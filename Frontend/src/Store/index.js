import { configureStore, createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: "auth",
  initialState: { 
    isLogin: localStorage.getItem('isLogin') === 'true'
  },
  reducers: {
    login(state) {
      state.isLogin = true;
      localStorage.setItem('isLogin', 'true');
    },
    logout(state) {
      state.isLogin = false;
      localStorage.setItem('isLogin', 'false');
    }
  }
});


export const { login, logout } = authSlice.actions;

const store = configureStore({
  reducer: {
    auth: authSlice.reducer
  }
});

export default store;
