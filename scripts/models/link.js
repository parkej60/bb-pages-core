define([
  'underscore', // lib/underscore/underscore
  'backbone'    // lib/backbone/backbone
], function(_, Backbone){
	var Link = Backbone.Model.extend({
	
	  // Default attributes, although these should always be set
	  defaults: {
	  	link: "[Title]",
	    href: "/#page/1",
	  },
	  
	});
  return Link;
  // What we return here will be used by other modules
});