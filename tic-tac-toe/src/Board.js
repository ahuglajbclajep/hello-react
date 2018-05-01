import React from 'react';
import './index.css';


export default function Board(props) {
  const renderSquare = i => <Square value={props.squares[i]} mark={() => props.mark(i)} />;

  return (
    <div>
      <div>
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div>
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div>
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </div>
  );
}

function Square(props) {
  return (
    <button
      className='square'
      style={{ color: props.value === 'X' ? 'blue' : 'red' }}
      onClick={props.mark}
    >
      {props.value}
    </button>
  );
}
