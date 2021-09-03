/** @module Model:base */

import { combineReducers } from 'redux';
import { TedCrossState } from '../types';
import { activePuzzleStateReducer } from './activePuzzleState';
import { appStateReducer } from './appState';
import { puzzlesStateReducer } from './puzzles';

// -----------------------------------------------------------------------
// Reducers
// -----------------------------------------------------------------------
export const rootReducer = combineReducers<TedCrossState>({
  activePuzzleState: activePuzzleStateReducer,
  appState: appStateReducer,
  puzzlesState: puzzlesStateReducer,

});

// -----------------------------------------------------------------------
// Validators
// -----------------------------------------------------------------------

