"use strict";

// gulp gulp-sass gulp-plumber gulp-eslint browser-sync autoprefixer
// Load plugins
const autoprefixer = require("gulp-autoprefixer");
const browsersync = require("browser-sync").create();
const eslint = require("gulp-eslint");
const gulp = require("gulp");
const plumber = require("gulp-plumber");
const sass = require("gulp-sass");
const rollup = require("gulp-better-rollup");
const babel = require('rollup-plugin-babel');
const resolve = require('rollup-plugin-node-resolve');
const commonjs = require('rollup-plugin-commonjs');

// BrowserSync
function browserSync(done) {
  browsersync.init({
    server: {
      baseDir: "./"
    },
    port: 3000
  });
  done();
}

function browserSyncReload(done) {
  browsersync.reload();
  done();
}

// CSS task
function css() {
  return gulp
    .src("./scss/**/*.scss")
    .pipe(plumber())
    .pipe(sass())
    .pipe(autoprefixer())
    .pipe(gulp.dest("./css/"))
    .pipe(browsersync.stream());
}

// Lint scripts
// function scriptsLint() {
//   return gulp
//     .src(["./js/**/*.js", "./gulpfile.js"])
//     .pipe(plumber())
//     .pipe(eslint())
//     .pipe(eslint.format())
//     .pipe(eslint.failAfterError());
// }

// Transpile, concatenate and minify scripts
function js() {
  return gulp
  .src("./js/*.js")
  .pipe(plumber())
  .pipe(rollup({ plugins: [babel(), resolve(), commonjs()] }, 'umd'))
  .pipe(gulp.dest("./build/js/"))
  .pipe(browsersync.stream());
}


// Watch files
function watchFiles() {
  gulp.watch("./scss/**/*.scss", css);
  gulp.watch("./js/**/*.js", js);
  // gulp.watch(browserSyncReload);
}

// define complex tasks

// export tasks
// exports.css = css;
// exports.js = js;
// exports.watchFiles = watchFiles;
exports.default = gulp.series(
  gulp.parallel(css, browserSync, browserSyncReload, js), 
  watchFiles
);
