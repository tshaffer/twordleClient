/* eslint-disable @typescript-eslint/no-var-requires */
import * as React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

export interface CellProps {
}

const Cell = (props: CellProps) => {

  React.useEffect(() => {
    init();
  }, []);

  const init = () => {
    console.log('cell init invoked');
  };

  return (
    <div>cell</div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Cell);

