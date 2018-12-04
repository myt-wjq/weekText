var gulp = require('gulp');

var sass = require('gulp-sass');

var minCss = require('gulp-clean-css');

var server = require('gulp-webserver');


gulp.task('devCss', function() {
    return gulp.src('./src/scss/*.scss')
        .pipe(sass())
        .pipe(minCss())
        .pipe(gulp.dest("./src/css"))
})
gulp.task("watch", function() {
    return gulp.watch("./src/scss/*.scss", gulp.series('devCss'));

})
gulp.task('devserver', function() {
    return gulp.src('src')
        .pipe(server({
            port: 9090,
            open: true,
        }))
})
gulp.task('defile', gulp.series("devCss", "watch"));
gulp.task('bJs', function() {
    return gulp.src("./weekText/src/js/*.js")
        .pipe(uglify())
        .pipe(gulp.dest('./weekText/src/jss'))
})