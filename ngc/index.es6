/* eslint consistent-this: [2, "that"] */
import {Base} from 'yeoman-generator';
import _ from 'lodash';

class SubGenerator extends Base {
  constructor(...args) {
    super(...args);
    const that = this;

    that.argument('name', {type: String, required: true});
    console.log('inside ngc sub-generator', that.name);
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
  }
}

module.exports = SubGenerator;
