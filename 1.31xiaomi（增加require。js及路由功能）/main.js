require.config({
	
	paths:{
		underscore:'./lib/underscore',
		jquery:'./lib/jquery-3.0.0',
		backbone:'./lib/backbone',
		text:'./lib/text',
	}
});

require(['backbone','./router.js'],function(){
	Backbone.history.start();
})
