define([
  'underscore',
  'backbone',
  'views/appView'
], function(_, Backbone,AppView){

	var AppRouter = Backbone.Router.extend({

		view:{},

		initialize:function(data){
		  	//Triggers AppView Initialize
			this.view = new AppView({model:data});
		  	Backbone.history.start();
		},

		routes: {
			"":									"load",
			"section/:section":                 "load",
			"section/:section/p:page":			"load",
		},
		
		load:function(section,page){
			//Default to the first page
			if(section === undefined){
				section = 0;
			}else{
				section = section - 1;
			}

			if(page === undefined){
				page = -1;
			}else{
				page = page - 1;
			}

			
			this.view.render(section,page);	
		},

	});

	var initialize = function(data){

		//This triggers AppRouter.initalize()
		new AppRouter(data);


	}
	
	return{
		initialize:initialize	
	}
});