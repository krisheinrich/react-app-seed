var React = require('react');
var ReactDOM = require('react-dom');
var List = require('./components/List.jsx');    // Import non-npm (local) module

ReactDOM.render(<List />, document.getElementById('items'));
