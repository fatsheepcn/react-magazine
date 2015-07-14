var ajax = require('../util.ajax');
var convert = require('./convert');
var locale = "ru-ru";

var api = {
    "dev": {
        'searchList':'/admin/api/infostream/search.json?lc='+i18nSettings.locale||'zh-cn',
        'detail':'/admin/api/infostream/weibo.json?lc='+i18nSettings.locale||'zh-cn',
        // 'detail':'data/detail.json',
        'pushInfo': '/admin/api/infostream/topic.json?lc='+i18nSettings.locale||'zh-cn',
        //'pushInfo': '../data/push.json',
        'list':'/admin/api/infostream/latest.json?lc='+i18nSettings.locale||'zh-cn',
        'hotList':'/admin/api/infostream/list.json?lc='+i18nSettings.locale||'zh-cn',
        // 'related':'/yule_detail/related',
        'related':'/admin/api/infostream/relevance.json?lc='+i18nSettings.locale||'zh-cn',
        'top':'/admin/api/infostream/top.json?lc='+i18nSettings.locale||'zh-cn',
        'feedBack':'/admin/track/feedback.html?lc='+i18nSettings.locale||'id-id',
        'relatedGallary':'/admin/api/infostream/tab/infos.json?lc='+i18nSettings.locale||'zh-cn',
        // 'searchList':'/api/infostream/search.json',
        // 'detail':'/api/infostream/weibo.json',
        // 'list':'/api/infostream/latest.json',
        // 'hotList':'/api/infostream/list.json',
        'relatedNews':'/relevance/list.json'
    },
    "test": {

    },
    "online": {
        'searchList':'/api/infostream/search.json?lc='+locale||'zh-cn',
        'detail':'/api/infostream/weibo.json?lc='+locale||'zh-cn',
        'pushInfo': '/api/infostream/topic.json?lc='+locale||'zh-cn',
        'list':'/api/infostream/latest.json?lc='+locale||'zh-cn',
        'hotList':'/api/infostream/list.json?lc='+locale||'zh-cn',
        'relatedNews':'/relevance/list.json?lc='+locale||'zh-cn',
        'related':'/api/infostream/relevance.json?lc='+locale||'zh-cn',
        'top':'/api/infostream/top.json?lc='+locale||'zh-cn',
        'feedBack':'/track/feedback.html?lc='+locale||'id-id',
        'relatedGallary':'/api/infostream/tab/infos.json?lc='+locale||'zh-cn'
    }
}

