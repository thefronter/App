var gulp = require('gulp');
var stylus = require("gulp-stylus");
var pug = require("gulp-pug");

gulp.task('stylus', function(){
     gulp.src('stylus.styl')
         .pipe(stylus({
	     compress: true
	 }))
	 .pipe(gulp.dest('assets/css/'))
     
})

gulp.task('view', function buldHTML(){
      return gulp.src('index.pug')
                 .pipe(pug())
})
