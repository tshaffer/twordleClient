/* eslint-disable @typescript-eslint/no-var-requires */
import * as React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import {
  cnSetLetterAtLocation,
  cnSetLettersNotAtLocation,
  cnSetLettersNotInWord,
  cnListWords,
} from '../controllers';

import {
  getLettersAtExactLocation,
  getLettersNotAtExactLocation,
  getLettersNotInWord,
  getPossibleWords,
} from '../selectors';
import { List, ListItem, ListItemText, Paper } from '@mui/material';
import _ = require('lodash');

export interface AppProps {
  lettersAtExactLocation: string[];
  lettersNotAtExactLocation: string[];
  lettersNotInWord: string;
  possibleWords: string[];
  onSetLetterAtLocation: (index: number, letterAtLocation: string,) => any;
  onSetLettersNotAtLocation: (index: number, lettersNotAtLocation: string) => any;
  onSetLettersNotInWord: (lettersNotInWord: string) => any;
  onListWords: () => any;
}

const App = (props: AppProps) => {

  React.useEffect(() => {
    init();
  }, []);

  const init = () => {
    console.log('app init invoked');
  };

  const getLetterAtExactLocation = (index: number): string => {
    return props.lettersAtExactLocation[index];
  };

  const getLettersNotAtExactLocation = (index: number): string => {
    return props.lettersNotAtExactLocation[index];
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

  const handleLettersNotInWordChanged = (event: any) => {
    console.log('new value');
    console.log(event.target.value);
    props.onSetLettersNotInWord(event.target.value);
  };

  const handleListWords = () => {
    props.onListWords();
  };

  const renderWord = (word: string) => {
    return (
      <ListItem>
        <ListItemText>
          {word}
        </ListItemText>
      </ListItem>
    );
  };

  const renderWordList = () => {

    if (props.possibleWords.length > 0) {
      return props.possibleWords.map((possibleWord: string) => {
        return renderWord(possibleWord);
      });
    } else {
      return (
        <ListItem>
          <ListItemText>
            None
          </ListItemText>
        </ListItem>
      );
    }
  };

  const wordList = renderWordList();

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
        value={getLetterAtExactLocation(0)}
        onChange={handleLetterAtIndex0Changed}
      />
      <TextField
        id="inWordIndex1"
        style={{ width: '36px' }}
        inputProps={{ maxLength: 1 }}
        variant="outlined"
        value={getLetterAtExactLocation(1)}
        onChange={handleLetterAtIndex1Changed}
      />
      <TextField
        id="inWordIndex2"
        inputProps={{ maxLength: 1 }}
        variant="outlined"
        style={{ width: '36px' }}
        value={getLetterAtExactLocation(2)}
        onChange={handleLetterAtIndex2Changed}
      />
      <TextField
        id="inWordIndex3"
        inputProps={{ maxLength: 1 }}
        style={{ width: '36px' }}
        variant="outlined"
        value={getLetterAtExactLocation(3)}
        onChange={handleLetterAtIndex3Changed}
      />
      <TextField
        id="inWordIndex4"
        inputProps={{ maxLength: 1 }}
        style={{ width: '36px' }}
        variant="outlined"
        value={getLetterAtExactLocation(4)}
        onChange={handleLetterAtIndex4Changed}
      />
      <br />
      Letters in the word at known non-location:
      <TextField
        id="inWordNotAtIndex0"
        style={{ width: '74px' }}
        inputProps={{ maxLength: 5 }}
        variant="outlined"
        value={getLettersNotAtExactLocation(0)}
        onChange={handleWordNotAtIndex0Changed}
      />
      <TextField
        id="inWordNotAtIndex1"
        style={{ width: '74px' }}
        inputProps={{ maxLength: 5 }}
        variant="outlined"
        value={getLettersNotAtExactLocation(1)}
        onChange={handleWordNotAtIndex1Changed}
      />
      <TextField
        id="inWordNotAtIndex2"
        inputProps={{ maxLength: 5 }}
        variant="outlined"
        style={{ width: '74px' }}
        value={getLettersNotAtExactLocation(2)}
        onChange={handleWordNotAtIndex2Changed}
      />
      <TextField
        id="inWordNotAtIndex3"
        inputProps={{ maxLength: 5 }}
        style={{ width: '74px' }}
        variant="outlined"
        value={getLettersNotAtExactLocation(3)}
        onChange={handleWordNotAtIndex3Changed}
      />
      <TextField
        id="inWordNotAtIndex4"
        inputProps={{ maxLength: 5 }}
        style={{ width: '74px' }}
        variant="outlined"
        value={getLettersNotAtExactLocation(4)}
        onChange={handleWordNotAtIndex4Changed}
      />
      <br />
      Letters not in the word:
      <TextField
        id="notInWord"
        style={{ width: '260px' }}
        inputProps={{ maxLength: 25 }}
        variant="outlined"
        value={props.lettersNotInWord}
        onChange={handleLettersNotInWordChanged}
      />
      <br />
      <Button
        variant="contained"
        onClick={handleListWords}
      >
        List words
      </Button>
      <Paper style={{ maxHeight: 200, overflow: 'auto' }}>
        <List>
          {wordList}
        </List>
      </Paper>
    </Box>
  );
};

function mapStateToProps(state: any) {
  return {
    lettersAtExactLocation: getLettersAtExactLocation(state),
    lettersNotAtExactLocation: getLettersNotAtExactLocation(state),
    lettersNotInWord: getLettersNotInWord(state),
    possibleWords: getPossibleWords(state),
  };
}

const mapDispatchToProps = (dispatch: any) => {
  return bindActionCreators({
    onSetLetterAtLocation: cnSetLetterAtLocation,
    onSetLettersNotAtLocation: cnSetLettersNotAtLocation,
    onSetLettersNotInWord: cnSetLettersNotInWord,
    onListWords: cnListWords,
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

