// Filename: app.js
define([
  'jquery',
  'underscore',
  'backbone',
  'router', // Request router.js
], function($, _, Backbone, Router){

  var pages = new Backbone.Collection();

  var initialize = function(){
    $.getJSON('../data/pages.json',function(data){
      $.each(data,function(key,val){
        pages.add(val);
      });

      Router.initialize(pages);
    });
  }
  return {
    initialize: initialize,
    pages:pages
  };
});
