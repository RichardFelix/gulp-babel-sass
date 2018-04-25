const GULP = require('gulp'),
      PATH = require('path'),
      $ = require('gulp-load-plugins')();

////////////////////////////////////////////
//             CONFIGuration              //
////////////////////////////////////////////
const CONFIG = {
    styles: {
        src: ['src/sass/*.scss'],
        dest: 'dist/sass/'
    },
    scripts: {
        src: ['src/js/*.js'],
        bundle: 'custom.js',
        dest: 'dist/js/',
    }
}

////////////////////////////////////////////
//           Default Tasks                //
////////////////////////////////////////////
GULP.task('prod:sass', ()=>{
  return GULP
    .src(CONFIG.styles.src)
    .pipe($.sourcemaps.init())
    .pipe($.sass())
    .pipe($.autoprefixer({
      browsers: ['last 2 versions'],
      grid: true
    }))
    .pipe($.cleanCss())
    .pipe($.sourcemaps.write())
    .pipe(GULP.dest(CONFIG.styles.dest));
});

GULP.task('prod:jsMini', ()=>{
  return GULP
    .src(CONFIG.scripts.src)
    .pipe($.sourcemaps.init())
    .pipe($.babel({
			   presets: ['es2015']
		  }
    ))
    .pipe($.concat(CONFIG.scripts.bundle))
    .pipe($.uglify())
    .pipe($.sourcemaps.write('.'))
    .pipe(GULP.dest(CONFIG.scripts.dest))
});

GULP.task('default',
  GULP.series(
    'prod:sass',
    'prod:jsMini'
));