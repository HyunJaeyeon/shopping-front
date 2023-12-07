import { configureStore } from '@reduxjs/toolkit';
// import userReducer from './userSlice';
import { persistStore } from 'redux-persist';
import rootReducer from './reducers';

const store = configureStore({
  reducer: {
    root: rootReducer,
  },
  devTools: process.env.NODE_ENV !== 'production',
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const persistor = persistStore(store);
export default store;
