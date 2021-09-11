import { cloneDeep, isNil } from 'lodash';
import { DisplayedPuzzle, ActivePuzzleState, CellGuess, Guesses, GuessesInRow, GridDataState } from '../types';
import { TedModelBaseAction } from './baseAction';
import { createEmptyGuessesGrid } from '../utilities';

// ------------------------------------
// Constants
// ------------------------------------
export const SET_ACTIVE_PUZZLE = 'SET_ACTIVE_PUZZLE';
export const SET_GRID_DATA_STATE = 'SET_GRID_DATA_STATE';
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

export interface SetGridDataStatePayload {
  gridDataState: GridDataState | null;
}

export const setGridDataState = (
  gridDataState: GridDataState | null,
): any => {
  return {
    type: SET_GRID_DATA_STATE,
    payload: {
      gridDataState,
    },
  };
};

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

const initialState: ActivePuzzleState = {
  activePuzzle: null,
  gridDataState: null,
  guesses: null,
};

export const activePuzzleStateReducer = (
  state: ActivePuzzleState = initialState,
  action: TedModelBaseAction<SetActivePuzzleStatePayload & SetGridDataStatePayload & InitializeGuessGridPayload & UpdateGuessPayload>
): ActivePuzzleState => {
  switch (action.type) {
    case SET_ACTIVE_PUZZLE: {
      return { ...state, activePuzzle: action.payload.activePuzzle };
    }
    case SET_GRID_DATA_STATE: {
      return { ...state, gridDataState: action.payload.gridDataState };
    }
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
