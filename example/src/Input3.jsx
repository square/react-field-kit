const React = require('react');
const FieldKitExpiryDateInput = require('../../src/FieldKitExpiryDateInput.jsx');

class Input3 extends React.Component {
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
        <FieldKitExpiryDateInput value={this.state.rawValue}
                                 unfocusedPlaceholder="Expiration Date"
                                 focusedPlaceholder="11/22"
                                 onChange={this.onChange.bind(this)} />
        <p>RAW: {this.state.rawValue}</p>
        <p>FORMATTED: {this.state.formattedValue}</p>
      </div>
    )
  }
}

module.exports = Input3;
