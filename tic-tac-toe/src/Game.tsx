import React from "react";
import { Board, History } from "./components";

function judgeWinner(board: Mark[]) {
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

  for (const [a, b, c] of winPatterns) {
    // `board[a] &&` means `board[a]` is not `null`.
    if (board[a] && board[a] === board[b] && board[a] === board[c])
      return board[a] as "X" | "O";
  }
  return null;
}

type State = { history: Mark[][]; step: number; xIsNext: boolean };

export default class Game extends React.Component<{}, State> {
  state = {
    history: [Array(9).fill(null)] as Mark[][],
    step: 0,
    xIsNext: true
  };

  handleMark(position: number) {
    const history = this.state.history.slice(0, this.state.step + 1);
    const board = history[history.length - 1];
    // do nothing if `board[position]` is not `null` or there is a winner.
    if (board[position] || judgeWinner(board)) return;

    const newBoard = [...board];
    newBoard[position] = this.state.xIsNext ? "X" : "O";
    this.setState(({ step, xIsNext }) => ({
      history: [...history, newBoard],
      step: step + 1,
      xIsNext: !xIsNext
    }));
  }

  handleJump(step: number) {
    this.setState({ step: step, xIsNext: !(step % 2) });
  }

  render() {
    const board = this.state.history[this.state.step];
    const winner = judgeWinner(board);
    const status = winner
      ? `Winner: ${winner}`
      : 9 <= this.state.step
      ? "Draw"
      : `Next player: ${this.state.xIsNext ? "X" : "O"}`;

    return (
      <div className="game">
        <Board board={board} onMark={this.handleMark.bind(this)} />
        <div className="game-info">
          <p style={{ fontWeight: winner ? "bold" : "unset" }}>{status}</p>
          <History
            history={this.state.history}
            onJump={this.handleJump.bind(this)}
          />
        </div>
      </div>
    );
  }
}
