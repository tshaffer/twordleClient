import * as React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

// import styled, { ThemeContext } from 'styled-components';

// import { CrosswordContext } from './context';
/*
const ClueWrapper = styled.div.attrs((props) => ({
  className: `clue${props.correct ? ' correct' : ''}`,
}))`
  cursor: default;
  background-color: ${(props) =>
    props.highlight ? props.highlightBackground : 'transparent'};
`;
*/

export interface ClueProps {
  direction: string,
  number: string;
  // children: string;
  correct: boolean;
  clueText: string;
}

const Clue = (props: ClueProps) => {

  /*
const ClueWrapper = styled.div.attrs((props) => ({
  className: `clue${props.correct ? ' correct' : ''}`,
}))`
  cursor: default;
  background-color: ${(props) =>
    props.highlight ? props.highlightBackground : 'transparent'};
`;
  */
  return (
    <div style={{ cursor: 'default', backgroundColor: 'transparent' }}>
      {props.number}: {props.clueText}
    </div>
  );
};

/*
    <ClueWrapper
      highlightBackground={highlightBackground}
      highlight={
        focused && direction === selectedDirection && number === selectedNumber
      }
      correct={correct}
      {...props}
      onClick={handleClick}
      aria-label={`clue-${number}-${direction}`}
    >
      {number}: {children}
    </ClueWrapper>
*/

function mapStateToProps(state: any) {
  return {
  };
}

const mapDispatchToProps = (dispatch: any) => {
  return bindActionCreators({
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Clue);

