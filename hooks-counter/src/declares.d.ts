type State = { count: number };
type Action = "plus" | "minus";
type Reducer = (state: State, action: Action) => State;
type Context = [State, React.Dispatch<Action>];
