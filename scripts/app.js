// Filename: app.js
define([
  'jquery',
  'underscore',
  'backbone',
  'router', // Request router.js
], function($, _, Backbone, Router){
  
  //Bootstrap our data so that it is available on load.
  var initialize = function(){
    $.getJSON('../data/data.json',function(data){
      Router.initialize(data);
    });
  }

  return {
    initialize: initialize,
  };
});
