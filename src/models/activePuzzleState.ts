import { CluesByDirection, ActiveCrosswordState, GridDataState } from '../types';
import { TedModelBaseAction } from './baseAction';

// ------------------------------------
// Constants
// ------------------------------------
export const SET_ACTIVE_PUZZLE = 'SET_ACTIVE_PUZZLE';
export const SET_GRID_DATA_STATE = 'SET_GRID_DATA_STATE';

// ------------------------------------
// Actions
// ------------------------------------

export interface SetActivePuzzleStatePayload {
  activePuzzle: CluesByDirection | null;
}

export const setActivePuzzle = (
  activePuzzle: CluesByDirection | null,
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


// ------------------------------------
// Reducer
// ------------------------------------

const initialState: ActiveCrosswordState = {
  crosswordClues: null,
  gridDataState: null,
};

export const activePuzzleStateReducer = (
  state: ActiveCrosswordState = initialState,
  action: TedModelBaseAction<SetActivePuzzleStatePayload & SetGridDataStatePayload>
): ActiveCrosswordState => {
  switch (action.type) {
    case SET_ACTIVE_PUZZLE: {
      return { ...state, crosswordClues: action.payload.activePuzzle };
    }
    case SET_GRID_DATA_STATE: {
      return { ...state, gridDataState: action.payload.gridDataState };
    }
    default:
      return state;
  }
};
