const gulp = require('gulp');
const browserify = require('browserify');
const source = require("vinyl-source-stream");
const buffer = require("vinyl-buffer");
const connect = require('gulp-connect');
const concat = require('gulp-concat');
const gcopy = require('gulp-copy');
const mergeStream = require('merge-stream');
const sass = require('gulp-sass');
const sassGlob = require('gulp-sass-glob');
const htmlmin = require('gulp-htmlmin');
const cssmin = require('gulp-cssmin');

const Config = {
  dirs:{
    dev:'./dev',
    src:'./src',
    dist:'./dist',
  }
}
 
gulp.task('default', [
  'server',
  'watch',
  'packageDependencies',
  'resources',
  'html',
  'scripts',
  'sass'
]);

gulp.task('watch', function() {
  gulp.watch(['./src/**/*.js', './src/**/*.html'], ['scripts'])
  gulp.watch('./src/index.html', ['html'])
  gulp.watch(['./src/**/*.scss'], ['sass']);
});

gulp.task('resources', function() {
  gulp.src([
      './src/resources/**/*',
  ]).pipe(gulp.dest(Config.dirs.dev));
});

gulp.task('scripts', function() {
  const appCodeStream = browserify({
    entries: 'src/js/app.js',
    debug: true
  })
  .bundle()
  .pipe(source('app.min.js'))
  .pipe(buffer());

  return appCodeStream
    .pipe(concat('app.min.js'))
    .pipe(gulp.dest(Config.dirs.dev))
    .pipe(connect.reload());
})

gulp.task('sass', function () {
  return gulp.src('./src/scss/app.scss')
    .pipe(sassGlob())
    .pipe(sass().on('error', sass.logError))
    .pipe(cssmin())
    .pipe(gulp.dest(Config.dirs.dev))
    .pipe(connect.reload());
});

gulp.task('html', function() {
  return gulp.src('./src/index.html')
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest(Config.dirs.dev))
    .pipe(connect.reload());
})

gulp.task('packageDependencies', function() {
  return gulp.src([
    ])
    .pipe(concat('vendors.js'))
    .pipe(gulp.dest(Config.dirs.dev));
});

gulp.task('server', function() {
  connect.server({
    root: [Config.dirs.dev, 'app'],
    livereload: true
  });
})