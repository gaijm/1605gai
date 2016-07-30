define(['backbone'],function(){
	var Router=Backbone.Router.extend({
		
		routes:{
			'':'shangcheng',
			'shangcheng':'shangcheng',
			'fenlei':'fenlei',
			'gouwuche':'gouwuche',
			'fuwu':'fuwu',
			'goods':'goods'
		},
		shangcheng:function(){
			require(['model/mi.js','jquery','myjs/color.js'],function(mi,$,color){
				mi.render();
				color.color();
			})
		},
		fenlei:function(){
			require(['model/list.js','myjs/color.js','myjs/myshikou.js'],function(list,color,myshikou){
				list.render();
				color.color();
				myshikou.myshikou();
			})
		},
		gouwuche:function(){
			require(['model/shopcar.js','myjs/color.js','myjs/myshikou.js'],function(shopcar,color,myshikou){
				shopcar.render();
				color.color();
				myshikou.myshikou();
			})
		},
		fuwu:function(){
			require(['model/pay.js','myjs/color.js','myjs/myshikou.js'],function(pay,color,myshikou){
				pay.render();
				color.color();
				myshikou.myshikou();
			})
		},
		goods:function(){
			require(['model/goods.js','myjs/myshikou.js','myjs/goods-slidr'],function(goods,myshikou,slider){
				goods.render();
				myshikou.myshikou();
				slider.goodsSlider();
			})
		}
	});
	
	var router=new Router();
	
	return router;
})