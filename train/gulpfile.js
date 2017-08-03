var gulp = require('gulp');
var htmlmin = require('gulp-htmlmin');
var minifyCSS = require('gulp-clean-css');
var rename = require('gulp-rename');

gulp.task('TestHtmlmin',function(){
	var options = {
        removeComments: true,
        collapseWhitespace: true,
        collapseBooleanAttributes: true,
        removeEmptyAttributes: true,
        removeScriptTypeAttributes: true,
        removeStyleLinkTypeAttributes: true,
        minifyJS: true,
        minifyCSS: true
	}

	gulp.src('*.html')
		.pipe(htmlmin(options))
		.pipe(gulp.dest('./'));
});
gulp.task('css',function(){

        gulp.src('./css/*.css')
                .pipe(minifyCSS())
                .pipe(gulp.dest('./css'));
});



gulp.task("default",["TestHtmlmin","css"]);