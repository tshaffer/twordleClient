import { setCharAtLocation, addCharacterNotAtLocation } from '../models';

export const cnSetCharAtLocation = (
  index: number,
  charAtLocation: string,
): any => {
  return (dispatch: any) => {
    dispatch(setCharAtLocation(index, charAtLocation));
  };
};

export const cnAddCharacterNotAtLocation = (
  index: number,
  charNotAtLocation: string,
): any => {
  return (dispatch: any) => {
    dispatch(addCharacterNotAtLocation(index, charNotAtLocation));
  };
};


