var gulp = require('gulp');

gulp.task('compile', function () {
    return gulp.src([
            'src/**/*.ts',
            'src/**/*.css',
            'src/**/*.html',
            'src/bootstrap.js'
        ])
        .pipe(gulp.dest('dist/'));
});

gulp.task('copy-res', function() {
    return gulp.src([
        'src/resources/**/*'
    ])
    .pipe(gulp.dest('dist/resources'));
});

gulp.task('default', ['compile', 'copy-res']);