$(function() {
	$('.pull-down-list ul').hide();
	var flag=false;
	$('.toggle').on('click', function() {
		var $navlist =$(this);
		if(flag){
			
			$('.pull-down-list ul').slideUp(500,function(){
				$navlist.removeClass('is--active');
				$('.pull-down-list').css({'z-index':'','height':''});
				$('body').css('overflow','');
				$('html').css('overflow','');
			});
		}			
		else{
			$('.pull-down-list').css({'z-index':'1','height':'100%','display':'block'});
			$('body').css('overflow','hidden');
			$('html').css('overflow','hidden');
			$('.pull-down-list ul').slideDown(500,function(){
				$navlist.addClass('is--active');
			});
		}
		flag=!flag;
	});
	
	$('.tab-bar').on('click',function(){
		$('.pull-down-list ul').slideUp(500,function(){
			$('.toggle').removeClass('is--active');
			$('.pull-down-list').css({'z-index':'','height':''});
			$('body').css('overflow','');
			$('html').css('overflow','');
		});
	});
});