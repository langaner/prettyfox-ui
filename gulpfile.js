const gulp = require("gulp");
const del = require("del");
const ts = require("gulp-typescript");
const rename = require("gulp-typescript");
const merge = require('merge2');
const sourcemaps = require('gulp-sourcemaps');
const gulpFile = require('gulp-file');
const runSequence = require('run-sequence');
var $ = require('gulp-load-plugins')({ lazy: true });

var tsProject = ts.createProject("./tsconfig.json");

var config = {
    build: './demo/main.bundle.js',
    vendor: './demo/vendor.bundle.js',
    index: {
        run: 'index.html',
        aot: 'index-aot.html',
        jit: 'index-jit.html'
    },
    demo: 'demo',
    dist: 'dist',
    root: './'
};

// Copy

function copyIndex(source) {
    return gulp.src(source)
        .pipe($.rename(config.index.run))
        .pipe(gulp.dest(config.root));
}

gulp.task('copy-aot', function () {
    return copyIndex(config.index.aot);
});

gulp.task('copy-jit', function () {
    return copyIndex(config.index.jit);
});

gulp.task('clean:index', function (done) {
    return del(config.index.run);
});

// Demo build

gulp.task('clean:demo', function() {
    return del(config.demo + '/');
});

gulp.task('assets:demo', function() {
    return gulp
        .src([
            'src/**/*', 
            '!**/*.ts',
            '!**/*.json',
            '!**/*.js',
            '!**/*.js.map',
            '!**/*.d.ts'
        ])
        .pipe(gulp.dest(config.demo));
});

// Dist build

gulp.task('clean:dist', function() {
    return del(config.dist + '/');
});

gulp.task('assets:dist', function() {
    return gulp
        .src([
            config.demo + '/**/*', 
            '!**/*.ts',
            '!**/*.json',
            '!**/*.js',
            '!**/*.js.map',
            '!**/*.d.ts',
            '!' + config.demo + '/app.component.html',
            '!' + config.demo + '/resources/img/sample',
            '!' + config.demo + '/resources/img/sample/**',
            '!' + config.demo + '/resources/css',
            '!' + config.demo + '/resources/css/**',
            '!' + config.demo + '/resources/img/logo.png',
            '!' + config.demo + '/demo',
            '!' + config.demo + '/demo/**'
        ])
        .pipe(gulp.dest(config.dist));
});

gulp.task('compile:dist', function() {
    return gulp
        .src([
            config.demo + '/*', 
            config.demo + '/**/*', 
            '!' + config.demo + '/bootstrap.*',
            '!' + config.demo + '/bootstrap-aot.*',
            '!' + config.demo + '/vendor.*',
            '!' + config.demo + '/main.bundle.*',
            '!' + config.demo + '/app-routing.module.*',
            '!' + config.demo + '/app.component.*',
            '!' + config.demo + '/app.module.*',
            '!' + config.demo + '/menu.data.*',
            '!' + config.demo + '/demo',
            '!' + config.demo + '/demo/**'
        ])
        .pipe(gulp.dest(config.dist));

});

gulp.task('npm:dist', function() {
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
      .pipe(gulp.dest(config.dist));
});

gulp.task('build:demo', function(done) {
    runSequence('clean:demo', 'assets:demo', 'copy-jit', done);
});

gulp.task('build:demo-aot', function(done) {
    runSequence('clean:demo', 'assets:demo', 'copy-aot', done);
});

gulp.task('build:dist', function(done) {
    runSequence('clean:dist', 'compile:dist', 'assets:dist', 'npm:dist', done);
});