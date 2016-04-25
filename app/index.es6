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

      },

      packageJSON() {

      },

      git() {

      },

      bower() {

      },

      appStaticFiles() {
        this.copy('_favicon.ico', 'src/favicon.ico');
      },

      scripts() {

      },

      html() {

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
