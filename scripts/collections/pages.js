define([
  'underscore',
  'backbone',
  'models/page'
], function(_, Backbone, Page){
 	var Pages = Backbone.Collection.extend({
	  
	  // Reference to this collection's model.
	  model: Page,
	  	  
	});
  return new Pages;
  // What we return here will be used by other modules
});