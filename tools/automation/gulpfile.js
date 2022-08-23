const gulp = require('gulp');
const server = require('gulp-server-livereload');

gulp.task('build', function (cb) {
    console.log("Building site");
    setTimeout(cb, 1200)
    //cb();
})

gulp.task('serve', function (cb) {
    gulp.src('www')
        .pipe(server({
            livereload: false,
            open: true,
        }));
})

gulp.task('default', gulp.series('build', 'serve'));