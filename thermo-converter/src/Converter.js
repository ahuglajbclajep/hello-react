import React, { Component } from 'react';
import { toCelsius, toFahrenheit } from './logics';


export default class Converter extends Component {
  constructor(props) {
    super(props);
    this.state = { scale: 'c', temperature: '' };
  }

  handleCelsiusChange(temperature) {
    this.setState({ scale: 'c', temperature });
  }

  handleFahrenheitChange(temperature) {
    this.setState({ scale: 'f', temperature });
  }

  render() {
    const scale = this.state.scale;
    const temperature = this.state.temperature;
    const celsius = scale === 'c' ? temperature : toCelsius(temperature);
    const fahrenheit = scale === 'f' ? temperature : toFahrenheit(temperature);

    return (
      <div>
        <TemperatureInput
          scale='c'
          temperature={celsius}
          onTemperatureChange={this.handleCelsiusChange.bind(this)} />
        <TemperatureInput
          scale='f'
          temperature={fahrenheit}
          onTemperatureChange={this.handleFahrenheitChange.bind(this)} />
        <BoilingVerdict celsius={parseFloat(celsius)} />
      </div>
    );
  }
}

function TemperatureInput(props) {
  const scaleNames = {
    c: 'Celsius',
    f: 'Fahrenheit'
  };

  return (
    <fieldset>
      <legend>Enter temperature in {scaleNames[props.scale]}:</legend>
      <input
        value={props.temperature}
        onChange={e => props.onTemperatureChange(e.target.value)} />
    </fieldset>
  );
}

function BoilingVerdict(props) {
  const verdict = 100 <= props.celsius ?
      'The water would boil.' : 'The water would not boil.';

  return <p>{verdict}</p>;
}
