import axios from 'axios';
import { CluesByDirection, ParsedClue, PuzzleEntity, PuzzleMetadata, PuzzleSpec, GuessesGrid, DerivedCrosswordData } from '../types';
import { addPuzzle, addPuzzleMetadata, setGridData, setPuzzleId } from '../models';

import { apiUrlFragment, serverUrl } from '../index';
import { initializeGuesses } from '../models';
import { setCrosswordClues } from '../models';
import { createEmptyGuessesGrid, createGridData } from '../utilities';
import { setClues, setSize } from '../models';

export const loadPuzzlesMetadata = () => {
  return (dispatch: any) => {
    const path = serverUrl + apiUrlFragment + 'allPuzzlesMetadata';

    return axios.get(path)
      .then((puzzlesMetadataResponse: any) => {
        const puzzlesMetadata: PuzzleMetadata[] = (puzzlesMetadataResponse as any).data;
        // TEDTODO - add all in a single call
        for (const puzzleMetadata of puzzlesMetadata) {
          dispatch(addPuzzleMetadata(puzzleMetadata.id, puzzleMetadata));
        }
        if (puzzlesMetadata.length > 0) {
          dispatch(setPuzzleId(puzzlesMetadata[0].id));
        }
      });
  };
};

export const loadPuzzle = (id: string) => {
  return ((dispatch: any, getState: any): any => {
    const path = serverUrl + apiUrlFragment + 'puzzle?id=' + id;

    return axios.get(path)
      .then((puzzleResponse: any) => {
        const puzzleEntity: PuzzleEntity = puzzleResponse.data as PuzzleEntity;
        dispatch(addPuzzle(id, puzzleEntity));

        const derivedCrosswordData: DerivedCrosswordData = generateDerivedCrosswordData(puzzleEntity);

        // not the correct way to do this, in my opinion. it should be done when the user chooses
        // to play the game
        dispatch(setCrosswordClues(derivedCrosswordData.crosswordClues));
        dispatch(setSize(derivedCrosswordData.size));
        dispatch(setGridData(derivedCrosswordData.gridData));
        dispatch(setClues(derivedCrosswordData.clues));
        
        const guesses = createEmptyGuessesGrid(derivedCrosswordData.crosswordClues);
        dispatch(initializeGuesses(guesses));
      });
  });
};

export const generateDerivedCrosswordData = (puzzleEntity: PuzzleEntity): DerivedCrosswordData => {
  const crosswordClues: CluesByDirection = buildDisplayedPuzzle(puzzleEntity);
  const { size, gridData, clues } = createGridData(crosswordClues);
  return {
    size,
    gridData,
    crosswordClues,
    clues, 
  };
};

export const buildDisplayedPuzzle = (puzzleEntity: PuzzleEntity): CluesByDirection => {
  
  const displayedPuzzle: CluesByDirection = {
    across: {},
    down: {},
  };

  const parsedClues: ParsedClue[] = puzzleEntity.parsedClues;
  for (const parsedClue of parsedClues) {
    const { col, isAcross, row, solution, text } = parsedClue;
    if (isAcross) {
      displayedPuzzle.across[parsedClue.number] = {
        clue: text,
        answer: solution,
        row,
        col,
      };
    } else {
      displayedPuzzle.down[parsedClue.number] = {
        clue: text,
        answer: solution,
        row,
        col,
      };
    }
  }
  
  return displayedPuzzle;
};
