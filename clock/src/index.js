import React, { Component } from 'react';
import ReactDOM from 'react-dom';


class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.setState({ date: new Date() }), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  render() {
    return <h1>It’s {this.state.date.toLocaleTimeString()}.</h1>;
  }
}


ReactDOM.render(<Clock />, document.getElementById('root'));