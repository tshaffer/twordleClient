export const serverUrl = 'http://localhost:8000';
// export const serverUrl = 'https://tedword.herokuapp.com';

export const apiUrlFragment = '/api/v1/';

export interface TedState {
  appState: AppState;
}

export interface AppState {
  lettersAtExactLocation: string[],         // each item in the array represents the correct letter for that position
  lettersNotAtExactLocation: string[],      // each item in the array is a string of letters, where each letter is in the answer but not in that location
  lettersNotInWord: string,
}
