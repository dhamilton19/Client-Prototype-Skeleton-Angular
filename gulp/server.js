'use strict';

var gulp = require('gulp');

var paths = gulp.paths;

var port = gulp.port;

var browserSync = require('browser-sync');

function browserSyncInit(baseDir, files, browser) {
    browser = browser === undefined ? 'default' : browser;

    browserSync.instance = browserSync.init(files, {
        startPath: '/',
        server: {
            baseDir: baseDir,
            routes: {
                '/bower_components': 'bower_components'
            }
        },
        port: port,
        browser: browser
    });
}

gulp.task('serve', ['watch'], function () {
    browserSyncInit([
        paths.tmp + '/app',
        paths.src
    ],[
            paths.tmp + '/app/**/*.css',
            paths.src + '/**/*.js',
            paths.tmp + '/app/**/*.html',
            paths.src + '/**/*.tmpl.html'
        ]);
});