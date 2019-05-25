import React from "react";

const TemperatureInput: React.FunctionComponent<{
  scale: "c" | "f";
  temperature: string;
  onTemperatureChange: (input: string) => void;
}> = ({ scale, temperature, onTemperatureChange }) => {
  const scaleNames = { c: "Celsius", f: "Fahrenheit" };
  return (
    <fieldset>
      <legend>Enter temperature in {scaleNames[scale]}:</legend>
      <input
        value={temperature}
        onChange={e => onTemperatureChange(e.target.value)}
      />
    </fieldset>
  );
};

const BoilingVerdict: React.FunctionComponent<{ celsius: number }> = ({
  celsius
}) => (
  <p>
    {100 <= celsius ? "The water would boil." : "The water would not boil."}
  </p>
);

export { TemperatureInput, BoilingVerdict };
