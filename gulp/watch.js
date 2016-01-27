'use strict';

var path = require('path');

var gulp = require('gulp');

var paths = gulp.paths;

var runSequence = require('run-sequence');

var browserSync = require('browser-sync');

function isOnlyChange(event) {
    return event.type === 'changed';
}

gulp.task('watch', ['watch:init'], function () {

    gulp.watch([path.join(paths.src, '/**/**.html'), 'bower.json'], ['inject']);

    gulp.watch(path.join(paths.src, '/**/*.css'), ['styles']);

    gulp.watch(path.join(paths.src, '/**/*.js'), function(event) {
        if(!isOnlyChange(event)) {
            gulp.start('inject');
        }
    });

    gulp.watch(path.join(paths.src, '/**/*.tmpl.html'), function (event) {
        browserSync.reload(event.path);
    });

});

gulp.task('watch:init', function () {
    runSequence('clean:css', 'styles:css', 'inject');
});