var React = require('react');
var ListItem = require('./listItem');
var _throttle = require('lodash/function/throttle');

var InfiniteList = React.createClass({
    getInitialState: function(){
        return {
            loadingFlag: false
        }
    },
    componentDidMount: function(){
        // avoid excessively updating the position while scrolling
        window.addEventListener('scroll', _throttle(this.onScroll, 500, {'leading': true}));
    },
    onScroll: function(){
        // 窗口滚动条高度
        var scrollTop = 0;
        if(document.documentElement&&document.documentElement.scrollTop){
            scrollTop=document.documentElement.scrollTop;
        }else if(document.body){
            scrollTop=document.body.scrollTop;
        }

        // 窗口可视范围高度
        var clientHeight = 0;
        if(document.body.clientHeight&&document.documentElement.clientHeight){
            clientHeight = (document.body.clientHeight < document.documentElement.clientHeight)?document.body.clientHeight:document.documentElement.clientHeight;
        }else{
            clientHeight = (document.body.clientHeight > document.documentElement.clientHeight)?document.body.clientHeight:document.documentElement.clientHeight;
        }

        // 文档的总高度
        var scrollHeight = 0,
            bodyScrollHeight = 0,
            documentScrollHeight = 0;
        if(document.body){
            bodyScrollHeight = document.body.scrollHeight;
        }
        if(document.documentElement){
            documentScrollHeight = document.documentElement.scrollHeight;
        }
        scrollHeight = (bodyScrollHeight > documentScrollHeight)?bodyScrollHeight:documentScrollHeight;

        if ((scrollTop + clientHeight + this.props.threshold) > scrollHeight){
            if(!this.state.loadingFlag){
                this.setState({
                    loadingFlag:true
                });
                // setTimeout(this.loadMore, 3000);
                this.loadMore();
            }
        }
    },
    loadMore: function(){
        var self = this;
        if (this.isMouted()){
            this.props.loadMorePromise().then(function(){
                self.setState({
                    loadingFlag: false
                });
            });
        }
    },
    loader: function(){
        return (<div className="list-loading">Loading...</div>);
    },
    onItemClickHanlder: function(e){
        window.location.assign('http://www.baidu.com?from='+e);
    },
    render: function(){
        var InfiniteListNode = this.props.items.map(function (item) {
            return (<ListItem item={item} onItemClick={this.onItemClickHanlder(e)}/>);
        });

        var loader;

        if (this.state.loadingFlag){
            loader = this.loader;
        }

        return (
            <div className="infinite-list">{InfiniteListNode}{loader}</div>
        );
    }
});

module.exports = InfiniteList;
