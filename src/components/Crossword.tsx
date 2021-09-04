/* eslint-disable @typescript-eslint/no-var-requires */
import * as React from 'react';
import { useState } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { DisplayedPuzzle } from '../types';

import Cell from './Cell';
import { getActivePuzzle } from '../selectors';
import { createGridData } from '../utilities';

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

  React.useEffect(() => {

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
