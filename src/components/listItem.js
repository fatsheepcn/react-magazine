var React = require('react');

var ListItem = React.createClass({
    onClickHandler: function (id) {
        this.props.onItemClick(id);
    },
    render: function () {
        return (
            <div className="list-item" key={this.props.item.id} onClick={this.onClickHandler.bind(this, this.props.item.id)}>
                <div className="list-item-pic" data-src={this.props.items.pic}></div>
                <div className="list-item-title">{this.props.item.title}</div>
                <div className="list-item-summary">{this.props.item.summary}</div>
                <div className="list-item-info">
                    <span className="list-item-pubdate">{this.props.item.pubDate}</div>
                    <span className="list-item-source">{this.props.item.source}</div>
                </div>
            </div>
        );
    }
});

module.exports = ListItem;
