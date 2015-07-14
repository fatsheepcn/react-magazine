var Promise = require('native-promise-only');
var _extend = require('lodash/object/assign');
var $ = require('zepto');

var Ajax = function(url, options){
    if (typeof url !== 'string' || url.trim() === '') {
        throw new Error('[Promise Ajax]: invalid url');
    }
    return new Promise(function(resolve, reject){
        options = _extend({
            url: url,
            success: function(data, textStatus, xhr){
                resolve({
                    data: data,
                    textStatus: textStatus,
                    xhr: xhr
                });
            },
            error: function(xhr, errorType, error){
                reject({
                    xhr: xhr,
                    errorType: errorType,
                    error: error
                });
            }
        }, options);

        $.ajax(options);
    });
};

Ajax.get = function(url, options){
    return Ajax(url, _extend({
        type: 'GET',
        traditional: true
        // dataType: 'json',
        // timeout: 60*1000
    }, options));
};

Ajax.post = function(url, options){
    return Ajax(url, _extend({
        type: 'POST'
    }, options));
};

Ajax.getJSON = function(url, options){
    return Ajax(url, _extend({
        type: 'GET',
        traditional: true,
        dataType: 'json'
    }, options));
};

module.exports = Ajax;
