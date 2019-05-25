import React from "react";
import { TemperatureInput, BoilingVerdict } from "./components";
import { toCelsius, toFahrenheit } from "./lib";

type State = { scale: "c" | "f"; temperature: string };

export default class Converter extends React.Component<{}, State> {
  state = { scale: "c" as State["scale"], temperature: "" };

  handleCelsiusChange(temperature: string) {
    this.setState({ scale: "c", temperature });
  }

  handleFahrenheitChange(temperature: string) {
    this.setState({ scale: "f", temperature });
  }

  render() {
    const temperature = this.state.temperature;
    const celsius =
      this.state.scale === "c" ? temperature : toCelsius(temperature);
    const fahrenheit =
      this.state.scale === "f" ? temperature : toFahrenheit(temperature);

    return (
      <div>
        <TemperatureInput
          scale="c"
          temperature={celsius}
          onTemperatureChange={this.handleCelsiusChange.bind(this)}
        />
        <TemperatureInput
          scale="f"
          temperature={fahrenheit}
          onTemperatureChange={this.handleFahrenheitChange.bind(this)}
        />
        <BoilingVerdict celsius={Number.parseFloat(celsius)} />
      </div>
    );
  }
}
