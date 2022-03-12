import { setLetterAtLocation, setLettersNotAtLocation, setLettersNotInWord } from '../models';

export const cnSetLetterAtLocation = (
  index: number,
  letterAtLocation: string,
): any => {
  return (dispatch: any) => {
    dispatch(setLetterAtLocation(index, letterAtLocation));
  };
};

export const cnSetLettersNotAtLocation = (
  index: number,
  lettersNotAtLocation: string,
): any => {
  return (dispatch: any) => {
    dispatch(setLettersNotAtLocation(index, lettersNotAtLocation));
  };
};

export const cnSetLettersNotInWord = (
  lettersNotInWord: string,
): any => {
  return (dispatch: any) => {
    dispatch(setLettersNotInWord(lettersNotInWord));
  };
};



