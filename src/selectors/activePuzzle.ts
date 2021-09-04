import { isNil } from 'lodash';
import {
  TedCrossState,
  DisplayedPuzzle,
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

