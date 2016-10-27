var gulp = require('gulp');
var mainBowerFiles = require('main-bower-files');

gulp.task('copy-bower', function() {
    return
        gulp.src(mainBowerFiles(), {
            base: '../bower_components'
        })
        .pipe(gulp.dest('../src/vendor'));
});

gulp.task('default', ['copy-bower']);
