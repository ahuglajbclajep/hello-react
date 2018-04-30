import React, { Component } from 'react';
import './style.css';

const corols = ['red', 'blue', 'yellow'];

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { color: 0 };
  }

  prev() {
    this.setState(state => ({ color: state.color <= 0 ? corols.length - 1 : state.color - 1 }));
  }

  next() {
    this.setState(state => ({ color: corols.length - 1 <= state.color ? 0 : state.color + 1 }));
  }

  render() {
    return (
      <div className='app'>
        <Canvas color={this.state.color} />
        <Controller color={this.state.color} prev={this.prev.bind(this)} next={this.next.bind(this)} />
      </div>
    );
  }
}

function Canvas(props) {
  return (
    <div className='canvas' style={{ backgroundColor: corols[props.color] }}></div>
  );
}

function Controller(props) {
  return (
    <nav>
      <button onClick={props.prev}>&laquo;</button>
      {corols[props.color]}
      <button onClick={props.next}>&raquo;</button>
    </nav>
  );
}
