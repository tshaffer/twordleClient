/* eslint-disable @typescript-eslint/no-var-requires */
import * as React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Cell from './Cell';

export interface CrosswordProps {
}

const Crossword = (props: CrosswordProps) => {

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
  };
}

const mapDispatchToProps = (dispatch: any) => {
  return bindActionCreators({
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Crossword);
