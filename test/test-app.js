import assert from 'yeoman-assert';
import helpers from 'yeoman-test';
import path from 'path';

describe('pluralsight-yeoman:app', () => {
  describe('default', () => {
    before(done => {
      helpers.run(path.join(__dirname, '../app'))
        .withOptions({skipInstall: true})
        .withArguments(['MyCoolApp'])
        .withPrompts({ngappname: ''})
        .on('end', done);
    });

    it('creates files', () => {
      assert.file([
        'package.json',
        'src/app/app.js',
        '.bowerrc',
        '.gitignore',
        '.jshintrc',
        'bower.json',
        'gulp.config.js',
        'gulpfile.js'
      ]);
    });

    it('adds default ngapp', () => {
      assert.fileContent('src/app/app.js', /const moduleName = 'app';/);
    });
  });

  describe('ngapp prompt', () => {
    before(done => {
      helpers.run(path.join(__dirname, '../app'))
        .withOptions({skipInstall: true})
        .withArguments(['MyCoolApp'])
        .withPrompts({ngappname: 'fooBarApp'})
        .on('end', done);
    });

    it('injects custom ngappname', () => {
      assert.fileContent('src/app/app.js', /const moduleName = 'fooBarApp';/);
      assert.fileContent('src/index.html', /<html lang="en" ng-app="fooBarApp">/);
      assert.fileContent('src/app/home/home.controller.js',
        /angular.module\('fooBarApp'\).controller\('HomeController', HomeController\);/);
    });
  });
});
