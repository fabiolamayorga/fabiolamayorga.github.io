// Include gulp
var gulp = require('gulp');
 // Include plugins
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var sass = require('gulp-ruby-sass');
 // Concatenate JS Files
gulp.task('scripts', function() {
    return gulp.src('js/*.js')
      .pipe(concat('main.js'))
      	.pipe(rename({suffix: '.min'}))
      	.pipe(uglify())
      	.pipe(gulp.dest('build/js'));
});

gulp.task('sass', function(){
	return sass('scss/style.scss', {style:'compressed'})
	.pipe(rename({suffix: '.min'}))
	.pipe(gulp.dest('build/css'));
})
 // Default Task
gulp.task('default', ['scripts', 'sass']);