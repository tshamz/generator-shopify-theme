'use strict';
var Generator = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');

var ancillaryFiles = {
  'jquery.slick.js': {
    stylesheets: ['_slick.scss', '_slick-theme.scss'],
    images: ['_ajax-loader.gif'],
    fonts: ['_slick.woff']
  },
  'jquery.venobox.js': {
    stylesheets: ['_venobox.scss'],
    images: [],
    fonts: []
  },
  'jquery.select2.js': {
    stylesheets: ['_select2.scss'],
    images: [],
    fonts: []
  }
};

module.exrts = class extends Generator {
  prompting () {
    this.log(chalk.red.bold('\nCREATING SCSS MANIFEST (vendor.scss)\n'));

    var prompts = [{
      type: 'checkbox',
      name: 'vendorLibraries',
      message: 'Which vendor libraries would you like to include?',
      choices: [{
        name: 'CartJS',
        value: 'cart.js',
        checked: true,
        disabled: 'Required'
      }, {
        name: '$.cookie',
        value: 'jquery.cookie.js',
        checked: true,
        disabled: 'Required'
      }, {
        type: 'separator'
      }, {
        name: 'FitVids.js',
        value: 'jquery.fitvids.js'
      }, {
        name: 'Moment.js',
        value: 'moment.js'
      }, {
        name: 'Select2.js',
        value: 'jquery.select2.js'
      }, {
        name: 'Slick',
        value: 'jquery.slick.js'
      }, {
        name: 'VenoBox',
        value: 'jquery.venobox.js'
      }],
      default: ['slick.js']
    }];

    return this.prompt(prompts).then(function (props) {
      this.props = props;
    }.bind(this));
  }
  writing () {
    this.props.vendorLibraries.forEach(function (library) {
      this.fs.copy(
        this.templatePath('_' + library),
        this.destinationPath('./dev/vendor/scripts/' + library)
      );
      if (ancillaryFiles.hasOwnProperty(library)) {
        ancillaryFiles[library].stylesheets.forEach(function (stylesheet) {
          this.fs.copy(
            this.templatePath(stylesheet),
            this.destinationPath('./dev/vendor/styles/partials/' + stylesheet)
          );
        }, this);
        ancillaryFiles[library].images.forEach(function (image) {
          this.fs.copy(
            this.templatePath(image),
            this.destinationPath('./dev/images/' + image.substr(1))
          );
        }, this);
        ancillaryFiles[library].fonts.forEach(function (font) {
          this.fs.copy(
            this.templatePath(font),
            this.destinationPath('./dev/liquid/assets/fonts/' + font.substr(1))
          );
        }, this);
      }
    }, this);
    this.fs.copyTpl(
      this.templatePath('_vendor.scss'),
      this.destinationPath('./dev/vendor/styles/vendor.scss'),
      { ancillaryFiles: ancillaryFiles, vendorLibraries: this.props.vendorLibraries }
    );
  }
};
