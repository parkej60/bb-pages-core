define([
  'underscore',
  'backbone',
  'models/page'
], function(_, Backbone,Page){
  var Pages = Backbone.Collection.extend({
	  
	  url:'/data/pages.json',
	  
	  // Reference to this collection's model.
	  model: Page,
	  
	  parse:function(res){
	  	return res.pages
	  }
	  
	});
  return {};
  // What we return here will be used by other modules
});