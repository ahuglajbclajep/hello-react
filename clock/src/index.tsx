import React from "react";
import ReactDOM from "react-dom";

class Clock extends React.Component<{}, { date: Date }> {
  private timerID?: number;
  state = { date: new Date() };

  componentDidMount() {
    this.timerID = window.setInterval(
      () => this.setState({ date: new Date() }),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  render() {
    return <h1>It’s {this.state.date.toLocaleTimeString()}.</h1>;
  }
}

ReactDOM.render(<Clock />, document.getElementById("root"));
