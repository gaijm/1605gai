define(['jquery','../app/config','../app/bg','../app/deleta','../app/move','../app/number','../app/clearAll','../app/sumMoney','../app/postData','../app/chakan','../app/getPoint','../app/saveMoney'],
function($,config,bg,deletea,move,number,clearAll,sumMoney,postData,chakan,getPoint,saveMoney){
	return{
		create:function(data){
			//获取数据data 渲染页面
			for(var i=0;i<data.length;i++){
				var row=$('<tr></tr>').append('<td class="content" c='+config.baseUrl+'/'+data[i].id+'>'+data[i].name+'</td>').
				append('<td>'+data[i].point+'</td>').
				append('<td>'+data[i].markPrice+'</td>').
				append('<td>'+data[i].ddPrice+'</td>').
				append('<td><input type="text" value="'+data[i].number+'" style="text-align:center" p='+config.baseUrl+'/'+data[i].id+'/></td>').
				append('<a href="javascripe:" title='+config.baseUrl+'/'+data[i].id+'>删除</a>');
				$('tbody').append(row);
			};
			$('a').css({
				'text-decoration':'none',
			});
			$('a').parent().css({
				'text-align':'center',
				'line-height':'30px'
			});
			//背景色
			bg.togglebg();
			//鼠标移动 这一行变白
			move.bgcolor();
			//删除一行数据
			deletea.deleteData();
			//修改数量
			number.toggleNumber();
			//点击清空所有数据
			$('#clearall').click(function(){
				clearAll.clearAll();
			});
			//总价
			$('#summoney').html(sumMoney.sumMoney());
			//上传数据
			postData.postData();
			//查看详细信息
			chakan.chakan();
			//积分总计
			$('#getpoint').html(getPoint.getPoint());
			//节省的钱数
			$('#savemoney').html(saveMoney.saveMoney());
		}
	}
})


