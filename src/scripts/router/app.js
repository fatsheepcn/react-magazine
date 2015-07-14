var React = require('react');
var Reflux = require('reflux');
var RouteHandler = require('react-router').RouteHandler;

var Header = require('./components/header');
var Footer = require('./components/footer');

var App = React.createClass({
    mixins: [Reflux.ListenerMixin],

    getInitialState: function() {
        return {

        };
    },

    componentWillMount:function() {
        console.log('About to mount App');
    },

    componentDidMount: function() {

    },

    render: function() {
        return (
            <Header />
            <RouteHandler params={this.props.params} query={this.props.query} />
            <Footer />
        );
    }
});

module.exports = App;
