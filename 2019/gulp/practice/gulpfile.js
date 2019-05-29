const gulp = require('gulp');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');
const rename = require('gulp-rename');
const cssnano = require('gulp-cssnano');
const concat = require('gulp-concat');
const browserify = require('browserify');
const source = require('vinyl-source-stream');

gulp.task('convertJS', function() {
    return gulp.src('app/js/*.js')
        .pipe(babel({ presets: ['es2015'] }))
        .pipe(uglify())
        .pipe(gulp.dest('dist/js'))
})

gulp.task('convertCSS', function() {
    return gulp.src('app/css/*.css')
        .pipe(concat('app.css'))
        .pipe(cssnano())
        .pipe(rename(function(path) {
            path.basename += '.min';
        }))
        .pipe(gulp.dest('dist/css'));
})

gulp.task('watch', gulp.parallel(() => {
    gulp.watch('app/css/*.css', gulp.series('convertCSS'));
    gulp.watch('app/js/*.js', gulp.series('convertJS', 'browserify'))
}));


gulp.task("browserify", function() {
    var b = browserify({
        entries: "dist/js/app.js"
    });

    return b.bundle()
        .pipe(source("bundle.js"))
        .pipe(gulp.dest("dist/js"));
});

gulp.task('start', gulp.series('convertJS', 'convertCSS', 'browserify', 'watch'));