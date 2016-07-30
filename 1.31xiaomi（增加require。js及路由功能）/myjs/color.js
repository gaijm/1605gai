define(['jquery'],function($){
	function color(){
		$('.footer').find('dl').click(function(){
			$('.footer').find('dd').css('color','#999999');
			$(this).find('dd').css('color','#F56A00');
			$('.footer').find('a').css('text-decoration','none');
		});
	};
	return{
		color:color
	}
})