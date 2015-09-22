const React = require('react');
const assign = require('object-assign');
const FieldKit = require('field-kit');
const FieldKitInput = require('./FieldKitInput.jsx');

class FieldKitExpiryDateInput extends FieldKitInput {
  constructor() {
    super();
  }

  getField() {
    return new FieldKit.ExpiryDateField(this.getElement());
  }
}


FieldKitExpiryDateInput.propTypes = FieldKitInput.getBasePropTypes();

FieldKitExpiryDateInput.defaultProps = FieldKitInput.getBaseDefaultProps();

module.exports = FieldKitExpiryDateInput;
