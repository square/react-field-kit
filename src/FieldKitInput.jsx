const React = require('react');
const FieldKit = require('field-kit');

var FieldKitInput = React.createClass({
  propTypes: {
    rawValue: React.PropTypes.string,
    value: React.PropTypes.string,
    onChange: React.PropTypes.func,
    didBeginEditing: React.PropTypes.func,
    didEndEditing: React.PropTypes.func,
    onBlur: React.PropTypes.func
  },

  getDefaultProps: function() {
    return {
      onBlur: function() {},
      didBeginEditing: function() {},
      didEndEditing: function() {}
    };
  },

  componentDidMount: function() {
    this.field = new FieldKit.CardTextField(React.findDOMNode(this));
    this.field.setValue(this.props.value);
    this.setupEvents();
  },

  setupEvents: function() {
    this.field.setDelegate({
      textFieldDidBeginEditing: this.props.didBeginEditing,
      textFieldDidEndEditing: this.props.didEndEditing,
      textDidChange: function(field) {
        // Update component value
        this.props.rawValue = field.value();

        if(this.props.onChange) this.props.onChange(field);
      }.bind(this)
    });
  },

  render: function() {
    return (
      <input type="text"
             onBlur={this.props.onBlur} />
    );
  },
});

module.exports = FieldKitInput;
