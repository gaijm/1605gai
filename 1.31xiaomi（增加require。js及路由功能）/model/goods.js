define(['text!goods.html','jquery'],function(html,$){
	function render(){
		$('#head link[href^=mycss]').remove();
		$('#head').append('<link rel="stylesheet" href="mycss/goods.css" />');
		$('#container').html(html);
		$('.footer').css('display','none');
	};
	return{
		render:render
	}
})