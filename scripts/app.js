// Filename: app.js
define([
  'zepto',
  'router', // Request router.js
], function($, Router){
  
  //Bootstrap our data so that it is available on load.
  var initialize = function(){
    $.getJSON('data/data.json',function(data){
      Router.initialize(data);
    });
  }

  return {
    initialize: initialize,
  };
});
