import { createContext } from "react";

type State = { count: number };
type Action = "increment" | "decrement";
type Context = [State, React.Dispatch<Action>];

const CounterContext = createContext([...new Array(2)] as Context);

export { CounterContext, State, Action };
