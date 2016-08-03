define(['text!view/page1.html','text!mycss/page1.css','jquery'],function(html,css,$){
	function render(){
		$('#container').html(html);
		$('#style').html(css);
	};
	return {
		render:render
	}
})