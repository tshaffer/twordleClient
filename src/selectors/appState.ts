import { TedState } from '../types/base';

export const getLettersAtExactLocation = (state: TedState): string[] => {
  return state.appState.lettersAtExactLocation;
};

export const getLettersNotAtExactLocation = (state: TedState): string[] => {
  return state.appState.lettersNotAtExactLocation;
};

export const getLettersNotInWord = (state: TedState) => {
  return state.appState.lettersNotInWord;
};

export const getPossibleWords = (state: TedState): string[] => {
  return state.appState.possibleWords;
};


