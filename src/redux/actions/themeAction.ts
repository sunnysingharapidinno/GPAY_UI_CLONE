import {createAction} from '@reduxjs/toolkit';

export const setTheme = createAction<'default' | 'light'>('theme/setTheme');
