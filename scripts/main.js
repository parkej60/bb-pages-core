// Filename: main.js

// Require.js allows us to configure shortcut alias
// There usage will become more apparent futher along in the tutorial.
requirejs.config({
	shim: {
  	'backbone': {
      //These script dependencies should be loaded before loading
      //backbone.js
      deps: ['zepto','underscore'],
      //Once loaded, use the global 'Backbone' as the
      //module value.
      exports: 'Backbone'
     }
  },
	baseUrl: 'scripts',
  paths: {
    zepto: 'libs/zepto/zepto',
    underscore: 'libs/underscore/underscore',
    backbone: 'libs/backbone/backbone',
    templates: '../templates'
  }

});

requirejs(['app','zepto','underscore','backbone'],function(App) {
  App.initialize();
});