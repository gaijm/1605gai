//函数
/*
 * 参数:
 * method:post  get
 * url: 请求路径
 * async: true false
 * 成功函数： function
 * 失败函数: function
 * data: "username="+userName
 * 
 * 异常处理:
 * 1.try...catch:  
 *   try{
 * 	    必须要执行的程序代码  情况：1.没有问题  2.有问题
 *   }catch(e)
 *  {
 * 	  有错误才会执行代码
 *  }finally{
 * 	 无论有没有错误都会执行代码
 * }
 * alert（。。。。）
 *  1.没有问题的话跳过catch语句块不执行
 *  2.有问题的话则进入catch代码块
 *  3.catch中的e表示的是一个异常对象 
 * 
 * 2.抛出自定义异常
 * throw new Error("出错啦");
 */
function ajaxFn(method,url,async,successFunc,failFunc,data)
{
	var xmlhttp;
	try{
		xmlhttp=new XMLHttpRequest();
	}catch(e)
	{
//		console.log(e);
        xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
	}
	
	//打开
	if(method=="get"||method=="GET")
	{
		// http://www.baidu.com?username=aaa&pwd=123
	xmlhttp.open(method,url,async);
	xmlhttp.send(null);
	}else if(method=="post"|| method=="POST"){
		xmlhttp.open(method,url,async);
		xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded")
	    xmlhttp.send(data);
	}else{
		alert("请求方式错误！");
		return;
	}
	
	//处理响应
	xmlhttp.onreadystatechange=function(){
		 if(xmlhttp.readyState===4){
		 	if(xmlhttp.status===200)
		 	{
		 		//响应成功
		 		successFunc(xmlhttp.responseText);
		 	}else{
		 		//响应失败
		 		failFunc("响应失败");
		 	}
		 }
	}
	
	return xmlhttp;
}
