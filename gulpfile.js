const gulp = require("gulp");
const del = require("del");
const ts = require("gulp-typescript");
const merge = require('merge2');
const sourcemaps = require('gulp-sourcemaps');
const tscConfig = require('./tsconfig.json');

gulp.task('clean:dist', function() {
  return del('dist/**/*');
});

gulp.task('clean:demo', function() {
  return del('demo/**/*');
});

gulp.task('compile:demo', function() {
    var tsResult = gulp.src([
            'src/**/*.ts'
        ])
        .pipe(ts({
            declaration: true,
            target: "es5",
            module: "commonjs",
        }));
 
    return merge([
        tsResult.dts.pipe(gulp.dest('demo')),
        tsResult.js
            .pipe(sourcemaps.init())
            .pipe(sourcemaps.write('.'))
            .pipe(gulp.dest('demo'))
    ]);
});

gulp.task('compile:dist', function() {
    var tsResult = gulp.src([
            'src/**/*.ts',
            '!src/bootstrap.*',
            '!src/app-routing.module.*',
            '!src/app.component.*',
            '!src/app.module.*',
            '!src/menu.data.*',
            '!src/demo',
            '!src/demo/**'
        ])
        .pipe(ts({
            declaration: true,
            target: "es5",
            module: "commonjs",
        }));
 
    return merge([
        tsResult.dts.pipe(gulp.dest('dist')),
        tsResult.js
            .pipe(sourcemaps.init())
            .pipe(sourcemaps.write('.'))
            .pipe(gulp.dest('dist'))
    ]);
});

gulp.task('assets:dist', function() {
    return gulp
        .src([
            'src/**/*', 
            '!**/*.ts',
            '!src/app.component.html',
            '!src/resources/img/sample',
            '!src/resources/img/sample/**',
            '!src/resources/css',
            '!src/resources/css/**',
            '!src/resources/img/logo.png',
            '!src/demo',
            '!src/demo/**'
        ])
        .pipe(gulp.dest('dist'));
});

gulp.task('assets:demo', function() {
    return gulp
        .src([
            'src/**/*', 
            '!**/*.ts'
        ])
        .pipe(gulp.dest('demo'));
});


gulp.task('files:dist', function() {
    return gulp
        .src([
            './README.md', 
            './package.json',
            './tsconfig.json'
        ])
        .pipe(gulp.dest('dist'));
});

gulp.task('files:demo', function() {
    return gulp
        .src([
            './README.md', 
            './package.json',
            './tsconfig.json'
        ])
        .pipe(gulp.dest('demo'));
});

gulp.task('build', ['build:dist', 'build:demo']);
gulp.task('build:dist', ['clean:dist', 'compile:dist', 'assets:dist', 'files:dist']);
gulp.task('build:demo', ['clean:demo', 'compile:demo', 'assets:demo', 'files:demo']);

gulp.task('compile', ['compile:dist', 'compile:demo']);
gulp.task('clean', ['clean:dist', 'clean:demo']);
gulp.task('assets', ['assets:dist', 'assets:demo']);
gulp.task('files', ['files:dist', 'files:demo']);