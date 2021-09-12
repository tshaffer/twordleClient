import { cloneDeep } from 'lodash';
import { PuzzleMetadata, PuzzleEntity, PuzzlesState, CluesByDirection } from '../types';
import { TedModelBaseAction } from './baseAction';

// ------------------------------------
// Constants
// ------------------------------------
export const ADD_PUZZLE_METADATA = 'ADD_PUZZLE_METADATA';
export const ADD_PUZZLE = 'ADD_PUZZLE';
export const ADD_DISPLAYED_PUZZLE = 'ADD_DISPLAYED_PUZZLE';

// ------------------------------------
// Actions
// ------------------------------------

export interface AddPuzzleMetadataPayload {
  id: string;
  puzzleMetadata: PuzzleMetadata;
}

export const addPuzzleMetadata = (
  id: string,
  puzzleMetadata: PuzzleMetadata
): any => {
  return {
    type: ADD_PUZZLE_METADATA,
    payload: {
      id,
      puzzleMetadata,
    }
  };
};

export interface AddPuzzlePayload {
  id: string;
  puzzle: PuzzleEntity;
}

export const addPuzzle = (
  id: string,
  puzzle: PuzzleEntity
): any => {
  return {
    type: ADD_PUZZLE,
    payload: {
      id,
      puzzle,
    }
  };
};

export interface AddDisplayedPuzzlePayload {
  id: string;
  displayedPuzzle: CluesByDirection;
}

export const addDisplayedPuzzle = (
  id: string,
  displayedPuzzle: CluesByDirection
): any => {
  return {
    type: ADD_DISPLAYED_PUZZLE,
    payload: {
      id,
      displayedPuzzle,
    }
  };
};

// ------------------------------------
// Reducer
// ------------------------------------

const initialState: PuzzlesState = 
{
  puzzlesMetadata: {},
  puzzles: {},
  displayedPuzzles: {},
};

export const puzzlesStateReducer = (
  state: PuzzlesState = initialState,
  action: TedModelBaseAction<AddPuzzleMetadataPayload & AddPuzzlePayload & AddDisplayedPuzzlePayload>
): PuzzlesState => {
  switch (action.type) {
    case ADD_PUZZLE_METADATA: {
      const newState = cloneDeep(state) as PuzzlesState;
      newState.puzzlesMetadata[action.payload.id] = action.payload.puzzleMetadata;
      return newState;
    }
    case ADD_PUZZLE: {
      const newState = cloneDeep(state) as PuzzlesState;
      newState.puzzles[action.payload.id] = action.payload.puzzle;
      return newState;
    }
    case ADD_DISPLAYED_PUZZLE: {
      const newState = cloneDeep(state) as PuzzlesState;
      newState.displayedPuzzles[action.payload.id] = action.payload.displayedPuzzle;
      return newState;
    }
    default:
      return state;
  }
};
