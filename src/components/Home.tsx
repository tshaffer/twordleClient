/* eslint-disable @typescript-eslint/no-var-requires */
import * as React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { loadPuzzle, loadPuzzlesMetadata } from '../controllers';
import { Guess, PuzzleMetadata } from '../types';

import { setPuzzleId, updateGuess } from '../models';

import NewGames from './NewGames';
import Crossword from './Crossword';

export interface HomeProps {
  onLoadPuzzlesMetadata: () => any;
  onSetPuzzleId: (puzzleId: string) => any;
  onLoadPuzzle: (puzzleId: string) => any;
  onUpdateGuess: (row: number, col: number, puzzleGuess: Guess) => any;
}

const Home = (props: HomeProps) => {

  React.useEffect(() => {
    props.onLoadPuzzlesMetadata();
  }, []);

  const handleOpenPuzzle = (puzzleMetadata: PuzzleMetadata) => {
    props.onSetPuzzleId(puzzleMetadata.id);
    props.onLoadPuzzle(puzzleMetadata.id);
  };

  const handleUpdateGuess = (row: number, col: number, char: string) => {
    props.onUpdateGuess(row, col, {
      value: char,
      guessIsRemote: false,
      remoteUser: null,
    });
  };

  return (
    <div>
      <div>
        <NewGames
          onSelectPuzzle={handleOpenPuzzle}
        />
      </div>
      <Crossword
        onUpdateGuess={handleUpdateGuess}
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
    onUpdateGuess: updateGuess,
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
