define(['text!view/leyuan.html','text!mycss/leyuan.css','text!mycss/gongyong.css','jquery','lib/bt.js'],function(html,css,gongyong,$){
	function render(){
		$('#style').html(css);
		data();
		$('#container').html(html);
		$('#footer').css('display','block');
		dianji();
	};
	//列表
	function dianji(){
		$('.leyuan-nav>ul li').click(function(elem,index){
			$('.leyuan-nav>ul li').css('border','none');
			$(this).css('border-bottom','0.04rem solid #E76C65');
			$('.xuanxiangka').css('display','block');
			$('ol').css('opacity','1');
		});
		$('.xuanxiangka').click(function(){
			$('.xuanxiangka').css('display','none');
			$('ol').css('opacity','0');
		})
	};
//	获取数据
	function data(){
		$.ajax({
			type:"get",
			//本地数据
			url:"data/p2.json",
//			服务器数据
//			url:"http://10.0.161.127:3000/qly/leyuanData",
			async:true,
			success:function(response){
				var html=baidu.template('leyuan-dataJS',response);
				$('#leyuan-container').html(html);
			}
		});
	}
	
	return {
		render:render
	}
})