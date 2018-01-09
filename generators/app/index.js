'use strict';
var Generator = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');

module.exports = class extends Generator {
  prompting () {
    // Have Yeoman greet the user.
    this.log(yosay(
      chalk.green('\nGet money.\nGet paid.\n')
    ));
  }
  writing () {
    this.composeWith('shopify-theme:scaffolding');
    this.composeWith('shopify-theme:build');
    this.composeWith('shopify-theme:styles');
    this.composeWith('shopify-theme:vendor');
  }
  install () {
    // this.installDependencies();
    this.installDependencies({ bower: true, npm: false }, function () {
      console.log('Everything is ready!');
    });
  }
};
