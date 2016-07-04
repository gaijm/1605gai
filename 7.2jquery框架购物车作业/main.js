requirejs.config({
	baseUrl:'js/lib',
	paths:{
		'jquery':'jquery-3.0.0',
		'backbone':'backbone',
		'underscore':'underscore',
		'ui':'jquery-ui',
	}
});
//通过backbone和router启动路由（让页面的元素和方法产生联系）
require(['backbone','../app/router'],function(Backbone,router){
	Backbone.history.start();
});
//调用jq，调用路由的地址 从而使用地址对应的函数
require(['jquery'],function($){
	//方法一点击按钮获得数据
//	$('#btn').click(function(){
//		window.location.href="#/getData";
//	});
	//方法二 自动加载
	window.location.href="#/getData";
})