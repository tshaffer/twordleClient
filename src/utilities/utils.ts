import { cloneDeep } from 'lodash';
import { CellGuess, DisplayedPuzzle, Guesses, GuessesInRow } from '../types';

const directionInfo = {
  across: {
    primary: 'col',
    orthogonal: 'row',
  },
  down: {
    primary: 'row',
    orthogonal: 'col',
  },
};

export const bothDirections = Object.keys(directionInfo);

export function isAcross(direction) {
  return direction === 'across';
}

export function otherDirection(direction) {
  return isAcross(direction) ? 'down' : 'across';
}

export function calculateExtents(data, direction) {
  const dir = directionInfo[direction];
  let primaryMax = 0;
  let orthogonalMax = 0;

  Object.entries(data[direction]).forEach(([i, info]) => {
    const primary = info[dir.primary] + (info as any).answer.length - 1;
    if (primary > primaryMax) {
      primaryMax = primary;
    }

    const orthogonal = info[dir.orthogonal];
    if (orthogonal > orthogonalMax) {
      orthogonalMax = orthogonal;
    }
  });

  return {
    [dir.primary]: primaryMax,
    [dir.orthogonal]: orthogonalMax,
  };
}

const emptyCellData = {
  used: false,
  number: null,
  answer: '',
  guess: '',
  guessIsRemote: false,
  locked: false,
  // row: r,
  // col: c,
  across: null,
  down: null,
  inFullAnswer: false,
};

export function createEmptyGrid(size) {
  const gridData = Array(size);
  // Rather than [x][y] in column-major order, the cells are indexed as
  // [row][col] in row-major order.
  for (let r = 0; r < size; r++) {
    gridData[r] = Array(size);
    for (let c = 0; c < size; c++) {
      gridData[r][c] = {
        ...emptyCellData,
        row: r,
        col: c,
      };
    }
  }

  return gridData;
}

// sort helper for clues...
function byNumber(a, b) {
  const aNum = Number.parseInt(a.number, 10);
  const bNum = Number.parseInt(b.number, 10);
  return aNum - bNum;
}

function fillClues(gridData, clues, data, direction) {
  const dir = directionInfo[direction];

  Object.entries(data[direction]).forEach(([number, info]) => {
    const { row: rowStart, col: colStart, clue, answer } = info as any;
    for (let i = 0; i < answer.length; i++) {
      const row = rowStart + (dir.primary === 'row' ? i : 0);
      const col = colStart + (dir.primary === 'col' ? i : 0);
      const cellData = gridData[row][col];

      // TODO?: check to ensure the answer is the same if it's already set?
      cellData.used = true;
      cellData.answer = answer[i];
      cellData[direction] = number;

      if (i === 0) {
        // TODO?: check to ensure the number is the same if it's already set?
        cellData.number = number;
      }
    }

    clues[direction].push({ number, clue });
  });

  clues[direction].sort(byNumber);
}

export const createGridData = (data: DisplayedPuzzle) => {

  const acrossMax = calculateExtents(data, 'across');
  const downMax = calculateExtents(data, 'down');

  const size =
    Math.max(...Object.values(acrossMax), ...Object.values(downMax)) + 1;

  const gridData = createEmptyGrid(size);

  // Now fill with answers... and also collect the clues
  const clues = {
    across: [],
    down: [],
  };

  fillClues(gridData, clues, data, 'across');
  fillClues(gridData, clues, data, 'down');

  return { size, gridData, clues };
};

export const createEmptyGuessesGrid = (displayedPuzzle: DisplayedPuzzle): Guesses => {

  const rowCount = calculateExtents(displayedPuzzle, 'across');
  const colCount = calculateExtents(displayedPuzzle, 'down');

  const size =
    Math.max(...Object.values(rowCount), ...Object.values(colCount)) + 1;

  const emptyCellGuess: CellGuess = {
    guess: '',
    guessIsRemote: false,
    remoteUser: null,
  };
  const guesses: Guesses = [];
  for (let row = 0; row < size; row++) {
    const guessesInRow: GuessesInRow = [];
    for (let col = 0; col < size; col++) {
      guessesInRow.push(cloneDeep(emptyCellGuess));
    }
    guesses.push(guessesInRow);
  }
  return guesses;
};


