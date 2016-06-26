$(function(){
	//防止用户直接通过地址进入聊天室，只有通过登录界面才行
		if(document.referrer!='http://localhost/myqq/login.html')
		{
			window.location.href='http://localhost/myqq/login.html';
		}
	$('button').click(function(){
		var str=$('input').val();
//		console.log(str);
		sendMsg(str);		
		$('input').val('');
	});
	//发送数据
	function sendMsg(str){
		var sendData={
			'type':'sendmsg',
			'name':localStorage[name],
			'msg':str
		};
		$.ajax({
			type:"post",
			url:"server.php",
			async:true,
			data:sendData,
			success:function(data)
			{
//				console.log(data);
				var obj=JSON.parse(data);
//				console.log(obj.name+':'+obj.msg);
//				$('<p>'+obj.name+':'+obj.msg+'</p>').appendTo('#msg');
				document.getElementById('msg').scrollTop=document.getElementById('msg').scrollHeight;
			}
		});
	}
	
	//每过一秒 检测是否有数据更新 有数据更新就创建一个p标签 并加入msg
		setInterval(getMsg,1000);
		var timestamp;
		function getMsg(){
			$.ajax({
				type:"post",
				url:"server.php",
				async:true,
				data:{type:'getmsg'},
				success:function(data){
					var jsonobj=JSON.parse(data);
					if(timestamp!=jsonobj.timestamp){
						timestamp=jsonobj.timestamp;
						$('<p style="border-bottom:1px solid gold;margin:0px;padding:0px;margin:5px;">'+jsonobj.name+':'+jsonobj.msg+'</p>').appendTo('#msg');
						document.getElementById('msg').scrollTop=document.getElementById('msg').scrollHeight;
					}
				}
			});
		}
		//获取用户列表显示在右侧div，通过data的type判断 ajax上传的数据
		setInterval(getuser,2000);
		function getuser(){
			$.ajax({
				type:'post',
				url:'server.php',
				data:{type:'getusers'},
				success:function(data){
					var json=JSON.parse(data);
					$('#count').html('上线人数：'+json.length);
					
					$('#mian_right').html('');
					for(var i=0;i<json.length;i++)
					{
						$('<p style="border-bottom:1px solid red;margin:0px;padding:0px;margin-bottom:5px;text-align:center">用户：'+json[i]+'</p>').appendTo('#mian_right');
						document.getElementById('mian_right').scrollTop=document.getElementById('mian_right').scrollHeight;
					}
				}
				
			})
		}
})