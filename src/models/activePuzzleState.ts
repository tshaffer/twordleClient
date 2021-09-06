import { cloneDeep, isNil } from 'lodash';
import { DisplayedPuzzle, ActivePuzzleState, CellGuess, Guesses, GuessesInRow } from '../types';
import { TedModelBaseAction } from './baseAction';
import { createEmptyGuessesGrid } from '../utilities';

// ------------------------------------
// Constants
// ------------------------------------
export const SET_ACTIVE_PUZZLE = 'SET_ACTIVE_PUZZLE';
export const INITIALIZE_GUESS_GRID = 'INITIALIZE_GUESS_GRID';
export const UPDATE_GUESS = 'UPDATE_GUESS';

// ------------------------------------
// Actions
// ------------------------------------

export interface SetActivePuzzleStatePayload {
  activePuzzle: DisplayedPuzzle | null;
}

export const setActivePuzzle = (
  activePuzzle: DisplayedPuzzle | null,
): any => {
  return {
    type: SET_ACTIVE_PUZZLE,
    payload: {
      activePuzzle,
    },
  };
};

export interface InitializeGuessGridPayload {
}

export const initializeGuess = (
): any => {
  return {
    type: INITIALIZE_GUESS_GRID,
    payload: {
      row,
      col,
      puzzleGuess,
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

const initialState: ActivePuzzleState = {
  activePuzzle: null,
  guesses: null,
};

export const activePuzzleStateReducer = (
  state: ActivePuzzleState = initialState,
  action: TedModelBaseAction<SetActivePuzzleStatePayload & UpdateGuessPayload>
): ActivePuzzleState => {
  switch (action.type) {
    case SET_ACTIVE_PUZZLE: {
      return { ...state, activePuzzle: action.payload.activePuzzle };
    }
    case UPDATE_GUESS: {
      const newState = cloneDeep(state);
      let guesses = newState.guesses;
      if (isNil(guesses)) {
        guesses = createEmptyGuessesGrid(state.activePuzzle);
      }
      guesses[action.payload.row][action.payload.col] = action.payload.puzzleGuess;
      return newState;
    }
    default:
      return state;
  }
};
