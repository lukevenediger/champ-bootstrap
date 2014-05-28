$(document).ready(function(){
	var currentUrl = location.href;
	
	$('.navbar li').each(function(idx, el){
		var url = $(el).children('a').attr('href').replace(/^..\//gi, '');
		if(currentUrl.indexOf(url) > -1) {
			$(el).addClass('active');
		}
	});
});