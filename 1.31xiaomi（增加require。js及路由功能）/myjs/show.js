define(['jquery'],function($){
	function show(){
		document.documentElement.style.fontSize=innerWidth/3.2+'px';
		window.onresize=function(){
			document.documentElement.style.fontSize=innerWidth/3.2+'px';
		};
		$('#show-slider').click(function(){
			$('#slider').animate({'left':'0%'},500);
		});
		$('#slider').click(function(){
			$('#slider').animate({'left':'-45%'},500);
		});
	};
	return{
		show:show
	};
})





	
		