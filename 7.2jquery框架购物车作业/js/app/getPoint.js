define(['jquery'],function(){
	return{
		getPoint:function(){
			var countPoint=0;
			//获取这一行的第2个 td的值
//			alert($($('tbody tr')[0]).children().eq(1).html())
			for(var i=0;i<$('tbody tr').length;i++){
				countPoint+=parseInt($($('tbody tr')[i]).children().eq(1).html()*$($('tbody tr')[i]).children().eq(4).children('input').val());
			}
			countPoint=parseInt(countPoint);
			return countPoint;	
		}
	}
})