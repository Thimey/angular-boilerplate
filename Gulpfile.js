var gulp = require('gulp');
var webpack = require('webpack-stream');
var browser = require('browser-sync');
var sync    = require('run-sequence');
// map paths
var paths = {
	entry: 'client/app/app.js',
	app: ['client/app/**/*.{js,less,html}', 'client/styles/**/*.less'],
  js: 'client/app/**/*!(.spec.js).js',
  styl: ['client/app/**/*.less', 'client/style/**/*.less'],
  toCopy: ['client/index.html'],
  html: ['client/index.html', 'client/app/**/*.html'],
  dest: 'dist',
  blankTemplates: 'templates/component/*.**'
}

// BUILD
gulp.task('build', function () {
	return gulp.src(paths.entry)
		.pipe(webpack(require('./webpack.config')))
    .pipe(gulp.dest(paths.dest));
});

// COPY ANY REQUIRED FILES OVER TO DIST
gulp.task('copy', function() {
  return gulp.src(paths.toCopy, { base: 'client' })
    .pipe(gulp.dest(paths.dest));
});

// SERVE
gulp.task('serve', function () {
	browser({
    port: process.env.PORT || 4500,
    open: false,
    ghostMode: false,
    server: {
      baseDir: 'dist'
    }
  });
});

// WATCH
gulp.task('watch', function () {
	gulp.watch(paths.app, ['build', browser.reload]);
	gulp.watch(paths.toCopy, ['copy', browser.reload]);
});

// DEFAULT
gulp.task('default', function(done) {
  sync('build', 'copy', 'serve', 'watch', done)
});