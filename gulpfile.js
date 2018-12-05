let gulp        = require('gulp');
let sass        = require('gulp-sass');
let minifyCSS   = require('gulp-minify-css');
let concat      = require('gulp-concat');





/* ------------------------
    tarea de ejemplo 
    - se ejecuta con:   
        gulp hello + ENTER
   ------------------------- */
gulp.task('hello', function(){
    console.log("run test task");
});



// tarea sass
gulp.task('sass', function(){
    return gulp.src('scss/**/*.scss') // convierte de sass a csss con gulp-sass
        .pipe(sass())
        .pipe(gulp.dest('dist/css'))
});



// tarea para minificar y concatenar
gulp.task('style_min', function(){
    return gulp.src('scss/**/*.scss')
        .pipe(sass())
        .pipe(minifyCSS())
        .pipe(concat('style_main.min.css'))
        .pipe(gulp.dest('dist/css'))
});



// Escuchar cambios en la tarea : ** style_min
gulp.task('watch', ['style_min'], () => {
    gulp.watch('scss/**/*.scss', ['style_min'])
});