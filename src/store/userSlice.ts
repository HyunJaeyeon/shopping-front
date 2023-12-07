import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import getUser from '../apis/login';
import { PURGE } from 'redux-persist';

const INITIAL_STATE = { userId: '', isLogin: false, message: '' };

const userSlice = createSlice({
  name: 'user',
  initialState: INITIAL_STATE,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getUser.fulfilled, (state, action) => {
        console.log(action.payload);
        state.userId = action.payload.userId;
        state.isLogin = true;
        state.message = '';
      })
      .addCase(
        getUser.rejected.type,
        (state, action: PayloadAction<string>) => {
          state.userId = '';
          state.isLogin = false;
          state.message = action.payload;
        },
      )
      //유저정보 초기화
      .addCase(PURGE, () => INITIAL_STATE);
  },
});

export default userSlice.reducer;
