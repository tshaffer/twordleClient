import axios from 'axios';
import { TedState } from '../types';
import { setLetterAtLocation, setLettersInWordAtAnyLocation, setLettersNotAtLocation, setLettersNotInWord, setPossibleWords } from '../models';
import { getLettersAtExactLocation, getLettersInWordAnyLocation, getLettersNotAtExactLocation, getLettersNotInWord } from '../selectors';

import { apiUrlFragment, serverUrl } from '../index';
import { isNil } from 'lodash';

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

export const cnListWords = (): any => {
  return (dispatch: any, getState: any) => {

    const candidateLettersAtLocation: string[][] = [];

    const tedState: TedState = getState();
    const lettersAtExactLocation: string[] = getLettersAtExactLocation(tedState);
    const lettersNotAtExactLocation: string[] = getLettersNotAtExactLocation(tedState);
    const lettersNotInWord: string = getLettersNotInWord(tedState);
    const arrayOfLettersNotInWord: string[] = lettersNotInWord.split('');

    for (let i = 0; i < 5; i++) {
      candidateLettersAtLocation[i] = [];

      console.log('Candidate letters at location ' + i);

      // check to see if there's an exact letter at this location
      if (lettersAtExactLocation[i] !== '') {

        candidateLettersAtLocation[i].push(lettersAtExactLocation[i]);

        console.log('Exact letter at location: ' + candidateLettersAtLocation[i]);

      } else {

        // initialize to include all characters
        for (let j = 0; j < 26; j++) {
          candidateLettersAtLocation[i].push(String.fromCharCode(j + 97));
        }

        let candidateLettersAtThisLocation: string[] = candidateLettersAtLocation[i];

        // eliminate lettersNotInWord
        for (let j = 0; j < arrayOfLettersNotInWord.length; j++) {
          const letterNotInWord: string = arrayOfLettersNotInWord[j];
          candidateLettersAtThisLocation = candidateLettersAtThisLocation.filter(item => item !== letterNotInWord);
        }
        console.log(candidateLettersAtThisLocation);


        // eliminate lettersNotAtExactLocation
        const lettersNotAtThisLocation: string = lettersNotAtExactLocation[i];
        if (!isNil(lettersNotAtThisLocation)) {
          const arrayOfLettersNotAtThisLocation: string[] = lettersNotAtThisLocation.split('');
          for (let j = 0; j < arrayOfLettersNotAtThisLocation.length; j++) {
            const letterNotAtThisLocation: string = arrayOfLettersNotAtThisLocation[j];
            candidateLettersAtThisLocation = candidateLettersAtThisLocation.filter(item => item !== letterNotAtThisLocation);
          }
        }
        console.log(candidateLettersAtThisLocation);

        candidateLettersAtLocation[i] = candidateLettersAtThisLocation;
      }
    }

    const lettersSomewhereInWord: string[] = [];
    lettersNotAtExactLocation.forEach((lettersNotAtThisLocation: string) => {
      if (!isNil(lettersNotAtThisLocation)) {
        const lettersNotAtThisLocationArray = lettersNotAtThisLocation.split('');
        if (!isNil(lettersNotAtThisLocationArray)) {
          lettersNotAtThisLocationArray.forEach((letterNotAtThisLocation: string) => {
            if (lettersSomewhereInWord.indexOf(letterNotAtThisLocation)) {
              lettersSomewhereInWord.push(letterNotAtThisLocation)
            }
          });
        }
      }
    });

    console.log('lettersSomewhereInWord');
    console.log(lettersSomewhereInWord);

    const path = serverUrl + apiUrlFragment + 'getWords';

    const getWordsRequestBody: any = {
      candidateLettersAtLocation,
      lettersSomewhereInWord,
    };
    return axios.post(
      path,
      getWordsRequestBody,
    ).then((response) => {
      console.log(response);
      dispatch(setPossibleWords(response.data.words));
    }).catch((error) => {
      console.log('error');
      console.log(error);
    });
  };
};

export const cnSetLettersInWordAtAnyLocation = (
  lettersInWordAtAnyLocation: string,
): any => {
  return (dispatch: any) => {
    dispatch(setLettersInWordAtAnyLocation(lettersInWordAtAnyLocation));
  };
};

export const candidateWordIncludesLetterInWordAtAnyLocation = (lettersInWordAtAnyLocationAsArray: string[], candidateWord: string): boolean => {
  for (const letterInWordAtAnyLocation of lettersInWordAtAnyLocationAsArray) {
    if (candidateWord.includes(letterInWordAtAnyLocation)) {
      return true;
    }
  }
  return false;
};

export const candidateWordIncludesDuplicateLetterInWordAtAnyLocation = (lettersInWordAtAnyLocationAsArray: string[], candidateWord: string): boolean => {
  for (const letterInWordAtAnyLocation of lettersInWordAtAnyLocationAsArray) {
    const firstIndex = candidateWord.indexOf(letterInWordAtAnyLocation);
    const lastIndex = candidateWord.lastIndexOf(letterInWordAtAnyLocation);
    const result = firstIndex !== lastIndex && firstIndex !== -1;
    if (result) {
      return true;
    }
  }
  return false;
};


export const cnListOtherWords = (): any => {
  return (dispatch: any, getState: any) => {
    console.log('cnListOtherWords');

    const candidateWords: string[] = [];

    const commonLetters: string[] = ['e', 't', 'a', 'i', 'o', 'n', 's', 'h', 'r'];

    const lettersInWordAtAnyLocation = getLettersInWordAnyLocation(getState());
    const lettersInWordAtAnyLocationAsArray: string[] = lettersInWordAtAnyLocation.split('');

    const candidateLetters: string[] = lettersInWordAtAnyLocationAsArray.concat(commonLetters);

    for (let clalIndex0 = 0; clalIndex0 < candidateLetters.length; clalIndex0++) {
      const clal0 = candidateLetters[clalIndex0];
      for (let clalIndex1 = 0; clalIndex1 < candidateLetters.length; clalIndex1++) {
        const clal1 = candidateLetters[clalIndex1];
        for (let clalIndex2 = 0; clalIndex2 < candidateLetters.length; clalIndex2++) {
          const clal2 = candidateLetters[clalIndex2];
          for (let clalIndex3 = 0; clalIndex3 < candidateLetters.length; clalIndex3++) {
            const clal3 = candidateLetters[clalIndex3];
            for (let clalIndex4 = 0; clalIndex4 < candidateLetters.length; clalIndex4++) {
              const clal4 = candidateLetters[clalIndex4];

              const candidateWord: string = clal0 + clal1 + clal2 + clal3 + clal4;

              if (candidateWordIncludesLetterInWordAtAnyLocation(lettersInWordAtAnyLocationAsArray, candidateWord)) {
                if (!candidateWordIncludesDuplicateLetterInWordAtAnyLocation(lettersInWordAtAnyLocationAsArray, candidateWord)) {
                  candidateWords.push(candidateWord);
                }
              }
            }
          }
        }
      }
    }

    console.log(candidateWords);
    console.log(candidateWords.length);
  };
};

