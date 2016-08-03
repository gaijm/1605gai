require.config({
	paths:{
		jquery:'./lib/jquery-3.0.0',
		underscore:'./lib/underscore',
		backbone:'./lib/backbone',
		text:'./lib/text',
		bt:'./lib/bt.js',
		swiper:'./lib/swiper-3.3.1.min'
	}
});

require(['backbone','router.js'],function(){
	Backbone.history.start();
})

