const React = require('react');
const assign = require('object-assign');
const FieldKit = require('field-kit');
const TextField = require('./TextField.jsx');

class CreditCardField extends TextField {
  constructor() {
    super();
  }

  componentDidMount() {
    super.componentDidMount();

    if(this.props.cardMaskStrategy) {
      this.field.setCardMaskStrategy(
        FieldKit.CardTextField.CardMaskStrategy.DoneEditing
      );
    }

    this.setState({
      cardType: this.field.cardType()
    });
  }

  onChange(field) {
    const cardType = field.cardType();
    if(cardType !== this.state.cardType) {
      this.setState({ cardType });
      this.props.cardTypeDidChange(cardType);
    }
    super.onChange(field);
  }

  getField() {
    return new FieldKit.CardTextField(this.getElement());
  }
}

CreditCardField.propTypes = assign(TextField.getBasePropTypes() , {
  // CreditCardInput Specific
  cardMaskStrategy: React.PropTypes.bool,
  cardTypeDidChange: React.PropTypes.func
});

CreditCardField.defaultProps = assign(TextField.getBaseDefaultProps(), {
  // CreditCardInput Specific
  cardTypeDidChange: () => {}
});

module.exports = CreditCardField;
