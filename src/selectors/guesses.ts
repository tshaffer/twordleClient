import { GuessesGrid, TedCrossState } from '../types';

export const getGuesses = (state: TedCrossState): GuessesGrid | null => {
  return state.guessesState.guessesGrid;
};
