'use strict';

var gulp = require('gulp');
var config = require('../config');

// Copy fake API data
gulp.task('copyData', function(){
    gulp.src(config.sourceDir + 'assets/data/**/*')
    .pipe(gulp.dest(config.buildDir + 'assets/data/'));
});
