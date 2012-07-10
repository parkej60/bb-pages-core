define([
  // These are path alias that we configured in our bootstrap
  'jquery',
  'underscore',
  'backbone',
  'handlebars',
  'text!templates/section.html',
], function($, _, Backbone, Handlebars, sectionViewTemplate){
	var SectionView = Backbone.View.extend({

		//Define the default template
		template: Handlebars.compile(sectionViewTemplate),

		//The parent div for this element
		el:'#content',

		initialize:function(){
			this.model.bind('change',this.test);
		},
		load:function(data,page){
			this.model = data;
			this.render();	

			//Set the active page
			if(page >= 0){
				this.activePage(page);	
			}
			
		},
		//Render function
		render:function(){
			this.$el.html(this.template(this.model.toJSON()));
			return this;
		},
		test:function(){
			console.log(this.model);
		 	console.log('change');
		},
		activePage:function(page){
			
			var page = $('.section .page').eq(page);
			$('.page').removeClass('active');
			page.addClass('active');
		}
	});
  return SectionView;
  // What we return here will be used by other modules
});