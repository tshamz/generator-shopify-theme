'use strict';
var Generator = require('yeoman-generator');
var chalk = require('chalk');
var mkdirp = require('mkdirp');

var templates = {
  config: [ 'settings_data.json', 'settings_schema.json' ],
  layout: [ 'checkout.liquid', 'theme.liquid' ],
  locales: [ 'en.default.json' ],
  snippets: [
    'external-scripts.liquid',
    'inline-cart.liquid',
    'open-graph-tags.liquid',
    'twitter-card.liquid'
  ],
  ['templates/customers']: [
    'account.liquid',
    'activate_account.liquid',
    'addresses.liquid',
    'login.liquid',
    'order.liquid',
    'register.liquid',
    'reset_password.liquid'
  ],
  templates: [
    '404.liquid',
    'article.liquid',
    'blog.liquid',
    'cart.contents.liquid',
    'cart.liquid',
    'collection.liquid',
    'gift_card.liquid',
    'index.liquid',
    'list-collections.liquid',
    'page.liquid',
    'product.liquid',
    'search.liquid'
  ]
}

module.exports = class extends Generator {
  prompting () {
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
  }
  writing () {
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
      mkdirp('dev/liquid/templates/customers');
      for (var directory in templates) {
        templates[directory].forEach(function (template) {
          this.fs.copy(
            this.templatePath(template),
            this.destinationPath('./dev/liquid/' + directory + '/' + template)
          );
        }, this);
      }
    }
  }
};
