const React = require('react');
const Input1 = require('./Input1.jsx');
const Input2 = require('./Input2.jsx');

const App = React.createClass({
  render: function() {
    return (
      <div>
        <Input1 />
        <Input2 />
      </div>
    )
  }
});

React.render(<App />, document.body);
