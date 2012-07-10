define([
  'backbone',
  'models/link'
], function(Backbone,Link){
 	var Links = Backbone.Collection.extend({
	  
	  // Reference to this collection's model.
	  model: Link,
	  
	});
  return new Links();
  // What we return here will be used by other modules
});