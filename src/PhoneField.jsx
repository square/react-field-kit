const React = require('react');
const assign = require('object-assign');
const FieldKit = require('field-kit');
const TextField = require('./TextField.jsx');

class PhoneField extends TextField {
  getFormatter() {
    return new FieldKit.PhoneFormatter();
  }
}

PhoneField.propTypes = TextField.getBasePropTypes();

PhoneField.defaultProps = TextField.getBaseDefaultProps();

module.exports = PhoneField;
