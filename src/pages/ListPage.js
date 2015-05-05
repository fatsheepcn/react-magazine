var React = require('react');
var Route = require('react-route');
var InfiniteList = require('../components/infiniteList');

var ListPage = React.createClass({
    mixins: [Router.State],

    render: function(){
        return (
            <InfiniteList
                items={this.props.store}
                loadMorePromise={this.pros.loadMorePromise(this.getParams().catId)}
                threshold={100} />
        );
    }
});
