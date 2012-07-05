define([
  'zepto',
  'underscore',
  'backbone',
  'collections/pages',
  'views/pageView',
], function($, _, Backbone,Pages,PageView){
	var AppRouter = Backbone.Router.extend({
	  initialize:function(){
		  Backbone.history.start();
	  },
	  
	  routes: {
	  	"":											"template",
		  "page/:query":          "page"
		},
		
		/*
		template:function(){
			var newPage = new PageView({model:LoadPage.at(0)});
		},
		page: function(query) {
			var newPage = new PageView({model:PageList.at(query)});
	  }
	  */
	});
	
	var initialize = function(){
		var app_router = new AppRouter;
	}
	
	return{
		initialize:initialize	
	}
});