var React = require('react'),
 ListItem = require('./ListItem.jsx');    // Import non-npm (local) module

var items = [ {id:1, text:"React"}        // test data array
            , {id:2, text:"is"}
            , {id:3, text:"Awesome!"} ];

var List = React.createClass({
  render: function() {
    var ListItems = items.map(
      item => {return <ListItem key={item.id} item={item.text} />}    // ES6
    );

    return (<ul>{ListItems}</ul>);    // Renders entire array of list items in <ul>
  }
});

module.exports = List;
