define(['text!view/home.html','text!mycss/home.css','jquery','myjs/slider.js','lib/bt.js'],function(html,css,$,slider)
{
	function render(){
		$('#style').html(css);
		getSlider();
//		listTemplet();
//		reclist();
		$('#container').html(html);
		$('#footer').css('display','block');
		slider.slider();
	};
	
	function getSlider(){
		$.ajax({
			type:"get",
			//本地数据
			url:"data/p1.json",
			//express服务器端数据
//			url:"http://10.0.161.127:3000/qly/homeData",
			async:true,
			success:function(response){
				var data=response.slider;
//				console.log(data);
				if(data.slider==='string'){
					data=JSON.parse(slider);
				};
				var arr=[];
				for(var i=0;i<data.length;i++){
					var item=str(data[i]);
					arr.push(item);
				};
				$('#home-slider').html(arr.join(''));
				var html=baidu.template('home-templateJS',response);
				$('#home-main').html(html);
				var html1=baidu.template('tuijianJS',response);
				$('#tuijian').html(html1);
			}
		});
		function str(data){
			var str='<li class="swiper-slide"><a href="#" style="background-image: url('+data.img+');"></a></li>';
			return str;
		}
	};
//	合在一起写
//	function listTemplet(){
//		$.ajax({
//			type:"get",
//			url:"data/p1.json",
//			async:true,
//			success:function(response){
//				var html=baidu.template('home-templateJS',response);
//				$('#home-main').html(html);
//			}
//		});
//	};
	
	
//	function reclist(){
//		$.ajax({
//			type:"get",
//			url:"data/p1.json",
//			async:true,
//			success:function(response){
////				console.log(response);
//				var html=baidu.template('tuijianJS',response);
//				$('#tuijian').html(html);
//			}
//		});
//	};
	
	
	
	return{
		render:render
	}
})
