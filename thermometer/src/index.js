import React from 'react';
import ReactDOM from 'react-dom';

function BoilingVerdict(props) {
  const verdict = 100 <= props.celsius ?
      'The water would boil.' : 'The water would not boil.';

  return <p>{verdict}</p>;
}

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {temperature: ''};
  }

  handleChange(e) {
    this.setState({temperature: e.target.value});
  }

  render() {
    const temperature = this.state.temperature;

    return (
      <fieldset>
        <legend>Enter temperature in Celsius:</legend>
        <input value={temperature} onChange={this.handleChange.bind(this)} />
        <BoilingVerdict celsius={parseFloat(temperature)} />
      </fieldset>
    );
  }
}

ReactDOM.render(<Calculator />, document.getElementById('root'));
