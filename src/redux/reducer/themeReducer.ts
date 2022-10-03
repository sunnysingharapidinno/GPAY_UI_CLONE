import {createReducer} from '@reduxjs/toolkit';
import {darkTheme, defaultTheme} from 'src/theme';
import {setTheme} from '../actions/themeAction';

export const initialState = {
  theme: defaultTheme,
};

const currentThemeReducer = createReducer(initialState, builder => {
  builder.addCase(setTheme, (state, action) => {
    state.theme = action.payload == 'default' ? defaultTheme : darkTheme;
  });
});

export default currentThemeReducer;
