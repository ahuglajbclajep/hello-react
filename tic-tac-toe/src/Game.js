import React, { Component } from 'react';
import Board from './Board';
import { judgeWinner } from './logics';
import './index.css';


export default class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      history: [Array(9).fill(null)],
      step: 0,
      xIsNext: true
    };
  }

  handleMark(i) {
    const history = this.state.history;
    const squares = history[history.length - 1].slice();

    if (squares[i] || judgeWinner(squares)) return;

    squares[i] = this.state.xIsNext ? 'X' : 'O';
    this.setState(prevState => ({
      history: history.concat([squares]),
      step: prevState.step + 1,
      xIsNext: !prevState.xIsNext
    }));
  }

  handleJump(step) {
    this.setState(prevState => ({
      history: prevState.history.slice(0, step + 1),
      step: step,
      xIsNext: !(step % 2)
    }));
  }

  render() {
    const history = this.state.history;
    const squares = history[history.length - 1];

    const winner = judgeWinner(squares);
    const status = winner ? 'Winner: ' + winner
        : 8 < this.state.step ? 'Draw'
        : 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');

    return (
      <div className='game'>
        <Board squares={squares} mark={this.handleMark.bind(this)} />
        <div className='game-info'>
          <p style={{ fontWeight: winner ? 'bold' : 'unset' }}>{status}</p>
          <Steps history={history} jump={this.handleJump.bind(this)} />
        </div>
      </div>
    );
  }
}

function Steps(props) {
  const steps = props.history.map((squares, step) => (
        <li key={step}>
          <nav className='href' onClick={() => props.jump(step)}>
            {step ? 'Move #' + step : 'Game start'}
          </nav>
        </li>
      ));

  return <ol>{steps}</ol>;
}
