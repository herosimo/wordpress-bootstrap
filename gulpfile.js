// Your localhost server name
let hostName = "localhost/2020/wp-20";

// Gulp
const gulp = require("gulp");

// SASS
const sass = require("gulp-sass");

// Autoprefixer
const autoprefixer = require("autoprefixer");
const sourcemaps = require("gulp-sourcemaps");
const postcss = require("gulp-postcss");

// Minify CSS
const cleanCSS = require("gulp-clean-css");

// Concat and Minify JS
const concat = require("gulp-concat");
const uglify = require("gulp-uglify");

// BrowserSync
const browserSync = require("browser-sync").create();

//compile scss into css, add autoprefixer, minify
function style() {
    return (
        gulp
            // Sass
            .src("./src/sass/**/*.scss")
            .pipe(sass().on("error", sass.logError))

            // AutoPrefixer
            .pipe(sourcemaps.init())
            .pipe(postcss([autoprefixer()]))
            .pipe(sourcemaps.write("."))

            // Minify CSS
            .pipe(cleanCSS({ compatibility: "ie8" }))
            .pipe(gulp.dest("./dist/css"))

            // Trigger BrowserSync
            .pipe(browserSync.stream())
    );
}

// Concat and minify JS
function js() {
    return (
        gulp
            .src("./src/js/*.js")

            // Concat JS
            .pipe(concat("all.min.js"))

            // Minify HS
            .pipe(uglify())
            .pipe(gulp.dest("./dist/js"))

            // Trigger BrowserSync
            .pipe(browserSync.stream())
    );
}

function watch() {
    browserSync.init({
        proxy: hostName
    });
    gulp.watch("./src/sass/**/*.scss", style);
    gulp.watch("./src/js/**/*.js", js);
    gulp.watch("./*.php").on("change", browserSync.reload);
}

function defaultTask(cb) {
    style();
    js();
    watch();
}

exports.style = style;
exports.js = js;
exports.watch = watch;
exports.default = defaultTask;
