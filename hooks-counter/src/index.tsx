import React from "react";
import ReactDOM from "react-dom";
import CounterContext from "./context";
import { Display, PlusButton, MinusButton } from "./components";

const reducer: Reducer = ({ count }, action) => {
  switch (action) {
    case "plus":
      return { count: count + 1 };
    case "minus":
      return { count: count - 1 };
  }
};

const App: React.FunctionComponent = () => {
  const value = React.useReducer(reducer, { count: 0 });
  return (
    <CounterContext.Provider value={value}>
      <MinusButton />
      <Display />
      <PlusButton />
    </CounterContext.Provider>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
