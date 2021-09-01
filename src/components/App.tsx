/* eslint-disable @typescript-eslint/no-var-requires */
import * as React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Cell from './Cell';

export interface AppProps {
}

const App = (props: AppProps) => {

  React.useEffect(() => {
    init();
  }, []);

  const init = () => {
    console.log('app init invoked');
  };

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
            fill={'rgb(128,128,128)'}
          />
          <Cell
            row={0}
            col={0}
            guess={'x'}
            number={'1'}
            highlight={false}
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
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

