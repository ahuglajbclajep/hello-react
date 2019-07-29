import React from "react";
import CounterContext from "./context";

const Display: React.FunctionComponent = () => {
  const [{ count }] = React.useContext(CounterContext);
  // see: https://github.com/DefinitelyTyped/DefinitelyTyped/issues/20544
  return <>{count}</>;
};

const PlusButton: React.FunctionComponent = () => {
  const [{ count }, dispatch] = React.useContext(CounterContext);
  return <button onClick={() => dispatch("plus")}>&rsaquo; {count + 1}</button>;
};

const MinusButton: React.FunctionComponent = () => {
  const [{ count }, dispatch] = React.useContext(CounterContext);
  return (
    <button onClick={() => dispatch("minus")}>{count - 1} &lsaquo;</button>
  );
};

export { Display, PlusButton, MinusButton };
