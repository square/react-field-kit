const React = require('react');
const Input1 = require('./Input1.jsx');
const Input2 = require('./Input2.jsx');
const Input3 = require('./Input3.jsx');

const App = React.createClass({
  render: function() {
    return (
      <div>
        <Input1 />
        <Input2 />
        <Input3 />
      </div>
    )
  }
});

React.render(<App />, document.body);
