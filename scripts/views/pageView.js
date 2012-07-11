define([
  // These are path alias that we configured in our bootstrap
  'zepto',
  'underscore',
  'backbone',
  'handlebars',
  'text!templates/page.html',
], function($, _, Backbone, Handlebars, pageViewTemplate){
	var PageView = Backbone.View.extend({

		//Define the default template
		template: Handlebars.compile(pageViewTemplate),

		//The parent div for this element
		el:'#content',

		initialize:function(){
			this.model.bind('change',this.test);
		},
		load:function(data){
			this.model = data;
			this.render();	
		},
		//Render function
		render:function(){
			this.$el.html(this.template(this.model.toJSON()));
			return this;
		},
		test:function(){
			console.log(this.model);
		 	console.log('change');
		}
	});
  return PageView;
  // What we return here will be used by other modules
});