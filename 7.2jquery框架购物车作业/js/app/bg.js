define(['jquery'],function($){
	return{
		togglebg:function(){
			$('tbody tr:even').css('background','greenyellow');
			$('tbody tr:odd').css('background','pink');
		}
	}
})