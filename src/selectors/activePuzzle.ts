import { isNil } from 'lodash';
import {
  TedCrossState,
  DisplayedPuzzle,
  GridDataState,
  GuessesGrid,
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

export const getGuesses = (state: TedCrossState): GuessesGrid | null => {
  if (isNil(state.guessesState.guessesGrid)) {
    return [];

  } else {
    return state.guessesState.guessesGrid;
  }
};


