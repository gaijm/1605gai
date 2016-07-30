define(['text!list.html','jquery'],function(html,$){
	function render(){
		$('#head link[href^=mycss]').remove();
		$('#head').append('<link rel="stylesheet" href="mycss/product.css" />')
		$('#container').html(html);
		$('.footer').css('display','block');
	};
	return{
		render:render
	}
})