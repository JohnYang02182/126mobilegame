//動態將畫面切割成為16份 rem / em ，16rem時會占滿一行
(function(){
	var html = document.documentElement;
	var hWidth = html.getBoundingClientRect().width;			
	html.style.fontSize = hWidth/16 + "px";
})();
