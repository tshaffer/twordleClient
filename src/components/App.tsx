/* eslint-disable @typescript-eslint/no-var-requires */
import * as React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Home from './Home';


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
    <Home></Home>
  )
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

