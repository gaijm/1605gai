$(function(){
	
	var aLi=$('.gai-find-nav-ul>li');
	
	var aShowDiv=$('#gai-zhaoshangjia-show>li');
	var flag=true;
	aLi.click(function(elem,index){
			if($('#gai-zhaoshangjia-show>li:eq('+$(this).index()+')').css('display')=='none'){
				$('#gai-zhaoshangjia-show>li').css('display','none');
				$('#gai-zhaoshangjia-show>li:eq('+$(this).index()+')').css('display','block');
			}
			else{
				$('#gai-zhaoshangjia-show>li:eq('+$(this).index()+')').css('display','none');
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