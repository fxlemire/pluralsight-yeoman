import generator from 'yeoman-generator';

module.exports = generator.Base.extend({
  constructor(...args) {
    Reflect.apply(generator.Base, this, args);
  },

  initializing() {

  },

  prompting() {

  },

  configuring() {

  },

  writing: {
    gulpfile() {

    },

    packageJSON() {

    },

    git() {

    },

    bower() {

    },

    appStaticFiles() {
      const that = this;
      const favicon = 'favicon.ico';

      that.log(`Template path: ${that.templatePath()}`);
      that.log(`Destination path: ${that.destinationPath()}`);

      const source = that.templatePath(`_${favicon}`);
      const destination = that.destinationPath(`src/${favicon}`);

      that.log(`Source: ${source}`);
      that.log(`Destination: ${destination}`);

      that.copy(`_${favicon}`, `src/${favicon}`);
    },

    scripts() {

    },

    html() {

    }

  },

  conflicts() {

  },

  install() {

  },

  end() {

  }
});
