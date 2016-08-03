define(['text!view/wode.html','text!mycss/wode.css','jquery'],function(html,css,$){
	function render(){
		$('#container').html(html);
		$('#style').html(css);
		$('#footer').css('display','block');
		
		$('#tucao').click(function(){
			$('#mytucao-mengban').css('display','block');
			$('#mytucao-liuyan').css('visibility','visible');
		});
		$('#mytucao-mengban,#quxiao').click(function(){
			$('#mytucao-mengban').css('display','none');
			$('#mytucao-liuyan').css('visibility','hidden');
		})
	};
	return{
		render:render
	}
})