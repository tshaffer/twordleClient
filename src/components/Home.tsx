import * as React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

export interface HomeProps {
}

const Home = (props: HomeProps) => {

  React.useEffect(() => {
    console.log('Home useEffect invoked');
  }, []);

  return (
    <div>twordle home</div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Home);
