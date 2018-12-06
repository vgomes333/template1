var gulp = require ('gulp'),
sass = require ('gulp-sass'),
watch = require ('gulp-watch'),
browserSync = require ('browser-sync');

gulp.task ('serve', ['sass'], function () {
    browserSync.init ({
        server: {
            baseDir: 'src'
        }
    });
    gulp.watch('src/content/css/sass/**/*.scss',['sass']).on('change', browserSync.reload);
    gulp.watch('src/*.html').on('change', browserSync.reload);
});

gulp.task('sass',function(){
    return gulp.src('src/content/css/sass/style.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest("src/content/css"))
    .pipe(browserSync.stream());
});