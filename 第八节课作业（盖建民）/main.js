requirejs.config({
	baseUrl:'js/lib/',
	paths:{
		'jquery':'jquery-3.0.0',
		'backbone':'backbone',
		'underscore':'underscore',
		'hostUrl':'../app/hostUrl',
		'oldFn':'../app/oldFn',
		'setAjax':'../app/setAjax',
		'router':'../app/router'
	},
	shim:{
		'oldFn':{
			export:'test'
		}
	}
});
require(['jquery','backbone','hostUrl','oldFn','setAjax','router'],function($,Backbone,hostUrl,old,set,router){
//测试oldFn是否加载；
//	test();
//测试hostUrl是否加载；
//	alert(hostUrl.hostUrl);
//测试setAjax中的get数据
//	set.getData();
//测试上传数据
//	set.postData('name=111为位&price=111&miaoshu=颠三倒四&url1=试试');
//测试删除数据
//	set.deleteData('abfdce2d8358b832');
//测试修改数据
//	set.putData('f1c1d8703b6feada','name=111为位&price=111&miaoshu=颠三倒四&url1=试试');
//测试展示数据
//	set.showData('76800414d6b28b9f');
	Backbone.history.start();
});