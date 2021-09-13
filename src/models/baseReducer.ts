/** @module Model:base */

import { combineReducers } from 'redux';
import { TedCrossState } from '../types';
import { appStateReducer } from './appState';
import { guessesStateReducer } from './guessesState';
import { puzzlesStateReducer } from './puzzles';
import { derivedCrosswordDataReducer } from './derivedCrosswordData';

// -----------------------------------------------------------------------
// Reducers
// -----------------------------------------------------------------------
export const rootReducer = combineReducers<TedCrossState>({
  appState: appStateReducer,
  derivedCrosswordData: derivedCrosswordDataReducer,
  guessesState: guessesStateReducer,
  puzzlesState: puzzlesStateReducer,
});

// -----------------------------------------------------------------------
// Validators
// -----------------------------------------------------------------------

