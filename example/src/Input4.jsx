const React = require('react');
const SocialSecurityNumberField = require('../../src/SocialSecurityNumberField.jsx');

class Input4 extends React.Component {
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
        <SocialSecurityNumberField value={this.state.rawValue}
                                   unfocusedPlaceholder="Social Security Number"
                                   focusedPlaceholder="123-45-6789"
                                   onChange={this.onChange.bind(this)} />
        <p>RAW: {this.state.rawValue}</p>
        <p>FORMATTED: {this.state.formattedValue}</p>
      </div>
    )
  }
}

module.exports = Input4;
