define(['jquery','ui','../app/sumMoney','../app/getPoint','../app/saveMoney'],function($,ui,sumMoney,getPoint,saveMoney){
	return{
		toggleNumber:function(){
			$('tbody input').each(function(){
				//每次光标失去焦点
				$(this).change(function(){
					//用n接收一下 $(this).val()
					var n=$(this).val();
					//判断n是不是小于0或者 是非数字
					if(n<0||isNaN(n)){
						$(this).val(1)
					}
					//启动ajax，上传数据
					$.ajax({
						type:"put",
						url:$(this).attr('p'),
						data:{
							'number':$(this).val()
							},
						success:function(){
							//弹出窗口
							$('#show').show();
							//窗口内容为
							$('#show p').html('修改成功！您的商品总金额是  ￥'+sumMoney.sumMoney());
							//修改最底下总价
							$('#summoney').html(sumMoney.sumMoney());
							//修改积分
							$('#getpoint').html(getPoint.getPoint());
							//节省的钱数
							$('#savemoney').html(saveMoney.saveMoney());
						}
					});
				})
			})
			//点击弹出窗体的关闭按钮    关闭弹出的窗口
			$('#closeShow').click(function(){
				$('#show').hide();
			})
		}
	}
})