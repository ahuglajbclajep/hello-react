import React, { Component } from 'react';
import { Board, History } from "./components";
import { judgeWinner } from './logic';
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
    const board = history[history.length - 1].slice();

    if (board[i] || judgeWinner(board)) return;

    board[i] = this.state.xIsNext ? 'X' : 'O';
    this.setState(prevState => ({
      history: history.concat([board]),
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
    const board = history[history.length - 1];

    const winner = judgeWinner(board);
    const status = winner ? 'Winner: ' + winner
        : 8 < this.state.step ? 'Draw'
        : 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');

    return (
      <div className='game'>
        <Board board={board} onMark={this.handleMark.bind(this)} />
        <div className='game-info'>
          <p style={{ fontWeight: winner ? 'bold' : 'unset' }}>{status}</p>
          <History history={history} onJump={this.handleJump.bind(this)} />
        </div>
      </div>
    );
  }
}
