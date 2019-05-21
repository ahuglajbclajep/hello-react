import React from "react";

const Rect: React.FunctionComponent<{ color: string }> = props => (
  <div className="rect" style={{ backgroundColor: props.color }} />
);

const NavBar: React.FunctionComponent<{
  color: string;
  prev: (e: React.MouseEvent<HTMLButtonElement>) => void;
  next: (e: React.MouseEvent<HTMLButtonElement>) => void;
}> = props => (
  <nav>
    <button onClick={props.prev}>&laquo;</button>
    {props.color}
    <button onClick={props.next}>&raquo;</button>
  </nav>
);

type State = { index: number };

export default class App extends React.Component<{}, State> {
  private corols = ["red", "blue", "yellow"];

  constructor(props: {}) {
    super(props);
    this.state = { index: 0 };
  }

  prev() {
    this.setState(state => ({
      index: state.index === 0 ? this.corols.length - 1 : state.index - 1
    }));
  }

  next() {
    this.setState(state => ({
      index: this.corols.length - 1 === state.index ? 0 : state.index + 1
    }));
  }

  render() {
    return (
      <div className="app">
        <Rect color={this.corols[this.state.index]} />
        <NavBar
          color={this.corols[this.state.index]}
          prev={this.prev.bind(this)}
          next={this.next.bind(this)}
        />
      </div>
    );
  }
}
