'use strict';
var Generator = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');

module.exports = class extends Generator {
  prompting () {
    this.log(chalk.red.bold('\nCREATING SCSS MANIFEST (bvaccel.scss)\n'));

    var prompts = [{
      type: 'checkbox',
      name: 'includedPartials',
      message: 'What partials would you like to include?',
      choices: [{
        name: chalk.blue.bold(' @import ') + '\'helpers/mixins\';',
        value: 'helpers/mixins',
        checked: true
      }, {
        name: chalk.blue.bold(' @import ') + '\'helpers/variables\';',
        value: 'helpers/variables',
        checked: true
      }, {
        name: chalk.blue.bold(' @import ') + '\'helpers/functions\';',
        value: 'helpers/functions',
        checked: true
      }, {
        type: 'separator'
      }, {
        name: chalk.blue.bold(' @import ') + '\'base/fonts\';',
        value: 'base/fonts'
      }, {
        name: chalk.blue.bold(' @import ') + '\'base/global\';',
        value: 'base/global'
      }, {
        name: chalk.blue.bold(' @import ') + '\'base/normalize\';',
        value: 'base/normalize'
      }, {
        name: chalk.blue.bold(' @import ') + '\'base/reset\';',
        value: 'base/reset'
      }, {
        name: chalk.blue.bold(' @import ') + '\'base/shame\';',
        value: 'base/shame'
      }, {
        name: chalk.blue.bold(' @import ') + '\'base/utility\';',
        value: 'base/utility'
      }]
    }];

    return this.prompt(prompts).then(function (props) {
      this.props = props;
    }.bind(this));
  }
  writing () {
    this.props.includedPartials.forEach(function (partialPath) {
      var directory = partialPath.split('/')[0];
      var name = partialPath.split('/')[1];
      this.fs.copy(
        this.templatePath('_' + name + '.scss'),
        this.destinationPath('./dev/styles/' + directory + '/_' + name)
      );
    }, this)
    this.fs.copyTpl(
      this.templatePath('_bvaccel.scss'),
      this.destinationPath('./dev/styles/bvaccel.scss'),
      { includedPartials: this.props.includedPartials }
    );
  }
});
