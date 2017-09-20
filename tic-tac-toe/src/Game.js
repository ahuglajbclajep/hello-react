import React from 'react';
import Board from './Board'
import './index.css';

export default class Game extends React.Component {
  constructor() {
    super();
    this.state = {
      history: [Array(9).fill(null)],
      stepNumber: 0,
      xIsNext: true
    };
  }

  handleClick(i) {
    const history = this.state.history;
    const squares = history[history.length - 1].slice();

    if (squares[i] || calculateWinner(squares)) return;
    squares[i] = this.state.xIsNext ? 'X' : 'O';

    this.setState({
      history: history.concat([squares]),
      stepNumber: this.state.stepNumber + 1,
      xIsNext: !this.state.xIsNext
    });
  }

  jumpTo(step) {
    this.setState({
      history: this.state.history.slice(0, step + 1),
      stepNumber: step,
      xIsNext: !(step % 2)
    });
  }

  render() {
    const history = this.state.history;
    const squares = history[history.length - 1];

    const winner = calculateWinner(squares);
    const nextPlayer = this.state.xIsNext ? 'X' : 'O';
    const status = winner ? 'Winner: ' + winner : 'Next player: ' + nextPlayer;

    const moves = history.map((step, move) => {
          const desc = move ? 'Move #' + move : 'Game start';
          return (
            <li key={move}>
              <nav className="href" onClick={() => this.jumpTo(move)}>{desc}</nav>
            </li>
          );
        });

    return (
      <div className="game">
        <Board
          squares={squares}
          onClick={(i) => this.handleClick(i)}
        />
        <div className="game-info">
          <div>{status}</div>
          <ol>{moves}</ol>
        </div>
      </div>
    );
  }
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}
