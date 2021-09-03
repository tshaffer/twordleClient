import {
  TedCrossState,
  PuzzlesMap,
  PuzzlesMetadataMap,
  PuzzleExistsByFileNameMap,
} from '../types';

export const getPuzzlesMetadata = (state: TedCrossState): PuzzlesMetadataMap => {
  return state.puzzlesState.puzzlesMetadata;
};

export const getPuzzlesMap = (state: TedCrossState): PuzzlesMap => {
  return state.puzzlesState.puzzles;
};

export const getPuzzleExistsByFileNameMap = (state: TedCrossState): PuzzleExistsByFileNameMap => {
  return  state.puzzlesState.puzzlesByFileName;
};

// export const puzzleExists = (state: TedState, fileName: string): boolean => {
//   const puzzlesByFileName: PuzzleExistsByFileNameMap = state.puzzlesState.puzzlesByFileName;
//   // eslint-disable-next-line no-prototype-builtins
//   return puzzlesByFileName.hasOwnProperty(fileName);
// };
