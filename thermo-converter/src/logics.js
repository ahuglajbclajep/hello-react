function tryConvert(temperature, convert) {
  const input = parseFloat(temperature);
  if (Number.isNaN(input)) return '';

  const output = convert(input);
  const rounded = Math.round(output * 1000) / 1000;
  return rounded.toString();
}

const toCelsius = f => tryConvert(f, f => (f - 32) * 5 / 9);
const toFahrenheit = c => tryConvert(c, c => (c * 9 / 5) + 32);

export { toCelsius, toFahrenheit };
