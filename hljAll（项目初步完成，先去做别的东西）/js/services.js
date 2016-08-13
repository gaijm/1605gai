app.factory('hlj',function(){
	return{
		//查询框的显示与隐藏
		wedsearch:function(){
			if($('#wedsearch').css('display')=='none'){
				$('#wedsearch').css('display','block');
				return;
			}else{
				$('#wedsearch').css('display','none');
				return;
			}
		},
//		自动轮播
		swip:function(){
			var mySwiper = new Swiper('.swiper-container', {
			autoplay: 2000, //可选选项，自动滑动
			autoplayDisableOnInteraction:false,
		    pagination:'.swiper-pagination',
		    loop:true
		 	});
		},
		//手动滑屏
		huaScreen:function(id,num){
			 var istartX;
			 var istartScroll=0;
			 var iscroll=0;
			 var oUl=document.getElementById(id);
			 oUl.addEventListener('touchstart',fnstart,false);
			 	function fnstart(e){
			 		istartX=e.changedTouches[0].pageX;
			 		istartScroll=iscroll;
			 	};
			 oUl.addEventListener('touchmove',fnmove,false);
			 	function fnmove(e){
			 		e.preventDefault();
			 		iDis=e.changedTouches[0].pageX-istartX;
			 		iscroll=iDis+istartScroll;
			 		oUl.style.transform='translateX('+iscroll/20+'rem)';
			 	};
			 oUl.addEventListener('touchend',fnend,false);
			 	function fnend(e){
			 		iDis=e.changedTouches[0].pageX-istartX;
			 		iscroll=iDis+istartScroll;
			 		oUl.style.transform='translateX('+iscroll/20+'rem)';
			 		if(iscroll>100){
			 			iscroll=0;
			 			oUl.style.transition='0.6s';
			 			oUl.style.transform='translateX('+iscroll/20+'rem)';
			 		}
			 		if(iscroll<=-1238){
			 			oUl.style.transition='0.6s';
			 			iscroll=-num;
			 			oUl.style.transform='translateX('+iscroll/20+'rem)';
			 		}
			 	};
			},
//		回到顶部
		toTop:function(id){
			$(window).scroll(function(){
				if($(this).scrollTop()!=0){
					$(id).fadeIn();
				}else{
					$(id).fadeOut();
				};
			})
			$(id).click(function(){
				$('html,body').animate({scrollTop:0},500);
			});
		},
//		buyshoes页面的点击弹出过滤窗口
		filtleft:function(){

			$('.firstnav').bind('touchend', function() {
				$('.firstnav-ol').toggle();
				$('.secondnav-ol').hide();
				return;
			})
			$('.secondnav').bind('touchend', function() {
				$('.secondnav-ol').toggle();
				$('.firstnav-ol').hide();
				return;
			})
			$('.secondnav-ol li').bind('click',function(){
				$('.secondnav-ol li').removeClass('wedactive');
				$('.secondnav-ol li').find('span').remove();
				$(this).addClass('wedactive').append('<span class="selected">√</span>');
				$('.secondnav-ol').hide();
				return;
			});
			$('.firstnav-ol li').bind('click',function(){
				$('.firstnav-ol li').removeClass('wedactive');
				$('.firstnav-ol li').find('span').remove();
				$(this).addClass('wedactive').append('<span class="selected">√</span>');
				$('.firstnav-ol').hide();
				return;
			});
			
		},
		//回退功能
		toBack:function(){
			window.history.back();
		}
	}
})

