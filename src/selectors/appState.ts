import { TedState } from '../types/base';

export const getUserName = (state: TedState): string => {
  return state.appState.userName;
};
