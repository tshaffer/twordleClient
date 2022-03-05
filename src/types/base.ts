export const serverUrl = 'http://localhost:8000';
// export const serverUrl = 'https://tedword.herokuapp.com';

export const apiUrlFragment = '/api/v1/';

export interface TedState {
  appState: AppState;
}

type StringArray = string[];
export interface AppState {
  charsAtExactLocation: string[],
  charsNotAtExactLocation: any[][],
  charsNotInWord: string[],
}
