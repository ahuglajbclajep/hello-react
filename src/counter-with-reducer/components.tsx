import React, { memo, useCallback, useContext } from "react";
import { CounterContext } from "./context";

const Count: React.FC = memo(() => {
  const [{ count }] = useContext(CounterContext);
  // see: https://github.com/DefinitelyTyped/DefinitelyTyped/issues/20544
  return <>{count}</>;
});

const DecrementButton: React.FunctionComponent = memo(() => {
  const [{ count }, dispatch] = React.useContext(CounterContext);
  const handleClick = useCallback(() => dispatch("decrement"), []);

  return <button onClick={handleClick}>{count - 1} &lsaquo;</button>;
});

const IncrementButton: React.FC = memo(() => {
  const [{ count }, dispatch] = useContext(CounterContext);
  const handleClick = useCallback(() => dispatch("increment"), []);

  return <button onClick={handleClick}>&rsaquo; {count + 1}</button>;
});

export { Count, DecrementButton, IncrementButton };
