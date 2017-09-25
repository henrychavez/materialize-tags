var gulp         = require('gulp'),
    cleanCSS     = require('gulp-clean-css')
    concat       = require('gulp-concat'),
    header       = require('gulp-header');
    rename       = require("gulp-rename"),
    rimraf       = require('gulp-rimraf'),
    sass         = require("gulp-sass"), // https://www.npmjs.org/package/gulp-sass
    sourcemaps   = require('gulp-sourcemaps'),
    uglify       = require('gulp-uglify'),
    util         = require("gulp-util"), // https://github.com/gulpjs/gulp-util
    zip          = require('gulp-zip');

// using data from package.json
var pkg = require('./package.json');
var banner = ['/**',
  ' * <%= pkg.name %> - <%= pkg.description %>',
  ' * @version v<%= pkg.version %>',
  ' * @link <%= pkg.homepage %>',
  ' * @license <%= pkg.license %>',
  ' * @author <%= pkg.author %>',
  ' * @maintainer <%= pkg.maintainers[0].name %> <<%= pkg.maintainers[0].email %>>',
  ' */',
  ''].join('\n');

gulp.task('js', function ()
{
    // place code for your default task here
    return gulp.src('src/*.js')
        .pipe(header(banner, { pkg : pkg } ))
        .pipe(gulp.dest('dist/js'))
        .pipe(sourcemaps.init())
        .pipe(uglify())
        .pipe(rename({
            extname : '.min.js'
        }))
        .pipe(sourcemaps.write('./'))
        .pipe(header(banner, { pkg : pkg } ))
        .pipe(gulp.dest('dist/js'));
});

gulp.task('css', function ()
{
    // place code for your default task here
    return gulp.src('src/*.css')
        .pipe(header(banner, { pkg : pkg } ))
        .pipe(gulp.dest('dist/css'))
        .pipe(sourcemaps.init())
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(rename({
            extname : '.min.css'
        }))
        .pipe(sourcemaps.write('./'))
        .pipe(header(banner, { pkg : pkg } ))
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
