define(['text!view/myzhanghao.html','text!mycss/myzhanghao.css','jquery'],function(html,css,$){
	function render(){
		$('#container').html(html);
		$('#style').html(css);
		$('#footer').css('display','none');
	};
	return{
		render:render
	}
})