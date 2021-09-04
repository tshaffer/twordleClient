/* eslint-disable @typescript-eslint/no-var-requires */
import * as React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { loadPuzzle, loadPuzzlesMetadata } from '../controllers';
import { PuzzleMetadata } from '../types';

import { setPuzzleId } from '../models';

import NewGames from './NewGames';
import Crossword from './Crossword';

export interface HomeProps {
  onLoadPuzzlesMetadata: () => any;
  onSetPuzzleId: (puzzleId: string) => any;
  onLoadPuzzle: (puzzleId: string) => any;
}

const Home = (props: HomeProps) => {

  React.useEffect(() => {
    props.onLoadPuzzlesMetadata();
  }, []);

  const handleOpenPuzzle = (puzzleMetadata: PuzzleMetadata) => {
    props.onSetPuzzleId(puzzleMetadata.id);
    props.onLoadPuzzle(puzzleMetadata.id);
  };

  const handleCellChange = (row: number, col: number, char: string) => {
    console.log('Home#handleCellChange: ', row, col, char);
  };

  return (
    <div>
      <div>
        <NewGames
          onSelectPuzzle={handleOpenPuzzle}
        />
      </div>
      <Crossword
        onCellChange={handleCellChange}
      />
    </div>
  );
};

function mapStateToProps(state: any) {
  return {
  };
}

const mapDispatchToProps = (dispatch: any) => {
  return bindActionCreators({
    onLoadPuzzlesMetadata: loadPuzzlesMetadata,
    onLoadPuzzle: loadPuzzle,
    onSetPuzzleId: setPuzzleId,
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
