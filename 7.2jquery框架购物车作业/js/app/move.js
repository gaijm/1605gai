define(['jquery'],function($){
	return{
		bgcolor:function(){
			$('tbody tr').each(function(){
				var oldcolor=$(this).css('background');
				$(this).mouseenter(function(){
					$(this).css('background','white');
				}).mouseleave(function(){
					$(this).css('background',oldcolor);
				})
			})
		}
	}
})