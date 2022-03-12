import { cloneDeep } from 'lodash';

import { AppState } from '../types';
import { TedModelBaseAction } from './baseAction';

// ------------------------------------
// Constants
// ------------------------------------
const SET_CHAR_AT_LOCATION = 'SET_CHAR_AT_LOCATION';
const SET_CHARS_NOT_AT_LOCATION = 'ADD_CHAR_NOT_AT_LOCATION';

// ------------------------------------
// Actions
// ------------------------------------

export interface SetCharAtLocation {
  index: number;
  charAtLocation: string;
}

export const setCharAtLocation = (
  index: number,
  charAtLocation: string,
): any => {
  return {
    type: SET_CHAR_AT_LOCATION,
    payload: {
      index,
      charAtLocation,
    },
  };
};

export interface SetCharactersNotAtLocation {
  index: number;
  charsNotAtLocation: string;
}

export const setCharsNotAtLocation = (
  index: number,
  charsNotAtLocation: string,
): any => {
  return {
    type: SET_CHARS_NOT_AT_LOCATION,
    payload: {
      index,
      charsNotAtLocation,
    },
  };
};

// ------------------------------------
// Reducer
// ------------------------------------

const initialState: AppState = {
  charsAtExactLocation: ['', '', '', '', ''],
  charsNotAtExactLocation: [],
  charsNotInWord: [],
};

export const appStateReducer = (
  state: AppState = initialState,
  action: TedModelBaseAction<SetCharAtLocation & SetCharactersNotAtLocation>
): AppState => {
  switch (action.type) {
    case SET_CHAR_AT_LOCATION: {
      const newState = cloneDeep(state);
      newState.charsAtExactLocation[action.payload.index] = action.payload.charAtLocation;
      return newState;
    }
    case SET_CHARS_NOT_AT_LOCATION: {
      const newState = cloneDeep(state);
      newState.charsNotAtExactLocation[action.payload.index] = action.payload.charsNotAtLocation;
      return newState;
    }
    default:
      return state;
  }
};
