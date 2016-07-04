define(['jquery','../app/sumMoney','../app/getPoint','../app/saveMoney'],function($,sumMoney,getPoint,saveMoney){
	return{
		clearAll:function(){
			var arr=[];
			var result=confirm('是否清空购物车');
			if(result){
				for(var i=0;i<$('a').length;i++){
					arr[i]=$($('a')[i]).attr('title');
					$.ajax({
						type:"delete",
						url:arr[i],
						async:true,
						success:function(){
							$('tbody tr').remove();
							//总价改变
							$('#summoney').html(sumMoney.sumMoney());
							//总结分改变
							$('#getpoint').html(getPoint.getPoint());
							//节省的钱数
							$('#savemoney').html(saveMoney.saveMoney());
						}
					});
				};
				//不能加载循环里
				$('#clearShow').css('display','block');
				console.log(arr);
			}
		}
	}
})