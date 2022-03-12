/* eslint-disable @typescript-eslint/no-var-requires */
import * as React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import { cnSetCharAtLocation, cnSetCharsNotAtLocation } from '../controllers';

export interface AppProps {
  onSetCharAtLocation: (index: number, charAtLocation: string,) => any;
  onSetCharsNotAtLocation: (index: number, charsNotAtLocation: string) => any;
}

const App = (props: AppProps) => {

  React.useEffect(() => {
    init();
  }, []);

  const init = () => {
    console.log('app init invoked');
  };

  const setCharAtLocationHelper = (index: number, value: string) => {
    props.onSetCharAtLocation(index, value);
  };

  const handleCharAtIndex0Changed = (event: any) => {
    setCharAtLocationHelper(0, event.target.value);
  };

  const handleCharAtIndex1Changed = (event: any) => {
    setCharAtLocationHelper(1, event.target.value);
  };

  const handleCharAtIndex2Changed = (event: any) => {
    setCharAtLocationHelper(2, event.target.value);
  };

  const handleCharAtIndex3Changed = (event: any) => {
    setCharAtLocationHelper(3, event.target.value);
  };

  const handleCharAtIndex4Changed = (event: any) => {
    setCharAtLocationHelper(4, event.target.value);
  };

  const setCharsNotAtLocationHelper = (index: number, value: string) => {
    props.onSetCharsNotAtLocation(index, value);
  };

  const handleWordNotAtIndex0Changed = (event: any) => {
    console.log('new value');
    console.log(event.target.value);
    setCharsNotAtLocationHelper(0, event.target.value);
  };

  const handleWordNotAtIndex1Changed = (event: any) => {
    console.log('new value');
    console.log(event.target.value);
    setCharsNotAtLocationHelper(1, event.target.value);
  };

  const handleWordNotAtIndex2Changed = (event: any) => {
    console.log('new value');
    console.log(event.target.value);
    setCharsNotAtLocationHelper(2, event.target.value);
  };

  const handleWordNotAtIndex3Changed = (event: any) => {
    console.log('new value');
    console.log(event.target.value);
    setCharsNotAtLocationHelper(3, event.target.value);
  };

  const handleWordNotAtIndex4Changed = (event: any) => {
    console.log('new value');
    console.log(event.target.value);
    setCharsNotAtLocationHelper(4, event.target.value);
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
        onChange={handleCharAtIndex0Changed}
      />
      <TextField
        id="inWordIndex1"
        style={{ width: '36px' }}
        inputProps={{ maxLength: 1 }}
        variant="outlined"
        onChange={handleCharAtIndex1Changed}
      />
      <TextField
        id="inWordIndex2"
        inputProps={{ maxLength: 1 }}
        variant="outlined"
        style={{ width: '36px' }}
        onChange={handleCharAtIndex2Changed}
      />
      <TextField
        id="inWordIndex3"
        inputProps={{ maxLength: 1 }}
        style={{ width: '36px' }}
        variant="outlined"
        onChange={handleCharAtIndex3Changed}
      />
      <TextField
        id="inWordIndex4"
        inputProps={{ maxLength: 1 }}
        style={{ width: '36px' }}
        variant="outlined"
        onChange={handleCharAtIndex4Changed}
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
        onChange={handleWordNotAtIndex1Changed}
      />
      <TextField
        id="inWordNotAtIndex2"
        inputProps={{ maxLength: 5 }}
        variant="outlined"
        style={{ width: '74px' }}
        onChange={handleWordNotAtIndex2Changed}
      />
      <TextField
        id="inWordNotAtIndex3"
        inputProps={{ maxLength: 5 }}
        style={{ width: '74px' }}
        variant="outlined"
        onChange={handleWordNotAtIndex3Changed}
      />
      <TextField
        id="inWordNotAtIndex4"
        inputProps={{ maxLength: 5 }}
        style={{ width: '74px' }}
        variant="outlined"
        onChange={handleWordNotAtIndex4Changed}
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
    onSetCharAtLocation: cnSetCharAtLocation,
    onSetCharsNotAtLocation: cnSetCharsNotAtLocation,
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

