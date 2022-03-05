/* eslint-disable @typescript-eslint/no-var-requires */
import * as React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
// import Home from './Home';

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export interface AppProps {
}

const App = (props: AppProps) => {

  React.useEffect(() => {
    init();
  }, []);

  const init = () => {
    console.log('app init invoked');
  };

  const handleWordNotAtIndex0Changed = (event: any) => {
    console.log('new value');
    console.log(event.target.value);
  };


  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      Letters in the word at their exact location:
      <TextField
        id="inWordIndex0"
        style={{ width: '36px' }}
        inputProps={{ maxLength: 1 }}
        variant="outlined"
      />
      <TextField
        id="inWordIndex1"
        style={{ width: '36px' }}
        inputProps={{ maxLength: 1 }}
        variant="outlined"
      />
      <TextField
        id="inWordIndex2"
        inputProps={{ maxLength: 1 }}
        variant="outlined"
        style={{ width: '36px' }}
      />
      <TextField
        id="inWordIndex3"
        inputProps={{ maxLength: 1 }}
        style={{ width: '36px' }}
        variant="outlined"
      />
      <TextField
        id="inWordIndex4"
        inputProps={{ maxLength: 1 }}
        style={{ width: '36px' }}
        variant="outlined"
      />
      <br />
      Letters in the word at known non-location:
      <TextField
        id="inWordNotAtIndex0"
        style={{ width: '74px' }}
        inputProps={{ maxLength: 5 }}
        variant="outlined"
        onChange={handleWordNotAtIndex0Changed}
      />
      <TextField
        id="inWordNotAtIndex1"
        style={{ width: '74px' }}
        inputProps={{ maxLength: 5 }}
        variant="outlined"
      />
      <TextField
        id="inWordNotAtIndex2"
        inputProps={{ maxLength: 5 }}
        variant="outlined"
        style={{ width: '74px' }}
      />
      <TextField
        id="inWordNotAtIndex3"
        inputProps={{ maxLength: 5 }}
        style={{ width: '74px' }}
        variant="outlined"
      />
      <TextField
        id="inWordNotAtIndex4"
        inputProps={{ maxLength: 5 }}
        style={{ width: '74px' }}
        variant="outlined"
      />
      <br />
      Letters not in the word:
      <TextField
        id="notInWord"
        style={{ width: '260px' }}
        inputProps={{ maxLength: 25 }}
        variant="outlined"
      />
      <br />
      <Button variant="contained">List words</Button>
    </Box>
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

