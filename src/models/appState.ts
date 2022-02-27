import { AppState } from '../types';
import { TedModelBaseAction } from './baseAction';

// ------------------------------------
// Constants
// ------------------------------------
export const SET_USER_NAME = 'SET_USER_NAME';

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

// ------------------------------------
// Reducer
// ------------------------------------

const initialState: AppState = {
  userName: '',
};

export const appStateReducer = (
  state: AppState = initialState,
  action: TedModelBaseAction< SetUserNamePayload>
): AppState => {
  switch (action.type) {
    case SET_USER_NAME: {
      return { ...state, userName: action.payload.userName };
    }
    default:
      return state;
  }
};
