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

