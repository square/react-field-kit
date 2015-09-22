const React = require('react');
const assign = require('object-assign');
const FieldKit = require('field-kit');
const TextField = require('./TextField.jsx');

class ExpiryDateField extends TextField {
  constructor() {
    super();
  }

  getField() {
    return new FieldKit.ExpiryDateField(this.getElement());
  }
}


ExpiryDateField.propTypes = TextField.getBasePropTypes();

ExpiryDateField.defaultProps = TextField.getBaseDefaultProps();

module.exports = ExpiryDateField;
