define(['jquery','../app/sumMoney'],function($,sunMoney){
	return{
		saveMoney:function(){
			var countSave=0;
			//获取这一行的第2个 td的值
//			alert($($('tbody tr')[0]).children().eq(1).html())
			for(var i=0;i<$('tbody tr').length;i++){
				countSave+=$($('tbody tr')[i]).children().eq(2).html()*$($('tbody tr')[i]).children().eq(4).children('input').val();
			}
			countSave=countSave-sunMoney.sumMoney();
//			countSave.fixed(2);
			countSave=parseInt(countSave);
			return countSave;	
		}
	}
})