/* eslint-disable @typescript-eslint/no-var-requires */
import * as React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { loadPuzzlesMetadata } from '../controllers';

import Cell from './Cell';

export interface HomeProps {
  onLoadPuzzlesMetadata: () => any;
}

const Home = (props: HomeProps) => {

  React.useEffect(() => {
    props.onLoadPuzzlesMetadata();
  }, []);

  return (
    <div>
      pizza
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
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);

