'use strict';

var gulp = require('gulp');
var imagemin = require('gulp-imagemin');		// optimizing images
var rename = require('gulp-rename');				// optimizing js
var concat = require('gulp-concat');
var browserSync = require('browser-sync');

// configuration object
var config = {
	proxyUrl: "http://localhost:8080",
	browser: "chrome",
	port: 7000,
	paths: {
		files: "./index.html",
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

// browser-sync task
gulp.task('browser-sync', function() {
	browserSync.init({
        files: [config.paths.files],
        browser: config.browser,
        port: config.port,
        server: {
        	baseDir: './'
        }
	});
});

// watch task for any html/js changes
gulp.task('watch', function() {
	gulp.watch(config.paths.files, browserSync.reload);
	gulp.watch(config.paths.images, ['images']);
});

// default gulp tasks
gulp.task('default', ['browser-sync', 'watch'], function () {});
