define(['jquery'],function($){
	return{
		sumMoney:function(){
			var count=0;
			//获取这一行的第四个 与 第五个相乘  返回结果
			//alert($($('tbody tr')[0]).children().eq(4).children('input').val())
			for(var i=0;i<$('tbody tr').length;i++){
				count+=$($('tbody tr')[i]).children().eq(3).html()*$($('tbody tr')[i]).children().eq(4).children('input').val();
			}
			count=parseFloat(count).toFixed(2);
			return count;				
		}
	}
})