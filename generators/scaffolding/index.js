'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var mkdirp = require('mkdirp');

module.exports = yeoman.Base.extend({
  prompting: function () {
    this.log(chalk.red.bold('\nSCAFFOLDING DIRECTORY STRUCTURE\n'));

    var prompts = [{
      type: 'list',
      name: 'projectType',
      message: 'What type of project is this?',
      choices: ['New Project', 'Existing Codebase'],
      default: 0
    }];

    return this.prompt(prompts).then(function (props) {
      this.props = props;
    }.bind(this));
  },

  writing: function() {
    mkdirp('deploy');
    mkdirp('dev/images');
    mkdirp('dev/scripts/base');
    mkdirp('dev/scripts/priority');
    mkdirp('dev/scripts/modules');
    mkdirp('dev/styles/base');
    mkdirp('dev/styles/components');
    mkdirp('dev/styles/helpers');
    mkdirp('dev/styles/layout');
    mkdirp('dev/styles/pages');
    mkdirp('dev/vendor/scripts');
    mkdirp('dev/vendor/styles');
    mkdirp('dev/vendor/styles/partials');
    mkdirp('dev/liquid');
    if (this.props.projectType === 'New Project') {
      mkdirp('dev/liquid/assets');
      mkdirp('dev/liquid/config');
      mkdirp('dev/liquid/layout');
      mkdirp('dev/liquid/locales');
      mkdirp('dev/liquid/sections');
      mkdirp('dev/liquid/snippets');
      mkdirp('dev/liquid/templates');
    }
  }
});
