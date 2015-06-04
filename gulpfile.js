var gulp       = require('gulp'),
    uglify     = require('gulp-uglify'),
    minifyCss  = require('gulp-minify-css'),
    concat     = require('gulp-concat'),
    rename     = require("gulp-rename"),
    sourcemaps = require('gulp-sourcemaps'),
    rimraf     = require('gulp-rimraf'),
    zip        = require('gulp-zip');

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

gulp.task('del-zip', function ()
{
    return gulp.src('dist/*.zip', {read : false})
        .pipe(rimraf());
});

gulp.task('zip', function ()
{
    return gulp.src('dist/*/**')
        .pipe(zip('materialize-tags.zip'))
        .pipe(gulp.dest('dist'));
});

gulp.task('build', ['css', 'js', 'zip']);