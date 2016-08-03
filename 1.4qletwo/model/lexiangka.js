define(['text!view/lexiangka.html','text!mycss/lexiangka.css','jquery'],function(html,css,$){
	function render(){
		$('#container').html(html);
		$('#style').html(css);
		$('#footer').css('display','block');
	};
	return{
		render:render
	}
})