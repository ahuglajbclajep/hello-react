const round = (num: number, digits = 0) => {
  const memo = Math.pow(10, digits);
  return Math.round(num * memo) / memo;
};

const tryConvert = (temperature: string, convert: (_: number) => number) => {
  const input = parseFloat(temperature);
  return Number.isNaN(input) ? "" : `${round(convert(input), 3)}`;
};

const fahrenheit2celsius = (f: number) => ((f - 32) * 5) / 9;
const celsius2fahrenheit = (c: number) => (c * 9) / 5 + 32;

const toCelsius = (f: string) => tryConvert(f, fahrenheit2celsius);
const toFahrenheit = (c: string) => tryConvert(c, celsius2fahrenheit);

export { toCelsius, toFahrenheit };
