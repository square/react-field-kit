const React = require('react');
const assign = require('object-assign');
const FieldKit = require('field-kit');
const TextField = require('./TextField.jsx');

class SocialSecurityNumberField extends TextField {
  getFormatter() {
    return new FieldKit.SocialSecurityNumberFormatter();
  }
}

SocialSecurityNumberField.propTypes = TextField.getBasePropTypes();

SocialSecurityNumberField.defaultProps = TextField.getBaseDefaultProps();

module.exports = SocialSecurityNumberField;
