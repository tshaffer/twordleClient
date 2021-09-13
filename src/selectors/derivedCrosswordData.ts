import { Clues, CluesByDirection, GridSpec, TedCrossState } from '../types';

export const getSize = (state: TedCrossState): number => {
  return state.derivedCrosswordData.size;
};

export const getGridData = (state: TedCrossState): GridSpec => {
  return state.derivedCrosswordData.gridData;
};

export const getCrosswordClues = (state: TedCrossState): CluesByDirection | null => {
  return state.derivedCrosswordData.crosswordClues;
};

export const getClues = (state: TedCrossState): Clues => {
  return state.derivedCrosswordData.clues;
};
