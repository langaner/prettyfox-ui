const gulp = require("gulp");
const del = require("del");
const ts = require("gulp-typescript");
const merge = require('merge2');
const sourcemaps = require('gulp-sourcemaps');
const gulpFile = require('gulp-file');
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

gulp.task('npm', function() {
    var package = require('./package.json');
    var target = {};
    var fieldsToCopy = ['name', 'version', 'description', 'keywords', 'author', 'repository', 'license', 'bugs', 'homepage'];

    fieldsToCopy.forEach(function(field) { 
        target[field] = package[field]; 
    });

    target.peerDependencies = {};
    Object.keys(package.dependencies).forEach(function(dependency) {
        target.peerDependencies[dependency] = `^${package.dependencies[dependency]}`;
    });

    return gulp.src('README.md')
      .pipe(gulpFile('package.json', JSON.stringify(target, null, 2)))
      .pipe(gulp.dest('dist'));
})

gulp.task('build', ['build:dist', 'build:demo']);
gulp.task('build:dist', ['clean:dist', 'compile:dist', 'assets:dist', 'npm']);
gulp.task('build:demo', ['clean:demo', 'compile:demo', 'assets:demo']);

gulp.task('compile', ['compile:dist', 'compile:demo']);
gulp.task('clean', ['clean:dist', 'clean:demo']);
gulp.task('assets', ['assets:dist', 'assets:demo']);