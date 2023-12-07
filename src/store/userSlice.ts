import { createSlice } from '@reduxjs/toolkit';
import getUser from '../apis/login';

const userSlice = createSlice({
  name: 'user',
  initialState: { userId: '', isLogin: false, message: '' },
  reducers: {},
  extraReducers: {
    [getUser.fulfilled.type]: (state, action) => {
      console.log(action.payload);
      state.userId = action.payload.userId;
      state.isLogin = true;
      state.message = '';
    },
    [getUser.rejected.type]: (state, action) => {
      state.userId = '';
      state.isLogin = false;
      state.message = action.payload;
    },
  },
});

export default userSlice.reducer;
