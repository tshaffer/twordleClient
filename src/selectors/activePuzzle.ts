import { isNil } from 'lodash';
import {
  TedCrossState,
  DisplayedPuzzle,
  GridDataState,
  Guesses,
} from '../types';

export const getActivePuzzle = (state: TedCrossState): DisplayedPuzzle => {
  if (isNil(state.activePuzzleState.activePuzzle)) {
    return {
      across: {},
      down: {},
    }
  } else {
    return state.activePuzzleState.activePuzzle;
  }
};

export const getGridDataState = (state: TedCrossState): GridDataState => {
  if (isNil(state.activePuzzleState.gridDataState)) {
    return {
      size: 0,
      gridData: [],
      clues: {
        across: [],
        down: [],
      }
    };
  } else {
    return state.activePuzzleState.gridDataState;
  }
};

export const getGuesses = (state: TedCrossState): Guesses | null => {
  if (isNil(state.guessesState.guesses)) {
    return [];

  } else {
    return state.guessesState.guesses;
  }
};


