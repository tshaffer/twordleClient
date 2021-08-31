/** @module Model:base */

import { combineReducers } from 'redux';
import { tedStateReducer } from './tedState';
import { TedBaseState } from '../types';

// -----------------------------------------------------------------------
// Reducers
// -----------------------------------------------------------------------
export const rootReducer = combineReducers<TedBaseState>({
  tedState: tedStateReducer,
});

// -----------------------------------------------------------------------
// Validators
// -----------------------------------------------------------------------

