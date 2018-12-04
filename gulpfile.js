var gulp = require('gulp');

var sass = require('gulp-sass');

var minCss = require('gulp-clean-css');

var server = require('gulp-webserver');


gulp.task('devScss', function() {
    return gulp.src('./src/scss/*.scss')
        .pipe(sass())
        .pipe(minCss())
        .pipe(gulp.dest("./src/css"))
})
gulp.task("watch", function() {
    return gulp.watch("./src/scss/*.scss", gulp.series('devScss'));

})
gulp.task('server', function() {
    return gulp.src("src")
        .pipe(server({
            port: 9090,
            open: true,
            livereload: true,
        }))


})
gulp.task('dev', gulp.series('devScss', "server", 'watch'))