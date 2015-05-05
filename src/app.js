var React = require('react');
var Router = require('react-router');
var store = require('./stores');
var routes = require('./routes');

var storeData = store.data;

Router.run(routes, Route.HistoryLocation, function (Handler, state){
    state.routes.filter(function (route){
        return !!route.handler.fetchData;
    }).map(function (route){
        return route.handler.fetchData(state.params);
    });

    storeData.on('update', function(){
        React.render(<Handler store={storeData} />, document.body);
    })
})
