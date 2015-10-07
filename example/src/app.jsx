const React = require('react');
const Input1 = require('./Input1.jsx');
const Input2 = require('./Input2.jsx');
const Input3 = require('./Input3.jsx');
const Input4 = require('./Input4.jsx');

const App = React.createClass({
  render: function() {
    return (
      <div>
        <h2>TextField</h2>
        <Input1 />

        <h2>CreditCardField</h2>
        <Input2 />

        <h2>ExpiryDateField</h2>
        <Input3 />

        <h2>SocialSecurityNumberField</h2>
        <Input4 />
      </div>
    )
  }
});

React.render(<App />, document.body);
