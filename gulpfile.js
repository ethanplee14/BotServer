const gulp = require('gulp');
const babel = require('gulp-babel');
const del = require('del');

gulp.task('default', function() {
    del.sync('dist');
    return gulp.src('src/**/*.js')
        .pipe(babel())
        .pipe(gulp.dest('dist'))
});
