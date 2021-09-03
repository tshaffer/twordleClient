export const serverUrl = 'http://localhost:8000';
// export const serverUrl = 'https://tedword.herokuapp.com';

export const apiUrlFragment = '/api/v1/';

export interface TedCrossState {
  activePuzzleState: ActivePuzzleState | null;
  appState: AppState;
  puzzlesState: PuzzlesState,
}

export interface AppState {
  userName: string;
  puzzleId: string;
  boardId: string;
}

export interface ActivePuzzleState {
  activePuzzle: ActivePuzzle | null;
}

export interface PuzzleCell {
  clue: string;
  answer: string;
  row: number;
  col: number;
}

export interface PuzzleElementByNumber {
  [id: number]: PuzzleCell;
}

export interface ActivePuzzle {
  across: PuzzleElementByNumber;
  down: PuzzleElementByNumber;
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

export interface PuzzleExistsByFileNameMap {
  [id: string]: boolean; // sourceFileName
}

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

export interface PuzzlesState {
  puzzlesMetadata: PuzzlesMetadataMap,
  puzzles: PuzzlesMap;
}

