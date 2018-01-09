'use strict';
var Generator = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');

module.exports = class extends Generator {
  prompting () {
    this.log(chalk.red.bold('\nCOPYING BUILD FILES'));
  }
  writing () {
    this.fs.copy(
      this.templatePath('_bower.json'),
      this.destinationPath('./bower.json')
    );
    this.fs.copy(
      this.templatePath('_.bowerrc'),
      this.destinationPath('.bowerrc')
    );
  }
});
