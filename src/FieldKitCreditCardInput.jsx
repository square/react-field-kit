const React = require('react');
const assign = require('object-assign');
const FieldKit = require('field-kit');
const FieldKitInput = require('./FieldKitInput.jsx');

class FieldKitCreditCardInput extends FieldKitInput {
  constructor() {
    super();
  }

  componentDidMount() {
    super();

    if (this.props.cardMaskStrategy) {
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
    if (cardType !== this.state.cardType) {
      this.setState({ cardType });
      this.props.cardTypeDidChange(cardType);
    }
    super(field);
  }

  getField() {
    return new FieldKit.CardTextField(this.getElement());
  }
}


FieldKitCreditCardInput.propTypes = assign(FieldKitInput.getBasePropTypes() , {
  // CreditCardInput Specific
  cardMaskStrategy: React.PropTypes.bool,
  cardTypeDidChange: React.PropTypes.func
});

FieldKitCreditCardInput.defaultProps = assign(FieldKitInput.getBaseDefaultProps(), {
  // CreditCardInput Specific
  cardTypeDidChange: () => {}
});

module.exports = FieldKitCreditCardInput;
