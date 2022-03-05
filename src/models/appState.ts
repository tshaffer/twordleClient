import { cloneDeep } from 'lodash';

import { AppState } from '../types';
import { TedModelBaseAction } from './baseAction';

// ------------------------------------
// Constants
// ------------------------------------
const SET_CHAR_AT_LOCATION = 'SET_CHAR_AT_LOCATION';
const ADD_CHAR_NOT_AT_LOCATION = 'ADD_CHAR_NOT_AT_LOCATION';

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

export interface AddCharacterNotAtLocation {
  index: number;
  charNotAtLocation: string;
}

export const addCharacterNotAtLocation = (
  index: number,
  charNotAtLocation: string,
): any => {
  return {
    type: ADD_CHAR_NOT_AT_LOCATION,
    payload: {
      index,
      charNotAtLocation,
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
  action: TedModelBaseAction<SetCharAtLocation & AddCharacterNotAtLocation>
): AppState => {
  switch (action.type) {
    case SET_CHAR_AT_LOCATION: {
      const newState = cloneDeep(state);
      newState.charsAtExactLocation[action.payload.index, action.payload.charAtLocation];
      return newState;
    }
    case ADD_CHAR_NOT_AT_LOCATION: {
      const newState = cloneDeep(state);
      const charsNotAtLocation: string[] = newState.charsNotAtExactLocation[action.payload.index];
      charsNotAtLocation.push(action.payload.charNotAtLocation);
      return newState;
    }
    default:
      return state;
  }
};
