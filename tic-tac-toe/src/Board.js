import React from 'react';
import './index.css';


export default function Board(props) {
  const squares = props.marks.map((m, i) => <Square mark={m} key={i + m} hMark={() => props.hMark(i)} />);

  return <div className='board'>{squares}</div>;
}

function Square(props) {
  return (
    <button
      style={{ color: props.mark === 'X' ? 'blue' : 'red' }}
      onClick={props.hMark}
    >
      {props.mark}
    </button>
  );
}
