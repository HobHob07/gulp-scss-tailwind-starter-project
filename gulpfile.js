const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'))

const browserSync = require('browser-sync').create();

// compile scss into css
function style() {
    return gulp.src(['./assets/style/scss/**/*.scss', '!./assets/style/scss/abstract/*.scss'])
    .pipe(sass())
    .pipe(gulp.dest('./assets/style/css'))
    .pipe(browserSync.stream())
}

function watch() {
    browserSync.init({
        server : {
            baseDir: './'
        }
    });
    gulp.watch(['./assets/style/scss/**/*.scss', '!./assets/style/scss/abstract/*.scss'], style).on('change', browserSync.reload);
    gulp.watch('./*.html').on('change', browserSync.reload);
    gulp.watch('./js/**/*.js').on('change', browserSync.reload);
}

exports.style = style;
exports.watch = watch;