var gulp = require('gulp'),
	coffee = require('gulp-coffee'),
	sass = require('gulp-sass'),
	compass = require('gulp-compass'),
	jade = require('gulp-jade');

gulp.task('compass', function() {
	gulp.src('./scss/*.scss')
		.pipe(compass({
			css: './css',
			sass: './scss',
		}))
		.pipe(gulp.dest('./css'));
});

gulp.task('coffee', function() {
	gulp.src('./coffee/*.coffee')
		.pipe(coffee())
		.pipe(gulp.dest('./js'));
});

gulp.task('jade', function() {
	gulp.src('./jade/*.jade')
		.pipe(jade())
		.pipe(gulp.dest('./'));
});

gulp.task('default', ['compass', 'coffee', 'jade']);

gulp.watch('./scss/**/*.scss', ['compass']);

gulp.watch('./coffee/*.coffee', ['coffee']);

gulp.watch('./jade/*.jade', ['jade']);
