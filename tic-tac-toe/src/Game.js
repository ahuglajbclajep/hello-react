import React from 'react';
import Board from './Board'
import './index.css';

export default class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      history: [Array(9).fill(null)],
      step: 0,
      xIsNext: true
    };
  }

  handleClick(i) {
    const history = this.state.history;
    const squares = history[history.length - 1].slice();

    if (squares[i] || judgeWinner(squares)) return;
    squares[i] = this.state.xIsNext ? 'X' : 'O';

    this.setState((prevState) => ({
      history: history.concat([squares]),
      step: prevState.step + 1,
      xIsNext: !prevState.xIsNext
    }));
  }

  jumpTo(step) {
    this.setState((prevState) => ({
      history: prevState.history.slice(0, step + 1),
      step: step,
      xIsNext: !(step % 2)
    }));
  }

  render() {
    const history = this.state.history;
    const squares = history[history.length - 1];

    const winner = judgeWinner(squares);
    const status = winner ? 'Winner: ' + winner :
        'Next player: ' + (this.state.xIsNext ? 'X' : 'O');

    const steps = history.map((squares, step) => (
          <li key={step}>
            <nav className="href" onClick={() => this.jumpTo(step)}>
              {step ? 'Move #' + step : 'Game start'}
            </nav>
          </li>
        ));

    return (
      <div className="game">
        <Board
          squares={squares}
          onClick={(i) => this.handleClick(i)}
        />
        <div className="game-info">
          <div>{status}</div>
          <ol>{steps}</ol>
        </div>
      </div>
    );
  }
}

function judgeWinner(squares) {
  const winPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];

  for (let i = 0; i < winPatterns.length; i++) {
    const [a, b, c] = winPatterns[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) return squares[a];
  }
  return null;
}
