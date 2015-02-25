/*
|--------------------------------------------------------------------------
| Dependencies
|--------------------------------------------------------------------------
*/

var gulp       = require('gulp');
var less       = require('gulp-less');
var concat     = require('gulp-concat');
var watch      = require('gulp-watch');
var livereload = require('gulp-livereload');
var minifyCSS  = require('gulp-minify-css');
var uglify     = require('gulp-uglify');
var plumber    = require('gulp-plumber');

/*
|--------------------------------------------------------------------------
| Variables
|--------------------------------------------------------------------------
*/

// Less
var _less  = 'assets/less/';
var less_  = 'assets/css/';

// CSS
var _css  = 'assets/css/';
var css_  = 'public/assets/css/';

// JavaScript
var _js   = 'assets/js/';
var js_   = 'public/assets/js/';

// Bower
var bower = 'bower_components/';

/*
|--------------------------------------------------------------------------
| Less Files
|--------------------------------------------------------------------------
*/

// Less files
var less_files = [
	// -- Add Less files from assets -- //

	'main.less',

	// -- End Less files from assets -- //
].map(function(str) { return _less + str; });

/*
|--------------------------------------------------------------------------
| CSS Files
|--------------------------------------------------------------------------
*/

// Bower CSS files
var css_bower = [
	// -- Add CSS files from bower -- //

	'animate.css/animate.min.css',

	// -- End CSS files from bower -- //
].map(function(str) { return bower + str });

// CSS files
var css_files = css_bower.concat([
	// -- Add CSS files from assets -- //

	'bootstrap.css',
	'main.css',

	// -- End CSS files from assets -- //
].map(function(str) { return _css + str }));

/*
|--------------------------------------------------------------------------
| JavaScript Files
|--------------------------------------------------------------------------
*/

// Bower JS files
var js_bower = [
	// -- Add JS files from bower -- //

	'jquery/dist/jquery.min.js',
	'bootstrap/dist/js/bootstrap.min.js',

	// -- End JS files from bower -- //
].map(function(str) { return bower + str });

// Public JS files
var js_files = js_bower.concat([
	// -- Add JS files from assets -- //

	'main.js',

	// -- End JS files from assets -- //
].map(function(str) { return _js + str }));

/*
|--------------------------------------------------------------------------
| Bootstrap Task
|--------------------------------------------------------------------------
*/

gulp.task('bootstrap', function() {
	gulp.src([_less + 'bootstrap/recipe.less'])
		.pipe(less())
		.pipe(concat('bootstrap.css'))
		.pipe(gulp.dest(less_));
});

/*
|--------------------------------------------------------------------------
| Less Task
|--------------------------------------------------------------------------
*/

gulp.task('less', function() {
	gulp.src(less_files)
		.pipe(plumber({
			errorHandler: function(err) { console.log(err) }
		}))
		.pipe(less())
		.pipe(concat('main.css'))
		.pipe(gulp.dest(less_));

	gulp.src((i == 0 ? css_files : css_files_admin))
		.pipe(concat('main.css'))
		.pipe(minifyCSS({keepSpecialComments: 0}))
		.pipe(gulp.dest(css_));
});

/*
|--------------------------------------------------------------------------
| JavaScript Task
|--------------------------------------------------------------------------
*/

gulp.task('js', function() {
	gulp.src((i == 0 ? js_files : js_files_admin))
		.pipe(concat('main.js'))
		.pipe(uglify())
		.pipe(gulp.dest(js_));
});

/*
|--------------------------------------------------------------------------
| Watch Task
|--------------------------------------------------------------------------
*/

gulp.task('watch', function() {
	// Turn on Live Reload
	livereload.listen();

	// Watch for Less changes
	gulp.watch([_less + '*.less'], ['less']).on('change', livereload.changed);

	// Watch for JavaScript Changes
	gulp.watch([_js + '*.js'], ['js']).on('change', livereload.changed);

	// Watch for our Bootstrap override file changes
	gulp.watch([_less + 'bootstrap/*.less'], ['bootstrap']).on('change', livereload.changed);

	// Watch for HTML changes
	gulp.watch(['public/*.html']).on('change', livereload.changed);
})

/*
|--------------------------------------------------------------------------
| Default Task
|--------------------------------------------------------------------------
*/

gulp.task('default', ['bootstrap', 'js', 'less']);
