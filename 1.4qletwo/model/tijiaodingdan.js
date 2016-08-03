define(['text!view/tijiaodingdan.html','text!mycss/tijiaodingdan.css','jquery'],function(html,css,$){
	function render(){
		$('#container').html(html);
		$('#style').html(css);
		$('#footer').css('display','none');
	};
	return{
		render:render
	}
})
