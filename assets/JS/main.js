var normal_title = "蒟扯---------------=≡Σ((( つ•̀ω•́)つ"
var QAQ_title = "'你难道不想扯淡了吗？QAQ';"
function init()
{
	document.addEventListener('visibilitychange',
	function()
	{
		if (document.visibilityState == 'hidden')
		{
			normal_title = document.title;
			document.title = QAQ_title;
		}
		else document.title = normal_title;
	});
	setInterval(
	function()
	{
		let now_title = document.title;
		document.title = now_title.substr(-1) + now_title.substr(0, now_title.length - 1);
	}, 700)
}
