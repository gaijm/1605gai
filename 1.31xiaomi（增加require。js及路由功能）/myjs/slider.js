define(['jquery'],function($){
	function slider(){
			var mySwiper = new Swiper('.swiper-container', {
			autoplay: 2000, //可选选项，自动滑动
		})
	};
	return{
		slider:slider
	}
	
})