'use strict';

var gulp = require('gulp');
var imagemin = require('gulp-imagemin');		// optimizing images
var rename = require('gulp-rename');				// optimizing js
var concat = require('gulp-concat');

// configuration object
var config = {
	paths: {
		images: "images/*"
	}
};

// destination configuration object
var destConfig = {
	paths: {
		images: 'dist/images'
	}
};

// image task
gulp.task('images', function() {
	return gulp.src(config.paths.images)
	.pipe(imagemin({progressive : true}))
	.pipe(gulp.dest(destConfig.paths.images));
});

// watch task for any html/js changes
gulp.task('watch', function() {
	gulp.watch(config.paths.images, ['images']);
});

// default gulp tasks
gulp.task('default', ['watch'], function () {});
