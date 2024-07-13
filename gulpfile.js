const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));

// Tarea para compilar SASS
gulp.task('sass', function () {
  return gulp.src('assets/sass/styles.scss')
    .pipe(sass({
      includePaths: ['./node_modules']
    }).on('error', sass.logError))
    .pipe(gulp.dest('assets/css'));
});

// Tarea para copiar archivos JS de node_modules a assets/js
gulp.task('copy-js', function () {
  return gulp.src([
    'node_modules/jquery/dist/jquery.min.js',
    'node_modules/bootstrap/dist/js/bootstrap.bundle.min.js'
  ])
  .pipe(gulp.dest('assets/js'));
});

// Tarea para observar cambios
gulp.task('watch', function () {
  gulp.watch('assets/sass/**/*.scss', gulp.series('sass'));
});

// Tarea por defecto
gulp.task('default', gulp.series('sass', 'copy-js', 'watch'));
