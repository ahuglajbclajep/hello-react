import React from "react";

const Rect: React.FunctionComponent<{ color: string }> = ({ color }) => (
  <div className="rect" style={{ backgroundColor: color }} />
);

const NavBar: React.FunctionComponent<{
  color: string;
  prev: (e: React.MouseEvent<HTMLButtonElement>) => void;
  next: (e: React.MouseEvent<HTMLButtonElement>) => void;
}> = ({ color, prev, next }) => (
  <nav>
    <button onClick={prev}>&laquo;</button>
    {color}
    <button onClick={next}>&raquo;</button>
  </nav>
);

type State = { index: number };

export default class App extends React.Component<{}, State> {
  private corols = ["red", "blue", "yellow"];
  state = { index: 0 };

  prev() {
    this.setState(({ index }) => ({
      index: index === 0 ? this.corols.length - 1 : index - 1
    }));
  }

  next() {
    this.setState(({ index }) => ({
      index: this.corols.length - 1 === index ? 0 : index + 1
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
