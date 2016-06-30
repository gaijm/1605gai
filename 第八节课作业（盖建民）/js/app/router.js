define(['backbone','setAjax'],function(Backbone,set){
	var Router=Backbone.Router.extend({
		routes:{
			'getData':'getData',
			'postData/:formData':'postData',
			'deleteData/:id':'deleteData',
			'putDate/:id/:formData':'putData',
			'showData/:id':'showData'
		},
		getData:function(){
			set.getData();
		},
		postData:function(formData){
			set.postData();
		},
		deleteData:function(id){
			set.deleteData();
		},
		putDate:function(id,formData){
			set.putDate();
		},
		showData:function(id){
			set.showData();
		}
	})
	var router=new Router;
	return router;
})