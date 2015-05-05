'use strict';

var gulp = require('gulp');
var config = require('../config');

gulp.task('copyHtml', function() {
    gulp.src(config.sourceDir + '*.html')
    .pipe(gulp.dest(config.buildDir));
});
