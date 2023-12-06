import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import handler from '../pages/Login/handler';

const userSlice = createSlice({
  name: 'user',
  initialState: { userId: '', isLogin: false },
  reducers: {},
  extraReducers: {
    [handler.fulfilled.type]: (state, action) => {
      console.log(action.payload);
      state.userId = action.payload.userId;
      state.isLogin = true;
    },
    [handler.rejected.type]: (state) => {
      state.userId = '';
      state.isLogin = false;
    },
  },
});

// export const { login, logout } = userSlice.actions;
export default userSlice.reducer;
