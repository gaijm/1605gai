
function ajax(method,url,async,successFunc,failFunc){
	var xmlhttp;
	try{
		xmlhttp=new XMLHttpRequest;
	}catch(e){
	xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
	}
	//Get提交判断
	if(method=="get"||method=="GET"){
	xmlhttp.open(method,url,async);
	xmlhttp.send(null);
	}
	//Post提交判断
//	else if(method=="post"||method=="POST"){		
//		xmlhttp.open(method,url,async);
//		xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
//		xmlhttp.send(date);	
//	}else{
//		alert("请求错误!!!");
//		return;
//	}
	xmlhttp.onreadystatechange=function(){
		if(xmlhttp.readyState==4){
			if(xmlhttp.status==200){
		successFunc(xmlhttp.responseText);	//传送为text		
			}else{
				failFunc("响应失败");		
			}
		}
	}
return xmlhttp;	
}