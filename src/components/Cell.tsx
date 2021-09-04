/* eslint-disable @typescript-eslint/no-var-requires */
import * as React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

export interface CellPropsFromParent {
  onClick: () => any;
}

export interface CellProps extends CellPropsFromParent {
  row: number,
  col: number,
  guess: string,
  number: string,
  highlight: boolean,
}

const Cell = (props: CellProps) => {

  /* CellData from debugger
across: "1"
answer: "S"
col: 0
down: "1"
guess: "S"
guessIsRemote: false
inFullAnswer: true
locked: false
number: "1"
row: 0
used: true
  */

  React.useEffect(() => {
    init();
  }, []);

  const init = () => {
    console.log('cell init invoked');
  };

  const cellSize = 6.66666666667;
  const cellPadding = 0.125;
  const cellInner = 6.416666666666667;
  const cellHalf = 3.3333333333333335;
  const fontSize = 4.491666666666666;
  const cellBackground = 'rgb(255,255,255)';

  const cellBorder = 'rgb(0,0,0)';
  const textColor = 'rgb(0,0,0)';
  const numberColor = 'rgba(0,0,0, 0.25)';
  const focusBackground = 'rgb(255,255,0)';
  const highlightBackground = 'rgb(255,255,204)';

  const { row, col, guess, number, highlight } = props;

  const x = col * cellSize;
  const y = row * cellSize;

  const cellTextColor = textColor;

  const fillStyle = {
    fill: cellTextColor
  };
  const cellStyle = fillStyle;

  const handleClick = (event) => {
    console.log('Cell component - handleClick');
    console.log(event);
    event.preventDefault();
    props.onClick();

    // if (onClick) {
    //   onClick(cellData);
    // }
  };


  return (
    <g
      style={{ cursor: 'default', fontSize: `${fontSize}px` }}
      onClick={handleClick}
    >
      <rect
        x={x + cellPadding}
        y={y + cellPadding}
        width={cellInner}
        height={cellInner}
        fill={
          focus
            ? focusBackground
            : highlight
              ? highlightBackground
              : cellBackground
        }
        stroke={cellBorder}
        strokeWidth={cellSize / 50}
      />
      {number && (
        <text
          x={x + cellPadding * 4}
          y={y + cellPadding * 4}
          textAnchor="start"
          dominantBaseline="hanging"
          style={{ fontSize: '50%', fill: numberColor }}
        >
          {number}
        </text>
      )}
      <text
        x={x + cellHalf}
        y={y + cellHalf + 1} // +1 for visual alignment?
        textAnchor="middle"
        dominantBaseline="middle"
        style={cellStyle}
      >
        {guess}
      </text>
    </g>
  );

  // return (
  //   <div>cell</div>
  // );
};

function mapStateToProps(state: any) {
  return {
  };
}

const mapDispatchToProps = (dispatch: any) => {
  return bindActionCreators({
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Cell);

