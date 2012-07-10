define([
  'underscore', // lib/underscore/underscore
  'backbone'    // lib/backbone/backbone
], function(_, Backbone){
	var Section = Backbone.Model.extend({
	
	  // Default attributes for the todo.
	  defaults: {
	  	title:	"[Title]",
	  	content: "[Content]",
	  	pages: {},
	  },	  
	});
  return Section;
  // What we return here will be used by other modules
});