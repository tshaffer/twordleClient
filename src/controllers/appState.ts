import { setCharAtLocation, setCharsNotAtLocation } from '../models';

export const cnSetCharAtLocation = (
  index: number,
  charAtLocation: string,
): any => {
  return (dispatch: any) => {
    dispatch(setCharAtLocation(index, charAtLocation));
  };
};

export const cnSetCharsNotAtLocation = (
  index: number,
  charsNotAtLocation: string,
): any => {
  return (dispatch: any) => {
    dispatch(setCharsNotAtLocation(index, charsNotAtLocation));
  };
};


