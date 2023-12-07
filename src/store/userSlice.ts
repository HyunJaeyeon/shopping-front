import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import getUser from '../apis/login';
import { PURGE } from 'redux-persist';

const userSlice = createSlice({
  name: 'user',
  initialState: { userId: '', isLogin: false, message: '' },
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
      );
  },
});

export default userSlice.reducer;
