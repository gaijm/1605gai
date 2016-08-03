define(['jquery','swiper'],function($,swiper){
	function slider(){
		var mySwiper = new Swiper('.swiper-container', {
			autoplay: 2000, //可选选项，自动滑动
			autoplayDisableOnInteraction:false,
		    pagination:'.swiper-pagination',
		    loop:true
		    })
	};
	return{
		slider:slider
	}
})