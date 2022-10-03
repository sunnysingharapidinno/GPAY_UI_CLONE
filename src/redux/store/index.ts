import {configureStore} from '@reduxjs/toolkit';
import currentThemeReducer from '../reducer/themeReducer';

const store = configureStore({
  reducer: {
    themeReducer: currentThemeReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
