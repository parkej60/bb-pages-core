define([
  // These are path alias that we configured in our bootstrap
  'zepto',
  'backbone',
  'handlebars',
  'text!templates/menu.html'
], function($, Backbone, Handlebars, MenuViewTemplate){
	var MenuView = Backbone.View.extend({

		//Define the default template
		template: Handlebars.compile(MenuViewTemplate),

		//The parent div for this element
		el:'#main-menu',

		initialize:function(){
			
		},
		//Render function
		render:function(){
			this.$el.html(this.template(this.model));
		},
	});
  return MenuView;
  // What we return here will be used by other modules
});