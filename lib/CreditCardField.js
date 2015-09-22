'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var assign = require('object-assign');
var FieldKit = require('field-kit');
var TextField = require('./TextField.jsx');

var CreditCardField = (function (_TextField) {
  _inherits(CreditCardField, _TextField);

  function CreditCardField() {
    _classCallCheck(this, CreditCardField);

    _get(Object.getPrototypeOf(CreditCardField.prototype), 'constructor', this).call(this);
  }

  _createClass(CreditCardField, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      _get(Object.getPrototypeOf(CreditCardField.prototype), 'componentDidMount', this).call(this);

      if (this.props.cardMaskStrategy) {
        this.field.setCardMaskStrategy(FieldKit.CardTextField.CardMaskStrategy.DoneEditing);
      }

      this.setState({
        cardType: this.field.cardType()
      });
    }
  }, {
    key: 'onChange',
    value: function onChange(field) {
      var cardType = field.cardType();
      if (cardType !== this.state.cardType) {
        this.setState({ cardType: cardType });
        this.props.cardTypeDidChange(cardType);
      }
      _get(Object.getPrototypeOf(CreditCardField.prototype), 'onChange', this).call(this, field);
    }
  }, {
    key: 'getField',
    value: function getField() {
      return new FieldKit.CardTextField(this.getElement());
    }
  }]);

  return CreditCardField;
})(TextField);

CreditCardField.propTypes = assign(TextField.getBasePropTypes(), {
  // CreditCardInput Specific
  cardMaskStrategy: React.PropTypes.bool,
  cardTypeDidChange: React.PropTypes.func
});

CreditCardField.defaultProps = assign(TextField.getBaseDefaultProps(), {
  // CreditCardInput Specific
  cardTypeDidChange: function cardTypeDidChange() {}
});

module.exports = CreditCardField;