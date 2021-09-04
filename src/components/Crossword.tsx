/* eslint-disable @typescript-eslint/no-var-requires */
import * as React from 'react';
import { useState } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { DisplayedPuzzle } from '../types';

import Cell from './Cell';
import { getActivePuzzle } from '../selectors';

export interface CrosswordProps {
  activePuzzle: DisplayedPuzzle;
}

const Crossword = (props: CrosswordProps) => {

  const [size, setSize] = useState(null);
  const [gridData, setGridData] = useState(null);
  const [clues, setClues] = useState(null);
  const [focused, setFocused] = useState(false);
  const [focusedRow, setFocusedRow] = useState(0);
  const [focusedCol, setFocusedCol] = useState(0);
  const [currentDirection, setCurrentDirection] = useState('across');
  const [currentNumber, setCurrentNumber] = useState('1');
  const [bulkChange, setBulkChange] = useState(null);
  const [checkQueue, setCheckQueue] = useState([]);
  const [crosswordCorrect, setCrosswordCorrect] = useState(false);

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

  React.useEffect(() => {

    if (Object.keys(props.activePuzzle.across).length > 0) {
      debugger;
      
    }
    // console.log('Crossword:useEffect');
    // console.log(tedGuesses);

    // eslint-disable-next-line no-shadow
    const { size, gridData, clues } = createGridData(props.activePuzzle);

    // let loadedCorrect;

    setSize(size);
    setGridData(gridData);
    setClues(clues);

    // Should we start with 1-across highlighted/focused?

    // TODO: track input-field focus so we don't draw highlight when we're not
    // really focused, *and* use first actual clue (whether across or down?)
    // if (onFocusedCellChange) {
    //   onFocusedCellChange(0, 0, 'across');
    // }
    setFocusedRow(0);
    setFocusedCol(0);
    setCurrentDirection('across');
    setCurrentNumber('1');

    // refreshCompletedAnswers(gridData);

    setBulkChange(null);

    // trigger any "loaded correct" guesses...
    // if (loadedCorrect && loadedCorrect.length > 0 && onLoadedCorrect) {
    //   onLoadedCorrect(loadedCorrect);
    // }

  }, [props.activePuzzle]);


  function calculateExtents(data, direction) {
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

  function createEmptyGrid(size) {
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


  const createGridData = (data: DisplayedPuzzle) => {

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

  return (
    <div>
      <div style={{ margin: 0, padding: 0, position: 'relative' }}>
        <svg viewBox="0 0 100 100">
          <rect
            x={0}
            y={0}
            width={100}
            height={100}
            fill={'rgb(0,0,0)'}
          />
          <Cell
            row={0}
            col={0}
            guess={'x'}
            number={'1'}
            highlight={false}
          />
          <Cell
            row={0}
            col={1}
            guess={'y'}
            number={'2'}
            highlight={true}
          />
        </svg>
      </div>
    </div >
  );
};

function mapStateToProps(state: any) {
  return {
    activePuzzle: getActivePuzzle(state),
  };
}

const mapDispatchToProps = (dispatch: any) => {
  return bindActionCreators({
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Crossword);
