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
  createOnMark: (position: number) => () => void;
}> = ({ board, createOnMark }) => {
  const squares = board.map((mark, pos) => (
    // `pos + mark` is `pos` if `mark` is `null`.
    <Square mark={mark} key={pos + mark!} onMark={createOnMark(pos)} />
  ));

  return <div className="board">{squares}</div>;
};

const History: React.FunctionComponent<{
  history: Mark[][];
  createOnJump: (step: number) => () => void;
}> = ({ history, createOnJump }) => {
  const steps = history.map((_, step) => (
    <li key={step}>
      <nav className="href" onClick={createOnJump(step)}>
        {step ? `Move #${step}` : "Game start"}
      </nav>
    </li>
  ));

  return <ol>{steps}</ol>;
};

export { Board, History };
