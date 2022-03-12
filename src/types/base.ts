export const serverUrl = 'http://localhost:8000';
// export const serverUrl = 'https://tedword.herokuapp.com';

export const apiUrlFragment = '/api/v1/';

export interface TedState {
  appState: AppState;
}

type StringArray = string[];
export interface AppState {
  charsAtExactLocation: string[],         // each item in the array represents the correct character for that position
  charsNotAtExactLocation: string[],      // each item in the array is a string of characters, where each character is in the answer but not in that location
  charsNotInWord: string[],
}
