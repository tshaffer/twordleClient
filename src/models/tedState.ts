import { TedState } from '../types';
import { TedModelBaseAction } from './baseAction';

// ------------------------------------
// Constants
// ------------------------------------
export const SET_TEST_PROP = 'SET_TEST_PROP';

// ------------------------------------
// Actions
// ------------------------------------

export interface SetTedStatePayload {
  testProp: string;
}

export const setTestProp = (
  testProp: string,
): any => {
  return {
    type: SET_TEST_PROP,
    payload: {
      testProp,
    },
  };
};

// ------------------------------------
// Reducer
// ------------------------------------

const initialState: TedState = {
  testProp: '',
};

export const tedStateReducer = (
  state: TedState = initialState,
  action: TedModelBaseAction<SetTedStatePayload>
): TedState => {
  switch (action.type) {
    case SET_TEST_PROP: {
      return { ...state, testProp: action.payload.testProp };
    }
    default:
      return state;
  }
};
