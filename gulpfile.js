var gulp         = require('gulp'),
    minifyCss    = require('gulp-clean-css'),
    concat       = require('gulp-concat'),
    rename       = require("gulp-rename"),
    rimraf       = require('gulp-rimraf'),
    sass         = require("gulp-sass"), // https://www.npmjs.org/package/gulp-sass
    sourcemaps   = require('gulp-sourcemaps'),
    uglify       = require('gulp-uglify'),
    util         = require("gulp-util"), // https://github.com/gulpjs/gulp-util
    zip          = require('gulp-zip');

gulp.task('js', function ()
{
    // place code for your default task here
    return gulp.src('src/*.js')
        .pipe(gulp.dest('dist/js'))
        .pipe(sourcemaps.init())
        .pipe(uglify())
        .pipe(rename({
            extname : '.min.js'
        }))
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest('dist/js'));
});

gulp.task('css', function ()
{
    // place code for your default task here
    return gulp.src('src/*.css')
        .pipe(gulp.dest('dist/css'))
        .pipe(sourcemaps.init())
        .pipe(minifyCss({compatibility : 'ie8'}))
        .pipe(rename({
            extname : '.min.css'
        }))
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest('dist/css'));
});

gulp.task('docs', ['css', 'js'], function ()
{
    // place code for your default task here
    return gulp.src('dist/*/**')
        .pipe(gulp.dest('docs/assets/plugins/materialize-tags'))
});

gulp.task('zip', ['css', 'js', 'docs'], function ()
{
    return gulp.src('dist/*/**')
        .pipe(zip('materialize-tags.zip'))
        .pipe(gulp.dest('dist'));
});


gulp.task('build', ['css', 'js', 'docs', 'zip']);
