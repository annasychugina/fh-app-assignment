import {configureStore} from '@reduxjs/toolkit';
import {combineReducers} from 'redux';

import {guestsReducer} from '../entities/guests';
import {RootState} from '../entities/types';

const rootReducer = combineReducers<RootState>({
  guests: guestsReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});
