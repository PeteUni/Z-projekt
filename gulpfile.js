var gulp = require('gulp');
var sass = require('gulp-sass');
var sassglob = require('gulp-sass-glob'); //pozwala na korzystanie z podwojnych gwiazdek czyli wyszukiwania powyzej w folderach
var sourcemaps = require('gulp-sourcemaps');

gulp.task('sass', function(){
  return gulp.src('scssjestsuper/**/*.scss')
  .pipe(sourcemaps.init())
  .pipe(sassglob())
  .pipe(sass({
    errLogToConsole: true,
    outputStyle: 'expanded'
  }))
  .pipe(sourcemaps.write())
  .pipe(gulp.dest('css')) //tu wpisujemy typ destynacji jaki chcemy by miala forma pliku css moze to byc nazwa pliku ktorej do tej pory nie robilismy
});
gulp.task('watch', ['sass'], function(){
  gulp.watch('scssjestsuper/**/*.scss', ['sass']);
});
//a w pierwszym gulp.tsak zmiana ze style.scss na *.scss zeby bylo widac wiecej plikow
///po dodaniu [sass] w gulp watch bedzie odpalal zmiany z sass od razu!
