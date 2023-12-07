import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import userReducer from './userSlice';

const persistConfig = {
  key: 'root', // localStorage key
  storage, // localStorage
  whitelist: ['userReducer'], // 저장할 target (reducer name)
};

const rootReducer = combineReducers({
  userReducer,
});

export default persistReducer(persistConfig, rootReducer);
