$(function(){
	
	var aLi=$('.gai-find-nav-ul>li');
	
	var aShowDiv=$('#gai-zhaoshangjia-show>li');
	
	aLi.click(function(){
//		alert($(this).index())
		$('#gai-zhaoshangjia-show>li').removeClass('active');
		$('#gai-zhaoshangjia-show>li:eq('+$(this).index()+')').addClass('active');
		if($('#gai-zhaoshangjia-show>li:eq('+$(this).index()+')').attr('class')=='active'){
//			$('#gai-zhaoshangjia-show>li:eq('+$(this).index()+')').removeClass('active');
		}
	});
	
	$('.gai-ol-li-lists').find('li').each(function(elem,index){
		
		$('.gai-ol-li-lists').find('li').click(function(){
			if($(this).index()<=3){
				$('.gai-ol-li-content').children('div').removeClass('active');
				$($('.gai-ol-li-content').children('div').eq($(this).index())).addClass('active');
			}
		})
		
	})
	
})