const React = require('react');
const FieldKit = require('field-kit');

class TextField extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    this.buildFieldKitField();
    this.field.setValue(this.props.value);

    this.setUpPlaceholders();

    this.setupEvents();
  }

  buildFieldKitField() {
    const field = this.getField();

    if (field) {
      this.field = field;
    } else {
      const formatter = this.getFormatter();
      if (formatter) {
        this.field = new FieldKit.TextField(this.getElement(), formatter);
      } else {
        this.field = new FieldKit.TextField(this.getElement());
      }
    }

    return this.field;
  }

  setUpPlaceholders() {
    if (this.props.placeholder || this.props.unfocusedPlaceholder) {
      this.field.setUnfocusedPlaceholder(this.props.placeholder || this.props.unfocusedPlaceholder);
    }

    if (this.props.focusedPlaceholder) {
      this.field.setFocusedPlaceholder(this.props.focusedPlaceholder);
    }
  }

  setupEvents() {
    this.field.setDelegate({
      textFieldDidBeginEditing: this.props.didBeginEditing,
      textFieldDidEndEditing: this.props.didEndEditing,
      textDidChange: this.onChange.bind(this)
    });
  }

  getField() {
    // Allows subclasses to override
    return null;
  }

  getFormatter() {
    // Allows subclasses to override
    return null;
  }

  getElement() {
    return React.findDOMNode(this);
  }

  onChange(field) {
    // Update component value
    this.props.rawValue = field.value();

    if(this.props.onChange) setTimeout(() => this.props.onChange(field));
  }

  render() {
    return (
      <input type="text"
             onBlur={this.props.onBlur.bind(this)} />
    );
  }

  // Helper method for subclasses
  static getBasePropTypes() {
    return {
      rawValue: React.PropTypes.string,
      value: React.PropTypes.string,
      placeholder: React.PropTypes.string,
      focusedPlaceholder: React.PropTypes.string,
      unfocusedPlaceholder: React.PropTypes.string,
      onChange: React.PropTypes.func,
      didBeginEditing: React.PropTypes.func,
      didEndEditing: React.PropTypes.func,
      onBlur: React.PropTypes.func
    }
  }

  // Helper method for subclasses
  static getBaseDefaultProps() {
    return {
      onBlur: () => {},
      didBeginEditing: () => {},
      didEndEditing: () => {}
    }
  }
}

TextField.propTypes = TextField.getBasePropTypes();

TextField.defaultProps = TextField.getBaseDefaultProps();

module.exports = TextField;
