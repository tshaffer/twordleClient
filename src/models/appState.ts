import { cloneDeep } from 'lodash';

import { AppState } from '../types';
import { TedModelBaseAction } from './baseAction';

// ------------------------------------
// Constants
// ------------------------------------
const SET_LETTER_AT_LOCATION = 'SET_LETTER_AT_LOCATION';
const SET_LETTERS_NOT_AT_LOCATION = 'ADD_LETTER_NOT_AT_LOCATION';
const SET_LETTERS_NOT_IN_WORD = 'SET_LETTERS_NOT_IN_WORD';
const SET_POSSIBLE_WORDS = 'SET_POSSIBLE_WORDS';
const SET_LETTERS_IN_WORD_AT_ANY_LOCATION = 'SET_LETTERS_IN_WORD_AT_ANY_LOCATION';
const SET_OTHER_WORDS = 'SET_OTHER_WORDS';

// ------------------------------------
// Actions
// ------------------------------------

export interface SetLetterAtLocation {
  index: number;
  letterAtLocation: string;
}

export const setLetterAtLocation = (
  index: number,
  letterAtLocation: string,
): any => {
  return {
    type: SET_LETTER_AT_LOCATION,
    payload: {
      index,
      letterAtLocation,
    },
  };
};

export interface SetLettersNotAtLocation {
  index: number;
  lettersNotAtLocation: string;
}

export const setLettersNotAtLocation = (
  index: number,
  lettersNotAtLocation: string,
): any => {
  return {
    type: SET_LETTERS_NOT_AT_LOCATION,
    payload: {
      index,
      lettersNotAtLocation,
    },
  };
};

export interface SetLettersNotInWord {
  lettersNotInWord: string,
}

export const setLettersNotInWord = (
  lettersNotInWord: string,
): any => {
  return {
    type: SET_LETTERS_NOT_IN_WORD,
    payload: {
      lettersNotInWord,
    },
  };
};

export interface SetPossibleWords {
  possibleWords: string[],
}

export const setPossibleWords = (
  possibleWords: string[],
): any => {
  return {
    type: SET_POSSIBLE_WORDS,
    payload: {
      possibleWords,
    },
  };
};

export interface SetLettersInWordAtAnyLocation {
  lettersInWordAtAnyLocation: string,
}

export const setLettersInWordAtAnyLocation = (
  lettersInWordAtAnyLocation: string,
): any => {
  return {
    type: SET_LETTERS_IN_WORD_AT_ANY_LOCATION,
    payload: {
      lettersInWordAtAnyLocation,
    },
  };
};

export interface SetOtherWords {
  otherWords: string[],
}

export const setOtherWords = (
  otherWords: string[],
): any => {
  return {
    type: SET_POSSIBLE_WORDS,
    payload: {
      otherWords,
    },
  };
};

// ------------------------------------
// Reducer
// ------------------------------------

const initialState: AppState = {
  lettersAtExactLocation: ['', '', '', '', ''],
  lettersNotAtExactLocation: ['', '', '', '', ''],
  lettersNotInWord: '',
  possibleWords: [],
  lettersInWordAtAnyLocation: '',
  otherWords: [],
};

export const appStateReducer = (
  state: AppState = initialState,
  action: TedModelBaseAction<SetLetterAtLocation & SetLettersNotAtLocation & SetLettersNotInWord & SetPossibleWords & SetLettersInWordAtAnyLocation & SetOtherWords>
): AppState => {
  switch (action.type) {
    case SET_LETTER_AT_LOCATION: {
      const newState = cloneDeep(state);
      newState.lettersAtExactLocation[action.payload.index] = action.payload.letterAtLocation;
      return newState;
    }
    case SET_LETTERS_NOT_AT_LOCATION: {
      const newState = cloneDeep(state);
      newState.lettersNotAtExactLocation[action.payload.index] = action.payload.lettersNotAtLocation;
      return newState;
    }
    case SET_LETTERS_NOT_IN_WORD: {
      return { ...state, lettersNotInWord: action.payload.lettersNotInWord };
    }
    case SET_POSSIBLE_WORDS: {
      return { ...state, possibleWords: action.payload.possibleWords };
    }
    case SET_LETTERS_IN_WORD_AT_ANY_LOCATION: {
      return { ...state, lettersNotInWord: action.payload.lettersInWordAtAnyLocation };
    }
    case SET_OTHER_WORDS: {
      return { ...state, otherWords: action.payload.otherWords };
    }
    default:
      return state;
  }
};
