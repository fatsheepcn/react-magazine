var React = require('react');
var Router = require('react-router');

var Route = Router.Route;
var NotFoundRoute = Router.NotFoundRoute;
var DefaultRoute = Router.DefaultRoute;
var Redirect = Router.Redirect;

var App = require('./app');
var HomePage = require('../pages/HomePage');
var ListPage = require('../pages/ListPage');
var DetailPage = require('../pages/DetailPage');
var NotFoundPage = require('../pages/NotFoundPage');

module.exports = (
    <Route path='/' handler={App}>
        <DefaultRoute handler={HomePage} />
        <Redirect from='/' to='category' params={{catId: 18}} />
        <Route name='category' path='category/:catId' handler={ListPage} />
        <Route name='detail' path='detail/:detailId' handler={DetailPage} />
        <NotFoundRoute handler={NotFoundPage} />
    </Route>
);
