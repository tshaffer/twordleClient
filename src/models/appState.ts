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
const SET_HELPER_LETTERS = 'SET_HELPER_LETTERS';
const SET_HELPER_WORD = 'SET_HELPER_WORD';

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

export interface SetHelperLetters {
  helperLetters: string,
}

export const setHelperLetters = (
  helperLetters: string,
): any => {
  return {
    type: SET_HELPER_LETTERS,
    payload: {
      helperLetters,
    },
  };
};

export interface SetHelperWord {
  helperWord: string,
}

export const setHelperWord = (
  helperWord: string,
): any => {
  return {
    type: SET_HELPER_WORD,
    payload: {
      helperWord,
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
  helperLetters: '',
  helperWord: '',
};

export const appStateReducer = (
  state: AppState = initialState,
  action: TedModelBaseAction<SetLetterAtLocation & SetLettersNotAtLocation & SetLettersNotInWord & SetPossibleWords & SetHelperLetters & SetHelperWord>
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
    case SET_HELPER_LETTERS: {
      return { ...state, helperLetters: action.payload.helperLetters };
    }
    case SET_HELPER_WORD: {
      return { ...state, helperWord: action.payload.helperWord };
    }
    default:
      return state;
  }
};
