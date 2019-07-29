import React from "react";
import CounterContext from "./context";

class Display extends React.Component {
  static contextType = CounterContext;
  context!: React.ContextType<typeof CounterContext>;

  render() {
    return this.context.count;
  }
}

class PlusButton extends React.Component {
  static contextType = CounterContext;
  context!: React.ContextType<typeof CounterContext>;

  render() {
    return (
      <button onClick={this.context.plus}>
        &rsaquo; {this.context.count + 1}
      </button>
    );
  }
}

class MinusButton extends React.Component {
  static contextType = CounterContext;
  context!: React.ContextType<typeof CounterContext>;

  render() {
    return (
      <button onClick={this.context.minus}>
        {this.context.count - 1} &lsaquo;
      </button>
    );
  }
}

export { Display, PlusButton, MinusButton };
