var gulp = require('gulp'),
    // gulpでAPI Blueprintを使いドキュメントを生成
    aglio = require('gulp-aglio'),
    // ドキュメントが更新されたら自動的にブラウザを更新
    browserSync = require('browser-sync'),
    // gulpでファイルをリネーム
    rename = require('gulp-rename'),
    // ファイルを削除するプラグイン
    // See. http://qiita.com/shinnn/items/bd7ad79526eff37cebd0
    rimraf = require('rimraf'),
    // ファイル分割されているものを1つのindex.mdにまとめる
    ejs = require('gulp-ejs');

var reload = browserSync.reload;

var TEMPLATE_FILES = ['apidocs/**/*.md'],
    LAYOUT_FILE = 'apidocs/index.md',
    PUBLISHED_DIR = './';

gulp.task('combine', function(){
  return gulp.src(LAYOUT_FILE)
    .pipe(ejs({},{ ext: '.md' }))
    .pipe(rename('index.md'))
    .pipe(gulp.dest(PUBLISHED_DIR));
});

gulp.task('generate-api-docs', ['combine'], function() {
  return gulp.src(PUBLISHED_DIR + '/index.md')
    .pipe(aglio({template: 'default'}))
    .pipe(gulp.dest(PUBLISHED_DIR));
});

gulp.task('watch', function () {
  gulp.watch(TEMPLATE_FILES, ['generate-api-docs', reload]);
});

gulp.task('browserSync', function() {
  browserSync({
    logConnections: true,
    logFileChanges: true,
    notify: true,
    port: 8088,
    open: false,
    server: {
      baseDir: PUBLISHED_DIR
    }
  });
});

gulp.task('clean', function(cb) {
  rimraf(PUBLISHED_DIR, cb);
});

gulp.task('publish', ['clean', 'generate-api-docs']);
gulp.task('default', ['generate-api-docs', 'watch', 'browserSync']);
