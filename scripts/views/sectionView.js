define([
  // These are path alias that we configured in our bootstrap
  'zepto',
  'underscore',
  'backbone',
  'handlebars',
  'models/section',
  'text!templates/section.html',
], function($, _, Backbone, Handlebars, Section, sectionViewTemplate){
	var SectionView = Backbone.View.extend({

		//Define the default template
		template: Handlebars.compile(sectionViewTemplate),

		//The parent div for this element
		el:'#content',

		//Set one specific model for this particular view.
		model:new Section,

		initialize:function(){
			this.model.bind('change',this.render,this);
		},
		load:function(data,page){

			//Set the modal for the specific section
			this.model.set(data);
			
			//Set the active page
			if(page >= 0){
				this.setPage(page);	
			}
			
		},
		//Render function
		render:function(){
			this.$el.html(this.template(this.model.toJSON()));
			return this;
		},
		setPage:function(page){
			var page = $('.section .page').eq(page);
			var transition = $('.section').attr('data-section-transition');
			var activePage = $('.page.active');

			if(page.hasClass('active') != true){
				page.addClass('active');
				this.transitionPage(transition,page,activePage);
			}
			
		},
		transitionPage:function(transition,page,activePage){
			
			switch(transition){
				case 'fade':
					page.animate({opacity:1},1000,'ease-out');
					activePage.animate({opacity:0},1000,'ease-out');
				break;
				case 'slide':
					if(activePage.length > 0){
						if(activePage.index() < page.index()){
							if(page.offset().left < activePage.offset().left){
								page.animate({translateX:'0px'},0,'',function(){
									page.animate({translateX:'-1024px'},1000,'ease-out');
								});
							}else{
								page.animate({translateX:'-1024px'},1000,'ease-out');
							}
							
							activePage.animate({translateX:'-2048px'},1000,'ease-out',function(){
								activePage.removeClass('active');
							});
						}else{
							if(page.offset().left > activePage.offset().left){
								page.animate({translateX:'-2048px'},0,'',function(){
									page.animate({translateX:'-1024px'},1000,'ease-out');
								});
							}else{
								page.animate({translateX:'-1024px'},1000,'ease-out');
							}
							
							activePage.animate({translateX:'0px'},1000,'ease-out',function(){
								activePage.removeClass('active');
							});
						}
					}else{
						page.animate({translateX:'-1024px'},1000,'ease-out');
					}
				break;
			}

			activePage.removeClass('active');

		}
	});
  return SectionView;
  // What we return here will be used by other modules
});