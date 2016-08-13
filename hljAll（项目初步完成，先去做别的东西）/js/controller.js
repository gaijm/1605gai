app
.controller('myWeddingshoesCtrl',function($scope,$http,hlj){
	//获取数据
	$http.get('data/fenlei-xiangbao.json').success(function(res){
		$scope.weddingshoesData=res;
	});
//	排序高到低
	$scope.sortDataUp=function(data){
	if(angular.isArray(data)){
		data.sort(function(a,b){
			var n1=a.actual_price;
			var n2=b.actual_price;
			return n2-n1;
		});
	}else{
		alert('no')
	}
		console.log(data);
	};
	//	排序低到高
	$scope.sortDataDown=function(data){
		if(angular.isArray(data)){
			data.sort(function(a,b){
				var n1=a.actual_price;
				var n2=b.actual_price;
				return n1-n2;
			});
		}else{
			return data;
		}
	};
	//	排序综合
	$scope.sortDataAll=function(data){
		if(angular.isArray(data)){
			data.sort(function(a,b){
				var n1=a.id;
				var n2=b.id;
				return n2-n1;
			});
		}else{
			return data;
		}
	};

//	点击显示搜索框
	$scope.wedClick=function(){
		hlj.wedsearch();
	};
	//弹出过滤窗口
	$scope.myfiltleft=function(){
		hlj.filtleft();
	};
	$scope.myfiltleft();
	
//	过滤功能
	var origenItem=null;
	$scope.getItem=function(item){
		origenItem=item;
	};
	$scope.liContent=function(myData){
		return origenItem==null||origenItem==myData.id;
	}
	
	
})
.controller('homeCtrl',function($scope,$http,hlj){
	$http.get('data/home.json').success(function(res){
		$scope.homeData=res;
	});
	//轮播
	$scope.home1=function(){
		hlj.swip();
	};
	$scope.home1();
	//获取数据
	$http.get('data/category-theme.json').success(function(res){
		$scope.categoryTdata=res;
	});
	//滑动图片
	hlj.huaScreen('huadUl',1140);
	//回到顶部
	$scope.top=function(id){
		hlj.toTop(id);
	};
	$scope.top('#toTop');
})
.controller('fenleiCtrl',function($scope,$http,hlj){
	$http.get('data/category.json').success(function(res){
		$scope.categoryData=res;
	});
	$http.get('data/category-purchase.json').success(function(res){
		$scope.categoryPdata=res;
	});
	$http.get('data/category-theme.json').success(function(res){
		$scope.categoryTdata=res;
	});
	hlj.huaScreen('huadDiv',1018)
})
.controller('zhaoshangjiaCtrl',function($scope,$http){
	$http.get('data/zhaoshangjia.json').success(function(res){
		$scope.zhaoshangjiaData=res;
	});
	$http.get('data/zhaoshangjiaicon.json').success(function(res){
		$scope.zhaoshangjiaiconData=res;
	})
})
.controller('sayCtrl',function($scope,$http){
	$http.get('data/bridefaxian.json').success(function(res){
		$scope.bridefaxianData=res;
	});
	$http.get('data/birdeguanzhu.json').success(function(res){
		$scope.brideguanzhuData=res;
	});
	$http.get('data/bridehunliren.json').success(function(res){
		$scope.bridehunlirenData=res;
	});
	$http.get('data/bridegushi.json').success(function(res){
		$scope.bridegushiData=res;
	});
	
})
.controller('buyshoesCtrl',function($scope,hlj){
	$scope.back=function(){
		hlj.toBack();
	};
})
.controller('budget2Ctrl',function($scope,hlj){
	$scope.back=function(){
		hlj.toBack();
	};
})