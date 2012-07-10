define([
  'underscore',
  'backbone',
  'models/section'
], function(_, Backbone, Section){
 	var Sections = Backbone.Collection.extend({
	  
	  // Reference to this collection's model.
	  model: Section,
	  	  
	});
  return new Sections;
  // What we return here will be used by other modules
});