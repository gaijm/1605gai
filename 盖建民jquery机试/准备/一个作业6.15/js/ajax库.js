function ajax(method,url,async,secfn,failfn,data)
{
	var oAjax;
	if(window.XMLHttpRequest)
	{
		oAjax=new XMLHttpRequest();
	}
	else
	{
		oAjax=new ActiveXObject("Microsoft.XMLHTTP");
	}
	
	if(method=='get'||method=='GET')
	{
		oAjax.open(method,url,async);
		oAjax.send();
	}
	else if(method=='post'||method=='POST')
	{
		oAjax.open(method,url,async);
		oAjax.setRequestHeader('Content-type','application/x-www-form-urlencoded');
		oAjax.send(date);
	}
	
	oAjax.onreadystatechange=function()
	{
		if(oAjax.readyState===4)
		{
			if(oAjax.status===200)
			{
				secfn(oAjax.responseText);
			}
			else
			{
				failfn('失败');
			}
		}
	}
}
