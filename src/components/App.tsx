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
import { List, ListItem, ListItemText, ListSubheader, Paper } from '@mui/material';
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

  const [listWordsInvoked, setListWordsInvoked] = React.useState(false);

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

  const setLettersNotAtLocationHelper = (index: number, value: string) => {
    props.onSetLettersNotAtLocation(index, value);
  };

  const handleLettersNotInWordChanged = (event: any) => {
    console.log('new value');
    console.log(event.target.value);
    props.onSetLettersNotInWord(event.target.value);
  };

  const handleListWords = () => {
    setListWordsInvoked(true);
    props.onListWords();
  };

  const renderLetterInWordAtExactLocation = (index: number) => {
    return (
      <TextField
        id={'letterInWordAtExactLocation' + index.toString()}
        key={'letterInWordAtExactLocation' + index.toString()}
        style={{ width: '42px' }}
        inputProps={{ maxLength: 1 }}
        variant="outlined"
        value={getLetterAtExactLocation(index)}
        onChange={() => setLetterAtLocationHelper(index, (event.target as any).value)}
      />

    );
  };

  const renderLettersInWordAtExactLocation = () => {
    const lettersInWordAtExactLocation = [];
    for (let i = 0; i < 5; i++) {
      lettersInWordAtExactLocation.push(renderLetterInWordAtExactLocation(i));
    }
    return lettersInWordAtExactLocation;
  };

  const renderLetterInWordKnownNonLocation = (index: number) => {
    return (
      <TextField
        id={'letterInWordAtKnownNonLocation' + index.toString()}
        key={'letterInWordAtKnownNonLocation' + index.toString()}
        style={{ width: '74px' }}
        inputProps={{ maxLength: 5 }}
        variant="outlined"
        value={getLettersNotAtExactLocation(index)}
        onChange={() => setLettersNotAtLocationHelper(index, (event.target as any).value)}
      />
    );
  };

  const renderLettersInWordKnownNonLocation = () => {
    const lettersInWordKnownNonLocation = [];
    for (let i = 0; i < 5; i++) {
      lettersInWordKnownNonLocation.push(renderLetterInWordKnownNonLocation(i));
    }
    return lettersInWordKnownNonLocation;
  };

  const renderWord = (word: string) => {
    return (
      <ListItem key={word}>
        <ListItemText key={word}>
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

  const renderWordListElement = () => {
    if (!listWordsInvoked) {
      return null;
    }
    const wordList = renderWordList();
    return (
      <Paper style={{ maxHeight: '100%', overflow: 'auto' }}>
        <List
          subheader={<ListSubheader>Possible words</ListSubheader>}
        >
          {wordList}
        </List>
      </Paper>
    );

  };

  const lettersInWordAtExactLocation = renderLettersInWordAtExactLocation();
  const lettersInWordKnownNonLocation = renderLettersInWordKnownNonLocation();
  const wordListElement = renderWordListElement();

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
      {lettersInWordAtExactLocation}
      <br />
      Letters in the word at known non-location:
      {lettersInWordKnownNonLocation}
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
      {wordListElement}
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

