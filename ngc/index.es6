/* eslint consistent-this: [2, "that"] */
import {Base} from 'yeoman-generator';
import _ from 'lodash';

class SubGenerator extends Base {
  constructor(...args) {
    super(...args);
    const that = this;

    that.argument('name', {type: String, required: true});
    console.log('inside ngc sub-generator', that.name);

    that.option('view', {
      desc: 'Determines if view is created along with controller',
      type: Boolean,
      default: false
    });
  }

  writing() {
    const that = this;

    function getFileNameFragment(ctrlName) {
      const ctrlIndex = ctrlName.indexOf('Controller');

      if (ctrlIndex === (ctrlName.length - 10)) {
        ctrlName = ctrlName.substring(0, ctrlIndex);
      }

      return _.kebabCase(ctrlName);
    }

    const fileNameFragment = getFileNameFragment(that.name);

    that.fs.copyTpl(
      that.templatePath('ng-controller.js'),
      that.destinationPath(`src/app/${fileNameFragment}/${fileNameFragment}.controller.js`),
      {
        ctrlName: that.name,
        appName: that.config.get('ngappname')
      }
    );

    if (that.options.view) {
      that.fs.copyTpl(
        that.templatePath('ng-view.html'),
        that.destinationPath(`src/app/${fileNameFragment}/${fileNameFragment}.html`),
        {
          name: that.name
        }
      );
    }
  }
}

module.exports = SubGenerator;
