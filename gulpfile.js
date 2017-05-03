var gulp = require('gulp');
// Requires the gulp-sass plugin
var sass = require('gulp-sass');


gulp.task('sass', function(){
  return gulp.src('./src/assets/styles/**/*.scss')
    .pipe(sass()) // Using gulp-sass
    .pipe(gulp.dest('./src/assets/styles'))
});

gulp.watch('./src/assets/styles/**/*.scss', ['sass']); 

gulp.task('watch', function(){
  gulp.watch('./src/assets/styles/**/*.scss', ['sass']); 
 
})