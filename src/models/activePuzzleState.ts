import { ActivePuzzle, ActivePuzzleState } from '../types';
import { TedModelBaseAction } from './baseAction';

// ------------------------------------
// Constants
// ------------------------------------
export const SET_ACTIVE_PUZZLE = 'SET_ACTIVE_PUZZLE';

// ------------------------------------
// Actions
// ------------------------------------

export interface SetActivePuzzleStatePayload {
  activePuzzle: ActivePuzzle | null;
}

export const setActivePuzzle = (
  activePuzzle: ActivePuzzle | null,
): any => {
  return {
    type: SET_ACTIVE_PUZZLE,
    payload: {
      activePuzzle,
    },
  };
};

// ------------------------------------
// Reducer
// ------------------------------------

const initialState: ActivePuzzleState = {
  activePuzzle: null,
};

export const activePuzzleStateReducer = (
  state: ActivePuzzleState = initialState,
  action: TedModelBaseAction<SetActivePuzzleStatePayload>
): ActivePuzzleState => {
  switch (action.type) {
    case SET_ACTIVE_PUZZLE: {
      return { ...state, activePuzzle: action.payload.activePuzzle };
    }
    default:
      return state;
  }
};
