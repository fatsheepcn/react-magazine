'use strict';

module.exports = {
    'serverport': 3333,

    'scripts': {
        'src': './src/**/*.js',
        'dest': './build/'
    },

    'images': {
        'src': './src/assets/images/**/*.{jpeg,jpg,png}',
        'dest': './build/assets/images/'
    },

    'fonts': {
        'src': './src/assets/fonts/**/*',
        'dest': './build/assets/fonts/'
    }

    'styles': {
        'src': './src/assets/styles/**/*.scss',
        'dest': './build/assets/css/'
    },

    'sourceDir': './src/',

    'buildDir': './build/'
};
