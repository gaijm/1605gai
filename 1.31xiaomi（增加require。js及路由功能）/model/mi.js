define(['text!mi.html','jquery','myjs/slider.js','myjs/show.js'],function(html,$,slider,show){
	function render(){
		$("#head link[href^=mycss]").remove();
		$('#head').append('<link rel="stylesheet" href="mycss/new_file.css" />');
		$('#container').html(html);
		$('.footer').css('display','block');
		slider.slider();
		show.show();
	}
	return{
		render:render
	}
})