var gulp = require('gulp');
var mocha = require('gulp-mocha');
var fs = require('fs');
var acquit = require('acquit');

var acquitConfig = {
  executable: 'mocha',
  setup: 'var assert = require("assert"); var fizzbuzz = require("../");'
};

gulp.task('transpile', function() {
  fs.writeFileSync('./test-bin/index.test.js',
    acquit.compile(acquitConfig, fs.readFileSync('./index.js').toString()).getCode());
});

gulp.task('test', function() {
  gulp.src('./test-bin/*.test.js').
    pipe(mocha({ reporter: 'nyan' })).
    on('error', function() {});
});

gulp.task('watch', function() {
  gulp.watch('./index.js', ['transpile']);
  gulp.watch('./test-bin/*.test.js', ['test']);
});
