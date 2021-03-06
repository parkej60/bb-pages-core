define([
  'underscore', // lib/underscore/underscore
  'backbone'    // lib/backbone/backbone
], function(_, Backbone){
	var Page = Backbone.Model.extend({
	
	  // Default attributes for the todo.
	  defaults: {
	  	title:	"[Title]",
	    content: "[Content]",
	    transition: "slide",
	  },
	});
  return Page;
  // What we return here will be used by other modules
});