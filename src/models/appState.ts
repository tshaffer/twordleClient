import { AppState } from '../types';
import { TedModelBaseAction } from './baseAction';

// ------------------------------------
// Constants
// ------------------------------------
export const SET_UI_STATE = 'SET_UI_STATE';
export const SET_USER_NAME = 'SET_USER_NAME';
export const SET_PUZZLE_ID = 'SET_PUZZLE_ID';
export const SET_BOARD_ID = 'SET_BOARD_ID';
export const SET_FILE_UPLOAD_STATUS = 'SET_FILE_UPLOAD_STATUS';

// ------------------------------------
// Actions
// ------------------------------------

export interface SetUserNamePayload {
  userName: string;
}

export const setUserName = (
  userName: string,
): any => {
  return {
    type: SET_USER_NAME,
    payload: {
      userName,
    },
  };
};

export interface SetPuzzleIdPayload {
  puzzleId: string;
}

export const setPuzzleId = (
  puzzleId: string,
): any => {
  return {
    type: SET_PUZZLE_ID,
    payload: {
      puzzleId,
    },
  };
};

export interface SetBoardIdPayload {
  boardId: string;
}

export const setBoardId = (
  boardId: string,
): any => {
  return {
    type: SET_BOARD_ID,
    payload: {
      boardId,
    },
  };
};

// ------------------------------------
// Reducer
// ------------------------------------

const initialState: AppState = {
  puzzleId: '',
};

export const appStateReducer = (
  state: AppState = initialState,
  action: TedModelBaseAction< SetUserNamePayload & SetPuzzleIdPayload & SetBoardIdPayload>
): AppState => {
  switch (action.type) {
    case SET_PUZZLE_ID: {
      return { ...state, puzzleId: action.payload.puzzleId };
    }
    default:
      return state;
  }
};
