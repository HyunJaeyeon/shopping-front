import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

interface LoginProps {
  loginId: string;
  password: string;
}

const handler = createAsyncThunk(
  'Login',
  async ({ loginId, password }: LoginProps, thunkAPI) => {
    try {
      //시도 내용
      const response = await axios.post(
        'http://3.34.121.245:8080/auth/authenticate',
        { loginId, password },
      );
      console.log('response', response);
      return thunkAPI.fulfillWithValue(response.data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  },
);

export default handler;