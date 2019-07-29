import React from "react";

const CounterContext = React.createContext({
  count: 0,
  plus: () => {},
  minus: () => {}
});

export default CounterContext;
