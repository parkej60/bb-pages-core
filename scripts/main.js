// Filename: main.js

// Require.js allows us to configure shortcut alias
// There usage will become more apparent futher along in the tutorial.
requirejs.config({
	shim: {
    underscore:{
      exports:'_'
    },
  	backbone: {
      //These script dependencies should be loaded before loading
      //backbone.js
      deps: ['underscore','jquery'],
      //Once loaded, use the global 'Backbone' as the
      //module value.
      exports: 'Backbone'
     },
    handlebars:{
      exports:'Handlebars'
    }
  },
	baseUrl: 'scripts',
  paths: {
    underscore: 'libs/underscore/underscore',
    handlebars: 'libs/handlebars/handlebars',
    backbone: 'libs/backbone/backbone',
    jquery: 'libs/jquery/jquery',
    templates: '../templates'
  }

});

requirejs(['app','jquery','underscore','backbone','handlebars'],function(App) {
  App.initialize();
});