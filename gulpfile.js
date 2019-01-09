const gulp = require('gulp');
const babel = require('gulp-babel');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const sourcemaps = require('gulp-sourcemaps');
const stylus = require('gulp-stylus');
const livereload = require('gulp-livereload');
const del = require('del');

gulp.task('transpile', function() {
    del.sync('dist');
    return gulp.src('src/**/*.js')
        .pipe(babel({presets: ['@babel/env']}))
        .pipe(gulp.dest('dist'))
});

gulp.task('script', function() {
    del.sync('./public/scripts/dist.js');
    return gulp.src('./public/scripts/**/*.js', {base: './public/scripts'})
        .pipe(sourcemaps.init())
        .pipe(babel({presets: ['@babel/env']}))
        .pipe(concat('dist.js'))
        .pipe(uglify())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('./public/scripts/'))
        .pipe(livereload())
});

gulp.task('stylus', function() {
    return gulp.src('public/stylesheets/**/*.styl', {base: './public/stylesheets'})
        .pipe(stylus({compress: true}))
        .pipe(concat('dist.css'))
        .pipe(gulp.dest('public/stylesheets/'))
        .pipe(livereload())
});

gulp.task('watch-public', function() {
    livereload.listen();
    gulp.watch('public/stylesheets/**/*.styl', gulp.series('stylus'));
    gulp.watch('public/scripts/**/!(dist.js).js', gulp.series('script'));
    gulp.watch('public/views/**/*.hbs').on('change', function(file) {
        livereload.reload(file);
    });
});
