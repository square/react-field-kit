'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var FieldKit = require('field-kit');

var TextField = (function (_React$Component) {
  _inherits(TextField, _React$Component);

  function TextField() {
    _classCallCheck(this, TextField);

    _get(Object.getPrototypeOf(TextField.prototype), 'constructor', this).call(this);
  }

  _createClass(TextField, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.buildFieldKitField();
      this.field.setValue(this.props.value);

      this.setUpPlaceholders();

      this.setupEvents();
    }
  }, {
    key: 'buildFieldKitField',
    value: function buildFieldKitField() {
      var field = this.getField();

      if (field) {
        this.field = field;
      } else {
        var formatter = this.getFormatter();
        if (formatter) {
          this.field = new FieldKit.TextField(this.getElement(), formatter);
        } else {
          this.field = new FieldKit.TextField(this.getElement());
        }
      }

      return this.field;
    }
  }, {
    key: 'setUpPlaceholders',
    value: function setUpPlaceholders() {
      if (this.props.placeholder || this.props.unfocusedPlaceholder) {
        this.field.setUnfocusedPlaceholder(this.props.placeholder || this.props.unfocusedPlaceholder);
      }

      if (this.props.focusedPlaceholder) {
        this.field.setFocusedPlaceholder(this.props.focusedPlaceholder);
      }
    }
  }, {
    key: 'setupEvents',
    value: function setupEvents() {
      this.field.setDelegate({
        textFieldDidBeginEditing: this.props.didBeginEditing,
        textFieldDidEndEditing: this.props.didEndEditing,
        textDidChange: this.onChange.bind(this)
      });
    }
  }, {
    key: 'getField',
    value: function getField() {
      // Allows subclasses to override
      return null;
    }
  }, {
    key: 'getFormatter',
    value: function getFormatter() {
      // Allows subclasses to override
      return null;
    }
  }, {
    key: 'getElement',
    value: function getElement() {
      return React.findDOMNode(this);
    }
  }, {
    key: 'onChange',
    value: function onChange(field) {
      var _this = this;

      // Update component value
      this.props.rawValue = field.value();

      if (this.props.onChange) setTimeout(function () {
        return _this.props.onChange(field);
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement('input', { type: 'text',
        onBlur: this.props.onBlur.bind(this) });
    }

    // Helper method for subclasses
  }], [{
    key: 'getBasePropTypes',
    value: function getBasePropTypes() {
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
      };
    }

    // Helper method for subclasses
  }, {
    key: 'getBaseDefaultProps',
    value: function getBaseDefaultProps() {
      return {
        onBlur: function onBlur() {},
        didBeginEditing: function didBeginEditing() {},
        didEndEditing: function didEndEditing() {}
      };
    }
  }]);

  return TextField;
})(React.Component);

TextField.propTypes = TextField.getBasePropTypes();

TextField.defaultProps = TextField.getBaseDefaultProps();

module.exports = TextField;