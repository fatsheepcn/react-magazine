var Baobab = require('baobab');
var Promise = require('native-promise-only');
var listStore = require('./listStore');
var detailStore = require('./detailStore');

var appStore = {
    list: list,
    detail: detail
};

var store = new Baobab(appStore);

module.exports = {
    data: store
};
