import {
  TedCrossState,
  PuzzlesMap,
  PuzzlesMetadataMap,
} from '../types';

export const getPuzzlesMetadata = (state: TedCrossState): PuzzlesMetadataMap => {
  return state.puzzlesState.puzzlesMetadata;
};

export const getPuzzlesMap = (state: TedCrossState): PuzzlesMap => {
  return state.puzzlesState.puzzles;
};

