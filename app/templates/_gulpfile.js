const gulp = require('gulp');
const livereload = require('gulp-livereload');

gulp.task('watch', ['serve'], () => {
  livereload.listen();

  gulp.watch([
    'src/**/*.html',
    'src/app/**/*.js',
    'src/styles/*.css'
  ]).on('change', file => {
    console.log(`File changed: ${file.path}`);
    livereload.changed(file.path);
  });
});
