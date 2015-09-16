const React = require('react');
const FieldKitInput = require('./FieldKitInput.jsx');

const App = React.createClass({
  getInitialState: function() {
    return {
      rawValue: '',
      formattedValue: ''
    };
  },

  onChange: function(field) {
    this.setState({
      rawValue: field.value(),
      formattedValue: field.text()
    });
  },

  render: function() {
    return (
      <span>
        <FieldKitInput value={this.state.rawValue}
                       onChange={this.onChange} />
        <p>RAW: {this.state.rawValue}</p>
        <p>FORMATTED: {this.state.formattedValue}</p>
      </span>
    )
  }
});

React.render(<App />, document.body);
