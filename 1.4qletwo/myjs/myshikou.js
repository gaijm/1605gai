define([],function(){
	function myshikou(){
		document.documentElement.style.fontSize=innerWidth/6.4+'px';
		window.onresize=function(){
			document.documentElement.style.fontSize=innerWidth/6.4+'px';
		};
	};
	return{
		myshikou:myshikou
	};
})
