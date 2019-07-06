import React from "react";

const Square: React.FunctionComponent<{
  mark: Mark;
  onMark: () => void;
}> = ({ mark, onMark }) => (
  <button style={{ color: mark === "X" ? "blue" : "red" }} onClick={onMark}>
    {mark}
  </button>
);

const Board: React.FunctionComponent<{
  board: Mark[];
  onMark: (position: number) => void;
}> = ({ board, onMark }) => {
  const squares = board.map((mark, pos) => (
    // `pos + mark` is `pos` if `mark` is `null`.
    <Square mark={mark} key={pos + mark!} onMark={() => onMark(pos)} />
  ));

  return <div className="board">{squares}</div>;
};

const History: React.FunctionComponent<{
  history: Mark[][];
  onJump: (step: number) => void;
}> = ({ history, onJump }) => {
  const steps = history.map((_, step) => (
    <li key={step}>
      <nav className="href" onClick={() => onJump(step)}>
        {step ? `Move #${step}` : "Game start"}
      </nav>
    </li>
  ));

  return <ol>{steps}</ol>;
};

export { Board, History };
