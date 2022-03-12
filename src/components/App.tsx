/* eslint-disable @typescript-eslint/no-var-requires */
import * as React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import { cnSetLetterAtLocation, cnSetLettersNotAtLocation } from '../controllers';

export interface AppProps {
  onSetLetterAtLocation: (index: number, letterAtLocation: string,) => any;
  onSetLettersNotAtLocation: (index: number, lettersNotAtLocation: string) => any;
}

const App = (props: AppProps) => {

  React.useEffect(() => {
    init();
  }, []);

  const init = () => {
    console.log('app init invoked');
  };

  const setLetterAtLocationHelper = (index: number, value: string) => {
    props.onSetLetterAtLocation(index, value);
  };

  const handleLetterAtIndex0Changed = (event: any) => {
    setLetterAtLocationHelper(0, event.target.value);
  };

  const handleLetterAtIndex1Changed = (event: any) => {
    setLetterAtLocationHelper(1, event.target.value);
  };

  const handleLetterAtIndex2Changed = (event: any) => {
    setLetterAtLocationHelper(2, event.target.value);
  };

  const handleLetterAtIndex3Changed = (event: any) => {
    setLetterAtLocationHelper(3, event.target.value);
  };

  const handleLetterAtIndex4Changed = (event: any) => {
    setLetterAtLocationHelper(4, event.target.value);
  };

  const setLettersNotAtLocationHelper = (index: number, value: string) => {
    props.onSetLettersNotAtLocation(index, value);
  };

  const handleWordNotAtIndex0Changed = (event: any) => {
    console.log('new value');
    console.log(event.target.value);
    setLettersNotAtLocationHelper(0, event.target.value);
  };

  const handleWordNotAtIndex1Changed = (event: any) => {
    console.log('new value');
    console.log(event.target.value);
    setLettersNotAtLocationHelper(1, event.target.value);
  };

  const handleWordNotAtIndex2Changed = (event: any) => {
    console.log('new value');
    console.log(event.target.value);
    setLettersNotAtLocationHelper(2, event.target.value);
  };

  const handleWordNotAtIndex3Changed = (event: any) => {
    console.log('new value');
    console.log(event.target.value);
    setLettersNotAtLocationHelper(3, event.target.value);
  };

  const handleWordNotAtIndex4Changed = (event: any) => {
    console.log('new value');
    console.log(event.target.value);
    setLettersNotAtLocationHelper(4, event.target.value);
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
        onChange={handleLetterAtIndex0Changed}
      />
      <TextField
        id="inWordIndex1"
        style={{ width: '36px' }}
        inputProps={{ maxLength: 1 }}
        variant="outlined"
        onChange={handleLetterAtIndex1Changed}
      />
      <TextField
        id="inWordIndex2"
        inputProps={{ maxLength: 1 }}
        variant="outlined"
        style={{ width: '36px' }}
        onChange={handleLetterAtIndex2Changed}
      />
      <TextField
        id="inWordIndex3"
        inputProps={{ maxLength: 1 }}
        style={{ width: '36px' }}
        variant="outlined"
        onChange={handleLetterAtIndex3Changed}
      />
      <TextField
        id="inWordIndex4"
        inputProps={{ maxLength: 1 }}
        style={{ width: '36px' }}
        variant="outlined"
        onChange={handleLetterAtIndex4Changed}
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
    onSetLetterAtLocation: cnSetLetterAtLocation,
    onSetLettersNotAtLocation: cnSetLettersNotAtLocation,
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

