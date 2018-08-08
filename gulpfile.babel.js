import fs from 'fs';
import gulp from 'gulp';
import sass from 'gulp-sass';

export const mtime = done => {
  const now = new Date();
  fs.utimesSync('test/test.css', now, now);
  done();
}

export const style = () => {
  return gulp.src('test/test.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('test/'));
};

export const watch = () => {
  gulp.watch('test/test.scss', gulp.series(style, mtime));
};