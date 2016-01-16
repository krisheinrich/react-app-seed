var React = require('react');
var ListItem = React.createClass({
  render: function() {    /* The 'render' property in a React class specifies the HTML components to
                             be generated with the React.render() function call. */
    return (
      <li>
        <h4>{this.props.item}</h4>    {/* Inject data from 'props' object, which references the
                                         HTML attributes of the 'ListItem' element in the JSX code. */}
      </li>
    );
  }
});

module.exports = ListItem;
/* This way, requiring the ListItem file in the List file references the React class,
   enhansing modularity. */
