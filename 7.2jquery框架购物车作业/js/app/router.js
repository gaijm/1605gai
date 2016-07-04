define(['jquery','backbone','../app/setAjax','../app/data'],function($,Backbone,setAjax,data){
	//路由第一步
	var Router=Backbone.Router.extend({
		//路由的配置
		routes:{
			//地址 : 函数
			'getData':'getData',
		},
		getData:function(){
			setAjax.getData(data.create);
		},
	});
	//路由第二部
	var router=new Router;
	//返回 router
	return router;
})