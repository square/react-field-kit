const React = require('react');
const TextFieldInput = require('./TextFieldInput.jsx');
const CreditCardFieldInput = require('./CreditCardFieldInput.jsx');
const ExpiryDateFieldInput = require('./ExpiryDateFieldInput.jsx');
const PhoneFieldInput = require('./PhoneFieldInput.jsx');

const App = React.createClass({
  render: function() {
    return (
      <div>
        <h2>TextField</h2>
        <TextFieldInput />

        <h2>CreditCardField</h2>
        <CreditCardFieldInput />

        <h2>ExpiryDateField</h2>
        <ExpiryDateFieldInput />

        <h2>PhoneField</h2>
        <PhoneFieldInput />
      </div>
    )
  }
});

React.render(<App />, document.body);
