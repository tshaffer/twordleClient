import { cloneDeep } from 'lodash';
import { GuessesState, CellGuess, Guesses } from '../types';
import { TedModelBaseAction } from './baseAction';

// ------------------------------------
// Constants
// ------------------------------------
export const INITIALIZE_GUESS_GRID = 'INITIALIZE_GUESS_GRID';
export const UPDATE_GUESS = 'UPDATE_GUESS';

// ------------------------------------
// Actions
// ------------------------------------

export interface InitializeGuessGridPayload {
  guesses: Guesses,
}

export const initializeGuesses = (
  guesses: Guesses,
): any => {
  return {
    type: INITIALIZE_GUESS_GRID,
    payload: {
      guesses,
    },
  };
};

export interface UpdateGuessPayload {
  row: number;
  col: number;
  puzzleGuess: CellGuess;
}

export const updateGuess = (
  row: number,
  col: number,
  puzzleGuess: CellGuess,
): any => {
  return {
    type: UPDATE_GUESS,
    payload: {
      row,
      col,
      puzzleGuess,
    },
  };
};

// ------------------------------------
// Reducer
// ------------------------------------

const initialState: GuessesState = {
  guesses: null,
};

export const guessesStateReducer = (
  state: GuessesState = initialState,
  action: TedModelBaseAction<InitializeGuessGridPayload & UpdateGuessPayload>
): GuessesState => {
  switch (action.type) {
    case INITIALIZE_GUESS_GRID: {
      return { ...state, guesses: action.payload.guesses };
    }
    case UPDATE_GUESS: {
      const newState = cloneDeep(state);
      newState.guesses[action.payload.row][action.payload.col] = action.payload.puzzleGuess;
      return newState;
    }
    default:
      return state;
  }
};
