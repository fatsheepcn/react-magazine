'use strict';

var gulp = require('gulp');
var gulpif = require('gulp-if');
var gutil = require('gulp-util');
var source = require('vinyl-source-stream');
var streamify = require('gulp-streamify');  //Wrap old Gulp plugins to support streams
var sourcemaps = require('gulp-sourcemaps');
var rename = require('gulp-rename');
var watchify = require('watchify');
var browserify = require('browserify');
var babelify = require('babelify');
var uglify = require('gulp-uglify');
var browserSync = require('browser-sync');
var debowerify = require('debowerify');
var handleErrors = require('../util/handle-errors');
var config = require('../config');

function buildScript(file, watch) {

    var bundler = browserify({
        entries: [config.sourceDir + file],
        debug: !global.isProd,
        cache: {}, // required for watchify
        packageCache: {}, // required for watchify
        fullPaths: true // required to be true only for watchify
    });

    if (watch) {
        bundler = watchify(bundler);
        bundler.on('update', function(){
            rebundle();
        });
    }

    // transform ES6, JSX
    bundler.transform(babelify);
    // transform bower components to browserify components
    bundler.transform(debowerify);

    function rebundle() {
        // bundle the files and their dependencies into a single javascript file
        var stream = bundler.bundle();

        gutil.log('Bundle...');

        return stream.on('error', handleErrors)
        .pipe(source(file))
        .pipe(gulpif(global.isProd, streamify(uglify())))
        .pipe(streamify(rename({
            basename: 'bundle'
        })))
        .pipe(gulpif(!global.isProd, sourcemaps.write('./')))
        .pipe(gulp.dest(config.scripts.dest))
        .pipe(gulpif(browserSync.active, browserSync.reload({stream: true, once: true})));
    }

    return rebundle();
}

gulp.task('browserify', function(){
    return buildScript('app.js', !global.isProd);
});
