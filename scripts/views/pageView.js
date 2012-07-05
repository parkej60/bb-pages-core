define([
  // These are path alias that we configured in our bootstrap
  'zepto',
  'underscore',
  'backbone',
  'text!templates/page.html'
], function($, _, Backbone,pageViewTemplate){
	var PageView = Backbone.View.extend({
		render:function(){
			var data = {};
			var compiledTemplate = _.template(pageViewTemplate,data);
			this.el.html(this.template(compiledTemplate));
		},
	});
  return new PageView;
  // What we return here will be used by other modules
});