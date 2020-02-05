//npm install -DE gulp gulp-sass gulp-autoprefixer gulp-plumber gulp-sourcemaps gulp-better-rollup gulp-plumber browser-sync

//plugins for development
var gulp = require('gulp'),
    sass = require('gulp-sass'),
    prefix = require('gulp-autoprefixer'),
    rollup = require('gulp-better-rollup'),
    plumber = require('gulp-plumber'),
    sourcemaps = require('gulp-sourcemaps'),
    browserSync = require('browser-sync').create();



gulp.task('sass', function(){
    return gulp.src('scss/**/*.scss')
        .pipe(plumber())
        .pipe(sass().on('error', sass.logError))
        .pipe(prefix('last 3 version'))
        .pipe(gulp.dest('./build/css/'))
        .pipe(browserSync.stream())
});

gulp.task('js', function(){
    return gulp.src('js/main.js')
        .pipe(plumber())
        .pipe(sourcemaps.init())
        .pipe(rollup({}, 'iife'))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('build/js'))
        .pipe(browserSync.stream())
});

gulp.task('html', function(){
    return gulp.src('**/*.html')
        .pipe(browserSync.stream())
});

gulp.task('css', function(){
    return gulp.src('css/**/*.css')
        .pipe(browserSync.stream())
});

gulp.task('browser-sync', function(){
    browserSync.init({
        port: 3002,
        server: {
            baseDir: './'
        }
    })
});

// gulp.task('connect', function() {
//     connect.server({
//         root: '',
//         livereload: true
//     });
// });

gulp.task('watch', function(){
    gulp.watch('scss/**/*.scss', ['sass']);
    gulp.watch('js/**/*.js', ['js']);
    gulp.watch('**/*.html', ['html']);
    gulp.watch('css/**/*.css', ['css']);
});

gulp.task('default', ['html', 'css', 'sass', 'js', 'browser-sync', 'watch']);