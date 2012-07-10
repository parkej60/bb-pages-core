define([
  // These are path alias that we configured in our bootstrap
  'jquery',
  'underscore',
  'backbone',
  'handlebars',
  'views/sectionView',
  'views/menuView',
  'collections/sections',
], function($, _, Backbone, Handlebars,SectionView,MenuView,Sections){
	var AppView = Backbone.View.extend({

		//Stores a reference to our main menu
		mainMenu:{},

		//Stores reference to current page
		section:{},

		//The parent div
		el:'#app',

		//Events that are being listened to on #app
	    events:{"click"     : "active"},

	    //Process to run when this view is initialized
	    initialize:function(){

	    	//Load our Pages Collection
			Sections.reset(this.model.sections);
			
	     	//Load the main menu
			this.mainMenu = new MenuView;
			this.mainMenu.model = this.model.main_menu;
			this.mainMenu.render();

			//Loads the page view
			this.section = new SectionView({model:Sections.at(0)});
			this.section.render();
	    },

	    //Currently just renders a page view with a designated model from the Pages collection
	    render:function(section,page){
	    	this.section.load(Sections.at(section),page);
	    },

	    active:function(event){
	      $('.menu a').removeClass('active');
	      $('.menu a[href="' + event.target.hash + '"]').addClass('active');
	    }

	});
  return AppView;
  // What we return here will be used by other modules
});