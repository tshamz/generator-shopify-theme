'use strict';
// var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');

var Generator = require('yeoman-generator');

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

// module.exports = yeoman.Base.extend({
//   prompting: function () {
//     // Have Yeoman greet the user.
//     this.log(yosay(
//       chalk.green('\nGet money.\nGet paid.\n')
//     ));
//   },
//   writing: function () {
//     this.composeWith('shopify-theme:scaffolding');
//     this.composeWith('shopify-theme:build');
//     this.composeWith('shopify-theme:styles');
//     this.composeWith('shopify-theme:vendor');
//   },
//   install: function () {
//     // this.installDependencies();
//     this.installDependencies({ bower: true, npm: false }, function () {
//       console.log('Everything is ready!');
//     });
//   }
// });
