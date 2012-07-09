define([
  'underscore',
  'backbone',
  'collections/pages',
  'views/pageView',
], function(_, Backbone,Pages,PageView){

	var pages = {};

	var AppRouter = Backbone.Router.extend({

		initialize:function(){
		  Backbone.history.start();
		},

		routes: {
			"":					"load",
			"page/:index":		"load"
		},
		
		load:function(index){
			if(index === undefined){
				index = 0;
			}

			PageView.model = pages.at(index);
			PageView.render();
		},

	});

	var initialize = function(data){
		
		//Set bootstraped collection
		pages = data;

		var app_router = new AppRouter;
	}
	
	return{
		initialize:initialize	
	}
});