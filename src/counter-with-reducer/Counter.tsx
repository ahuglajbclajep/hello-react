// see https://reactjs.org/docs/hooks-reference.html#usereducer and
// https://reactjs.org/docs/context.html#updating-context-from-a-nested-component

import React, { memo, useReducer } from "react";
import { Count, DecrementButton, IncrementButton } from "./components";
import { Action, CounterContext, State } from "./context";

const reducer: React.Reducer<State, Action> = ({ count }, action) => {
  switch (action) {
    case "increment":
      return { count: count + 1 };
    case "decrement":
      return { count: count - 1 };
  }
};

const Counter: React.FC = () => {
  const value = useReducer(reducer, { count: 0 });

  return (
    <CounterContext.Provider value={value}>
      <DecrementButton />
      <Count />
      <IncrementButton />
    </CounterContext.Provider>
  );
};

export default memo(Counter);
