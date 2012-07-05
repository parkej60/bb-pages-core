define([
  'underscore', // lib/underscore/underscore
  'backbone'    // lib/backbone/backbone
], function(_, Backbone){
	var Page = Backbone.Model.extend({
	
	  // Default attributes for the todo.
	  defaults: {
	  	title:	"[Title]",
	    hash: "[hash]",
	    content: "[Content]"
	  },
	  
	  // Ensure that each todo created has `content`.
	  initialize: function() {
	    if (!this.get("content")) {
	      this.set({"content": this.defaults.content});
	    }
	  },
	  
	});
  return Page;
  // What we return here will be used by other modules
});