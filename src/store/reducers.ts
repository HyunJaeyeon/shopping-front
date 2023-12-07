import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import user from './userSlice';

const persistConfig = {
  key: 'root', // localStorage key
  storage, // localStorage
  // whitelist: ['user'], // 저장할 target (reducer name)
};

const rootReducer = combineReducers({
  user,
});

export default persistReducer(persistConfig, rootReducer);
