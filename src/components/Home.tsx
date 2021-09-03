/* eslint-disable @typescript-eslint/no-var-requires */
import * as React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { loadPuzzle, loadPuzzlesMetadata } from '../controllers';
import { PuzzleMetadata  } from '../types';

import { setPuzzleId } from '../models';

// import Cell from './Cell';
import NewGames from './NewGames';

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


  return (
    <div>
      <NewGames
        onSelectPuzzle={handleOpenPuzzle}
      />
    </div>
  );

  // return (
  //   <div>
  //     pizza
  //     <div style={{ margin: 0, padding: 0, position: 'relative' }}>
  //       <svg viewBox="0 0 100 100">
  //         <rect
  //           x={0}
  //           y={0}
  //           width={100}
  //           height={100}
  //           fill={'rgb(0,0,0)'}
  //         />
  //         <Cell
  //           row={0}
  //           col={0}
  //           guess={'x'}
  //           number={'1'}
  //           highlight={false}
  //         />
  //         <Cell
  //           row={0}
  //           col={1}
  //           guess={'y'}
  //           number={'2'}
  //           highlight={true}
  //         />
  //       </svg>

  //     </div>

  //   </div>
  // );
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

