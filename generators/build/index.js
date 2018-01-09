'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');

module.exports = yeoman.Base.extend({
  prompting: function () {
    this.log(chalk.red.bold('\nCOPYING BUILD FILES'));
  },

  writing: function () {
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
