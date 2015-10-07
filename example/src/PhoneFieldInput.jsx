const React = require('react');
const PhoneField = require('../../src/PhoneField.jsx');

class PhoneFieldInput extends React.Component {
  constructor() {
    super();
    this.state = this.getInitialState();
  }

  getInitialState() {
    return {
      rawValue: '',
      formattedValue: ''
    };
  }

  onChange(field) {
    this.setState({
      rawValue: field.value(),
      formattedValue: field.text()
    });
  }

  render() {
    return (
      <div>
        <PhoneField value={this.state.rawValue}
                    unfocusedPlaceholder="Phone Number"
                    focusedPlaceholder="(222) 333-4444"
                    onChange={this.onChange.bind(this)} />
        <p>RAW: {this.state.rawValue}</p>
        <p>FORMATTED: {this.state.formattedValue}</p>
      </div>
    )
  }
}

module.exports = PhoneFieldInput;
