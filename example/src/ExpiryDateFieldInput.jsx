const React = require('react');
const ExpiryDateField = require('../../src/ExpiryDateField.jsx');

class ExpiryDateFieldInput extends React.Component {
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
        <ExpiryDateField value={this.state.rawValue}
                                 unfocusedPlaceholder="Expiration Date"
                                 focusedPlaceholder="11/22"
                                 onChange={this.onChange.bind(this)} />
        <p>RAW: {this.state.rawValue}</p>
        <p>FORMATTED: {this.state.formattedValue}</p>
      </div>
    )
  }
}

module.exports = ExpiryDateFieldInput;
