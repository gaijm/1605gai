function addEvent(obj,evname,fn)
{
	if(obj.attachEvent)
	{
		obj.attachEvent('on'+evname,fn);
	}
	else
	{
		obj.addEventListener(evname,fn,false);
	}
}
