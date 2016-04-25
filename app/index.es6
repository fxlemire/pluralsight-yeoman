/* eslint consistent-this: [2, "that"] */
import {Base} from 'yeoman-generator';

class Generator extends Base {
  initializing() {

  }

  prompting() {

  }

  configuring() {

  }

  get writing() {
    return {
      gulpfile() {
        const that = this;

        that.copy('_gulpfile.js', 'gulpfile.js');
        that.copy('_gulp.config.js', 'gulp.config.js');
        that.copy('jshintrc', '.jshintrc');
      },

      packageJSON() {
        this.copy('_package.json', 'package.json');
      },

      git() {
        this.copy('gitignore', '.gitignore');
      },

      bower() {
        const that = this;

        const bowerJson = {
          name: 'my-app', // TODO: make dynamic
          license: 'MIT',
          dependencies: {}
        };

        bowerJson.dependencies.angular = '~1.4.6';
        bowerJson.dependencies['angular-bootstrap'] = '~0.13.4';
        bowerJson.dependencies['angular-ui-router'] = '~0.2.15';
        bowerJson.dependencies['bootstrap-css-only'] = '~3.3.5';
        bowerJson.dependencies.lodash = '~3.10.1';
        bowerJson.dependencies.moment = '~2.10.6';
        bowerJson.dependencies['angular-ui-utils'] = '~3.0.0';

        that.fs.writeJSON('bower.json', bowerJson);
        that.copy('bowerrc', '.bowerrc');
      },

      appStaticFiles() {
        const that = this;

        that.copy('_favicon.ico', 'src/favicon.ico');
        that.directory('styles', 'src/styles');
      },

      scripts() {
        const that = this;

        that.fs.copyTpl(
          that.templatePath('app/_app.js'),
          that.destinationPath('src/app/app.js'),
          {
            ngapp: 'myapp'
          }
        );

        that.fs.copyTpl(
          that.templatePath('app/layout/_shell.controller.js'),
          that.destinationPath('src/app/layout/shell.controller.js'),
          {
            ngapp: 'myapp'
          }
        );

        that.fs.copyTpl(
          that.templatePath('app/about/_about.controller.js'),
          that.destinationPath('src/app/about/about.controller.js'),
          {
            ngapp: 'myapp'
          }
        );

        that.fs.copyTpl(
          that.templatePath('app/home/_home.controller.js'),
          that.destinationPath('src/app/home/home.controller.js'),
          {
            ngapp: 'myapp'
          }
        );
      },

      html() {
        const that = this;

        that.fs.copyTpl(
          that.templatePath('_index.html'),
          that.destinationPath('src/index.html'),
          {
            appname: 'My Cool App',
            ngapp: 'myapp'
          }
        );

        that.fs.copy(
          that.templatePath('app/layout/_shell.html'),
          that.destinationPath('src/app/layout/shell.html')
        );

        that.fs.copy(
          that.templatePath('app/about/_about.html'),
          that.destinationPath('src/app/about/about.html')
        );

        that.fs.copy(
          that.templatePath('app/home/_home.html'),
          that.destinationPath('src/app/home/home.html')
        );
      }
    };
  }

  conflicts() {

  }

  install() {

  }

  end() {

  }
}

module.exports = Generator;
