const React = require('react');
const SocialSecurityNumberField = require('../../src/SocialSecurityNumberField.jsx');

class SocialSecurityNumberInput extends React.Component {
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
                    focusedPlaceholder="111-11-1111"
                    onChange={this.onChange.bind(this)} />
        <p>RAW: {this.state.rawValue}</p>
        <p>FORMATTED: {this.state.formattedValue}</p>
      </div>
    )
  }
}

module.exports = SocialSecurityNumberInput;
