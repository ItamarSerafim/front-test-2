'use strict';

var gulp = require('gulp'),
    plumber = require('gulp-plumber'),
    sourcemaps = require('gulp-sourcemaps'),
    concat = require('gulp-concat'),
    rename = require('gulp-rename'),
    scss = require('gulp-sass');

gulp.task('scss', () => {
    gulp.src('client/sass/style.scss')
    .pipe(plumber())
    .pipe(sourcemaps.init())
    .pipe(scss({outputStyle: 'compressed'})
        .on('error', scss.logError))
    .pipe(sourcemaps.write())
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('client/dist/css/'));
});

gulp.task('watch', () => {
    gulp.watch('client/sass/style.scss', ['scss']);
})

gulp.task('default', ['scss', 'watch']);