const postcss = require('gulp-postcss');
const gulp = require('gulp');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const px2rpx = require('./src/index');
const del = require('del');

// clean:
gulp.task('clean', () => {
  return del('dist');
});

// styles:
gulp.task('styles', function () {
  var plugins = [
    px2rpx({ ratio: 2 }),
    autoprefixer({ browsers: ['last 1 version'] }),
    // cssnano()
  ];
  return gulp.src('test/test.css')
    .pipe(postcss(plugins))
    .pipe(gulp.dest('test/dist'));
});

// default:
gulp.task('default', ['clean'], () => {
  return gulp.src([
    './src/**'
  ]).pipe(gulp.dest('dist'));
});

