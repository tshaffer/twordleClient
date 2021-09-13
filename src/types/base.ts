export const serverUrl = 'http://localhost:8000';
// export const serverUrl = 'https://tedword.herokuapp.com';

export const apiUrlFragment = '/api/v1/';

export interface TedCrossState {
  derivedCrosswordData: DerivedCrosswordData | null;
  guessesState: GuessesState;
  appState: AppState;
  puzzlesState: PuzzlesState,
}

export interface AppState {
  puzzleId: string;
}

export interface PuzzleMetadata {
  id: string;
  sourceFileName: string;
  author: string;
  title: string;
}

export interface PuzzlesMetadataMap {
  [id: string]: PuzzleMetadata; // puzzle id
}

export interface PuzzlesMap {
  [id: string]: PuzzleEntity; // puzzle id
}

// TEDTODO - usage of DisplayedPuzzlesMap and is it correct?
export interface DisplayedPuzzlesMap {
  [id: string]: CluesByDirection; // puzzle id
}

export interface PuzzlesState {
  puzzlesMetadata: PuzzlesMetadataMap,
  puzzles: PuzzlesMap;
  displayedPuzzles: DisplayedPuzzlesMap;
}

// Parsed from the .puz file by confuzzle
export interface PuzzleSpec {
  title: string;
  author: string;
  copyright: string;
  sourceFileName: string;
  note: string;
  width: number;
  height: number;
  clues: string[];
  solution: string;
  state: string;
  hasState: boolean;
  parsedClues: ParsedClue[];
}

export interface PuzzleEntity extends PuzzleSpec {
  id: string;
}

export interface ParsedClue {
  col: number;
  isAcross: boolean;
  length: number;
  number: number;
  row: number;
  solution: string;
  state: string;
  text: string;
}

export interface DerivedCrosswordData {
  size: number;
  gridData: GridSpec;
  crosswordClues: CluesByDirection | null;
  clues: Clues;
}

// TEDTODO - rename ActiveCrosswordState
// export interface ActiveCrosswordState {
//   gridDataState: GridDataState | null;
// }

export interface ClueAtLocation {
  clue: string;
  answer: string;
  row: number;
  col: number;
}

export interface CluesByNumber {
  [id: number]: ClueAtLocation;
}

export interface CluesByDirection {
  across: CluesByNumber;
  down: CluesByNumber;
}


// TEDTODO - investigate rejiggering of GridDataState. Remove it and make size, gridData, and clues siblings of some other properties.
// export interface GridDataState {
//   size: number;
//   gridData: GridSpec;
//   clues: Clues;
// }

// TEDTODO - do I need separate ClueAtLocation and Clue?
export interface ClueAtLocation {
  clue: string;
  answer: string;
  row: number;
  col: number;
}





// approved
export interface GridSquareSpec {
  used: boolean;
  number: string;
  answer: string;
  locked: boolean;
  row: number | null;
  col: number | null;
  across: boolean;
  down: boolean;
}
export type RowOfGridSquareSpecs = GridSquareSpec[];
export type GridSpec = RowOfGridSquareSpecs[];

export interface GridSquare extends GridSquareSpec {
  guess: string;
}

// TEDTODO - do I need separate ClueAtLocation and Clue?
export interface Clue {
  value: string;
  numericLabel: string;
}

export interface Clues {
  across: Clue[];
  down: Clue[];
}

export interface Guess {
  value: string;
  guessIsRemote: boolean;
  remoteUser: string | null;
}

export type RowOfGuesses = Guess[];
export type GuessesGrid = RowOfGuesses[];

// TEDTODO - investigate flattening to replaces GuessesState with 'GuessesGrid | null'
export interface GuessesState {
  guessesGrid: GuessesGrid | null;
}


// Proposed new data structures - generated by controller / utilities, supplied to and used by component
// export interface Player {
//   poo: string;
// }

// export interface Game {  
//   id: string;
//   puzzleId: string;
//   players: Player[];
//   startDateTime: Date;
//   lastPlayedDateTime: Date;
//   elapsedTime: number;
//   solved: boolean;
// }

// export interface GridData {
//   size: number;
//   cellSpecs: any[]; // two dimensional grid of cells
//   gridData: any;
//   clues: any;
// }





