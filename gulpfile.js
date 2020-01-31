"use strict";

// gulp gulp-sass gulp-plumber gulp-eslint browser-sync autoprefixer
// Load plugins
const autoprefixer = require("gulp-autoprefixer");
const browsersync = require("browser-sync").create();
// const rollap = require("gulp-better-rollup");
const eslint = require("gulp-eslint");
const gulp = require("gulp");
const plumber = require("gulp-plumber");
const sass = require("gulp-sass");

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

// BrowserSync Reload
function browserSyncReload(done) {
  browsersync.reload();
  done();
}

// CSS task
function css() {
  return gulp
    .src("scss/**/*.scss")
    .pipe(plumber())
    .pipe(sass())
    .pipe(autoprefixer())
    .pipe(gulp.dest("./css/"))
    .pipe(browsersync.stream());
}

// Lint scripts
function scriptsLint() {
  return gulp
    .src(["./js/**/*", "./gulpfile.js"])
    .pipe(plumber())
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError());
}

// Transpile, concatenate and minify scripts
function js() {
  return gulp
  .src(["./js/**/*"])
  .pipe(plumber())
  .pipe(gulp.dest("./js/"))
  .pipe(browsersync.stream());
}


// Watch files
function watchFiles() {
  gulp.watch("./scss/**/*.scss", css);
  gulp.watch("./js/**/*.js", gulp.series(scriptsLint, js));
  gulp.watch(
    gulp.series(browserSyncReload)
  );
}

// define complex tasks

// export tasks
// exports.css = css;
// exports.js = js;
// exports.watchFiles = watchFiles;
exports.default = gulp.series(
  gulp.parallel(css, browserSync, scriptsLint, js), 
  watchFiles
);
