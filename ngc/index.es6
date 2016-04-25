/* eslint consistent-this: [2, "that"] */
import {Base} from 'yeoman-generator';
import _ from 'lodash';

class SubGenerator extends Base {
  constructor(...args) {
    super(...args);
    const that = this;

    that.argument('appname', {type: String, required: true});
    console.log('inside ngc sub-generator', that.appname);
  }

  writing() {

  }
}

module.exports = SubGenerator;
