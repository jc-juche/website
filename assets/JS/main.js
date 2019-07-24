var normal_title = "蒟扯 - 官网 | 更有亲和力的扯淡网站"
function init()
{
	document.addEventListener('visibilitychange',
	function()
	{
		if (document.visibilityState == 'hidden')
		{
			normal_title = document.title;
			document.title = '你难道不想扯淡了吗？QwQ';
		}
		else document.title = normal_title;
	});
}
