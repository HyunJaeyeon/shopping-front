import { createSlice } from '@reduxjs/toolkit';
import handler from '../pages/Login/handler';

const userSlice = createSlice({
  name: 'user',
  initialState: { userId: '', isLogin: false, message: '' },
  reducers: {},
  extraReducers: {
    [handler.fulfilled.type]: (state, action) => {
      console.log(action.payload);
      state.userId = action.payload.userId;
      state.isLogin = true;
      state.message = '';
    },
    [handler.rejected.type]: (state, action) => {
      state.userId = '';
      state.isLogin = false;
      state.message = action.payload;
    },
  },
});

export default userSlice.reducer;
