const gulp = require('gulp');//Init Gulp
const autoprefixer = require('gulp-autoprefixer');//init autoprefixer
const concat = require('gulp-concat');// Init Gulp concat
const spritesmith = require('gulp.spritesmith'); // create sprite
const merge = require('merge-stream'); // connection merge-stream

//Autoprefixer
gulp.task('autoprefixer',function () {
    gulp.src('source/css/**/*.css')
        .pipe(autoprefixer({
            browsers:['last 2 versions']
        }))
        .pipe(gulp.dest('app/css'))
});
// Concat all css files
gulp.task('concat-css',function () {
    gulp.src(['app/css/reset.css',
        'app/css/fonts.css',
        'app/css/components/*.css',
        'app/css/pages/*.css',
    ])
        .pipe(concat('style.css'))
        .pipe(gulp.dest('app/css'))
});
// Generate sprite
gulp.task('sprite', function () {
    let spriteData = gulp.src('source/sprite/*.png')
        .pipe(spritesmith({
            imgName: 'sprite.png',
            cssName: 'sprite.css',
            imgPath: '../img/sprite.png'
        }));

    let imgStream = spriteData.img
        .pipe(gulp.dest('app/img/'));

    let cssStream = spriteData.css
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(gulp.dest('source/css/components/'));
    return merge(imgStream, cssStream);
});
//Watch
gulp.task('watch',['autoprefixer','concat-css'], function () {
    gulp.watch('source/css/**/*.css', ['autoprefixer']);
    gulp.watch('app/css/**/*.css', ['concat-css']);

});
//Default task
gulp.task('default',['watch']);