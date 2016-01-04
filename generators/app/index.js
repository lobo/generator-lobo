'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');
var mkdirp = require('mkdirp');

module.exports = yeoman.generators.Base.extend({
  prompting: function () {
    var done = this.async();

    // Have Yeoman greet the user.
    this.log(yosay(
      'Welcome to the awesome ' + chalk.red('generator-lobo') + ' generator!'
    ));

    var prompts = [{
      type: 'confirm',
      name: 'someOption',
      message: 'Would you like to enable this option?',
      default: true
    }];

    this.prompt(prompts, function (props) {
      this.props = props;
      // To access props later use this.props.someOption;

      done();
    }.bind(this));
  },

  // Wolf: here I create the structure of my repository
  generateBasic: function() {
    mkdirp('./app/middleware');
    mkdirp('./app/models');
    mkdirp('./app/routes');
    mkdirp('./config');
    mkdirp('./lib');
  },

  writing: function () {
    this.fs.copy(
      this.templatePath('access_control_headers.js'),
      this.destinationPath('./app/middleware/access_control_headers.js')
    ),
    this.fs.copy(
      this.templatePath('error_handler.js'),
      this.destinationPath('./app/middleware/error_handler.js')
    );
    /* Wolf: this is how you template:
    this.fs.copyTpl(
      this.templatePath('index.html'),
      this.destinationPath('public/index.html'),
      { title: 'Templating with Yeoman' }
    );
    */
  },

  install: function () {
    this.installDependencies();
  }
});
