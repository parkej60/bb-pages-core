define([
  // These are path alias that we configured in our bootstrap
  'jquery',
  'underscore',
  'backbone',
  'text!templates/page.html',
  'json2'
], function($, _ , Backbone,pageViewTemplate){
	var PageView = Backbone.View.extend({

		//Define the default template
		template: _.template(pageViewTemplate),

		//The parent div for this element
		el:'#content',

		initialize:function(){
			
		},
		//Render function
		render:function(){
			this.$el.html(this.template(this.model.toJSON()));
		},
	});
  return new PageView;
  // What we return here will be used by other modules
});