import React from 'react';
import ReactDOM from 'react-dom';

function BoilingVerdict(props) {
  const verdict = 100 <= props.celsius ?
      'The water would boil.' : 'The water would not boil.';

  return <p>{verdict}</p>;
}

class TemperatureInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {temperature: ''};
  }

  handleChange(e) {
    this.setState({temperature: e.target.value});
  }

  render() {
    const scaleNames = {
      c: 'Celsius',
      f: 'Fahrenheit'
    };

    return (
      <fieldset>
        <legend>Enter temperature in {scaleNames[this.props.scale]}:</legend>
        <input
          value={this.state.temperature}
          onChange={this.handleChange.bind(this)}
        />
      </fieldset>
    );
  }
}

function Calculator() {
  return (
    <div>
      <TemperatureInput scale="c" />
      <TemperatureInput scale="f" />
    </div>
  );
}

ReactDOM.render(<Calculator />, document.getElementById('root'));
