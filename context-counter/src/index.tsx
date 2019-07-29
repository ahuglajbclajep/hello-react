import React from "react";
import ReactDOM from "react-dom";
import CounterContext from "./context";
import { Display, PlusButton, MinusButton } from "./components";

type State = React.ContextType<typeof CounterContext>;
class App extends React.Component<{}, State> {
  state = {
    count: 0,
    plus: this.plus.bind(this),
    minus: this.minus.bind(this)
  };

  plus() {
    this.setState({ count: this.state.count + 1 });
  }

  minus() {
    this.setState({ count: this.state.count - 1 });
  }

  render() {
    return (
      <CounterContext.Provider value={this.state}>
        <MinusButton />
        <Display />
        <PlusButton />
      </CounterContext.Provider>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
