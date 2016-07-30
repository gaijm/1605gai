define([],function(){
	function goodsSlider(){
		var iScroll=0;
		var startX;
		var dx;
		var iNow=0;
		var startScroll=0
		var moveUl=document.getElementById('mover');
		var aLi=moveUl.getElementsByTagName('li');
		moveUl.addEventListener('touchstart',touchstart);
		function touchstart(ev){
			startX=ev.changedTouches[0].clientX;
			startScroll=iScroll;
		};
		moveUl.addEventListener('touchmove',touchmove);
		function touchmove(ev){
			ev.preventDefault();
			dx=ev.changedTouches[0].clientX-startX;
			iScroll=startScroll+dx;
			moveUl.style.transform='translateX('+iScroll/100+'rem)';
			moveUl.style.transition='0.3s';
		}
		moveUl.addEventListener('touchend',touchend);
		function touchend(ev){
			dx=ev.changedTouches[0].pageX-startX;
			iScroll=startScroll+dx;
			iNow=-iScroll/90;
			console.log(iScroll);
			if(iNow<0){
				iNow=0;
				iScroll=-iNow*90;
			}
			if(iNow>aLi.length-1){
				iNow=aLi.length-1;
				iScroll=-iNow*90+220;
			};
			moveUl.style.transform='translateX('+iScroll/100+'rem)';
		}
	};
	return{
		goodsSlider:goodsSlider
	}
})