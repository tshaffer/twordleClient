/* eslint-disable @typescript-eslint/no-var-requires */
import * as React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

import {
  cnSetLetterAtLocation,
  cnSetLettersNotAtLocation,
  cnSetLettersNotInWord,
  cnListWords,
  cnSetHelperLetters,
  cnGetHelperWord,
} from '../controllers';

import {
  getLettersAtExactLocation,
  getLettersNotAtExactLocation,
  getLettersNotInWord,
  getPossibleWords,
  getInputError,
  getLettersInWordAnyLocation,
  getHelperWord,
} from '../selectors';
import { List, ListItem, ListItemText, ListSubheader, Paper } from '@mui/material';
import { isNil } from 'lodash';

export interface AppProps {
  lettersAtExactLocation: string[];
  lettersNotAtExactLocation: string[];
  lettersNotInWord: string;
  possibleWords: string[];
  helperLetters: string;
  helperWord: string;
  inputError: string | null;
  onSetLetterAtLocation: (index: number, letterAtLocation: string,) => any;
  onSetLettersNotAtLocation: (index: number, lettersNotAtLocation: string) => any;
  onSetLettersNotInWord: (lettersNotInWord: string) => any;
  onListWords: () => any;
  onSetHelperLetters: (helperLetters: string) => any;
  onGetHelperWord: () => any;
}

const App = (props: AppProps) => {

  const [listWordsInvoked, setListWordsInvoked] = React.useState(false);
  const [getHelperWordInvoked, setGetHelperWordInvoked] = React.useState(false);
  const [errorDialogOpen, setErrorDialogOpen] = React.useState(false);

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
    props.onSetLetterAtLocation(index, value.toLowerCase());
  };

  const setLettersNotAtLocationHelper = (index: number, value: string) => {
    props.onSetLettersNotAtLocation(index, value.toLowerCase());
  };

  const handleLettersNotInWordChanged = (event: any) => {
    console.log('new value');
    console.log(event.target.value);
    props.onSetLettersNotInWord(event.target.value.toLowerCase());
  };

  const handleListWords = () => {
    if (isNil(props.inputError)) {
      setListWordsInvoked(true);
      props.onListWords();
    } else {
      console.log('Error: ' + props.inputError);
      setErrorDialogOpen(true);
    }
  };

  const handleSetHelperLetters = (event: any) => {
    console.log('new value');
    console.log(event.target.value);
    props.onSetHelperLetters(event.target.value.toLowerCase());
  };

  const handleGetHelperWord = () => {
    setGetHelperWordInvoked(true);
    props.onGetHelperWord();
  };


  const handleCloseErrorDialog = () => {
    setErrorDialogOpen(false);
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

  const renderHelperWord = () => {
    return (
      <p>
        {props.helperWord}
      </p>
    );
  }

  const lettersInWordAtExactLocation = renderLettersInWordAtExactLocation();
  const lettersInWordKnownNonLocation = renderLettersInWordKnownNonLocation();
  const wordListElement = renderWordListElement();
  const helperWord = renderHelperWord();

  return (
    <div>
      <Dialog
        open={errorDialogOpen}
        onClose={handleCloseErrorDialog}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {'Input Error'}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {props.inputError}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseErrorDialog}>Close</Button>
          <Button onClick={handleCloseErrorDialog} autoFocus>
            Agree
          </Button>
        </DialogActions>
      </Dialog>
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
        <br />
        {wordListElement}
        Specify the desired letters in the helper word:
        <TextField
          id="isDesiredLetters"
          style={{ width: '260px' }}
          inputProps={{ maxLength: 25 }}
          variant="outlined"
          value={props.helperLetters}
          onChange={handleSetHelperLetters}
        />
        <br />
        <Button
          variant="contained"
          onClick={handleGetHelperWord}
        >
          Get Helper Word
        </Button>
        <br />
        {helperWord}
      </Box>
    </div>
  );
};

function mapStateToProps(state: any) {
  return {
    lettersAtExactLocation: getLettersAtExactLocation(state),
    lettersNotAtExactLocation: getLettersNotAtExactLocation(state),
    lettersNotInWord: getLettersNotInWord(state),
    possibleWords: getPossibleWords(state),
    helperLetters: getLettersInWordAnyLocation(state),
    helperWord: getHelperWord(state),
    inputError: getInputError(state),
  };
}

const mapDispatchToProps = (dispatch: any) => {
  return bindActionCreators({
    onSetLetterAtLocation: cnSetLetterAtLocation,
    onSetLettersNotAtLocation: cnSetLettersNotAtLocation,
    onSetLettersNotInWord: cnSetLettersNotInWord,
    onListWords: cnListWords,
    onSetHelperLetters: cnSetHelperLetters,
    onGetHelperWord: cnGetHelperWord,

  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

