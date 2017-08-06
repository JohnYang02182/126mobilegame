$(function(){	
    var ul = $('ul');
    var li = $('.menu li');
    var gameBtn = $('li.game');
    var regBtn = $('li.regist');
    var memberBtn = $('li.member');  
    var closeBtn = $('.close');
    var input = $('.text-field input');
    var box;
    var wrapper = $('.wrapper');
    
    //init
    wrapper.fadeOut();  
    setBtnActive(); 

    //开启栏位验证
    $(".loginTab").validate({
    	rules: {
    		account:{
    			minlength : 4,
    			maxlength : 12,
    			userName : true,
    			numAndAlphabet: true
    		},
    		password:{
    			minlength : 6,
    			maxlength : 12,
    			pwd : true,
    			numAndAlphabet: true
    		}
    	},	    	
	    submitHandler: function() {	      
	      
	      if($('input[name="account"]').val() == "1234" &&
		     $('input[name="password"]').val() == "123456"){
		      $('.errMsg').css('display','none');
		      $('.errMsg').next().css('margin-top','');
		      //登入成功跳转至会员中心
		      window.location.href = "member.html";
	      }else{	      	
	      	  $('.errMsg').css('display','block');
	      	  //错误的话，登入按钮上移 1rem(正确则复原)
	      	  $('.errMsg').next().css('margin-top','-1rem');
	      	  // console.log("login Failed");	      	  
	      	  return false;
	      }	
	    }
	});
    
    var loginStatus = false;
    //判断是否登入，游戏列表显示及选项切换       
    $('.tab-bar .title').on('click', function(){
		loginStatus = !loginStatus;
		isLogin();
				
	});	
	gameBtn.on('click', function(){
		var box = $('.game-list');
		if(loginStatus){
			box.css('display','block');
			box.siblings('ul').css("margin-bottom","0");
		}else{
			box.siblings('ul').css("margin-bottom","1.7rem");
			box.css('display','none');
		}
	});	
	function isLogin() {
		if(loginStatus){
			li.css('display','none');
			$('.hasLogin').css('display','block');
			$('.loginStatus').text("已登录").css("background","#04B431");
		}else{			
			li.css('display','block');
			$('.hasLogin').css('display','none');
			$('.loginStatus').text("未登录").css("background","#DF013A");
		}
	}	  
    

	//Tab Bar 选项
    li.on('click', function(){
    	var now = $(this).data('val'); 
    	setBtnActive($(this));   
        if($(this).hasClass('active')){
          li.removeClass('active');          
          $('#'+ now).slideUp();     
          wrapper.fadeOut(300);
		  setBtnActive();		  
          //console.log(now+ " closed");
        }else{     	
        	li.removeClass('active');
        	$(this).addClass('active');
          	$('.login-section,.game-section,.management-section').css('display','none'); 
            $('#'+ now).slideDown();                
       		wrapper.css({"height":$(document).height()+'px',"display":"block"});
       		//console.log(now+ " opened"); 
       		//TabBar登入時鎖住畫面滑動功能(鎖住遮罩及登入框)
       		$(".login-section,.wrapper").on("touchmove",handler,false);
        }
        if(now == "regist")
        	window.location.href = "regist.html";
        if(now == "member")
        	window.location.href = "member.html"; //前往资金管理页
        
    });

	//输入框判断是否显示清空 ICON
	input.on('keyup', function(){
		if($(this).val().length <= 0){
			$(this).siblings('.close').hide();
		}else{				
			$(this).siblings('.close').show();
		}		
	});	
	input.on('focus', function(){
		$(this).parents('form').find('.close').hide();
		if($(this).val().length > 0){
			$(this).siblings('.close').show();
		}
	});	
	

	//点击关闭按钮以及遮罩之互动
	closeBtn.on('click', function(){
		console.log($(this));
		if($(this).hasClass('box-switch')){
			var now = $(this).data("val");
			li.removeClass('active');
			$("#" + now).slideUp();  
			wrapper.fadeOut(300);
			setBtnActive();
		}else{
			$(this).siblings('input').val('');
			console.log($(this));
			$(this).hide();
		}
	})
	wrapper.on('click', function(){
		$(this).fadeOut(300);
		li.removeClass('active');
		setBtnActive();
	  	$('.login-section,.game-section,.management-section').css('display','none');
	});


	//忘记密码按钮
	$('.forget').on('click',function(){
		window.location.href = "forget.html";
	})

	//资金管理页面(存提款按钮)  暫時不開啟此功能，因手機板回至上一頁會來不及load圖
	// $('.operating-list li').on('click', function(){
		// $('.operating-list').find('div').removeClass('active');
		// $(this).find('div').addClass('active');
	// })

	/* 设置Tab bar 是否点击属性
	 * obj: 当前点击之 li (没传则将所有 active 清除)
	 */
	function setBtnActive($obj){	
		$('.menu li .icon').removeClass('active');
		if($obj){
			$obj.find('.icon').addClass('active');
		}else{
			//判断是否在注册页，是的话 设置注册钮的 Active
			var page = window.location.pathname.split('/');
			var len = page.length;
			var reg;
			if(page[len-1] == "regist.html"){
				reg = li.eq(1);
				reg.addClass("active");
				reg.find('.icon').addClass('active');	
			}else if(page[len-1] == "member.html"){
				//測試用，會員頁預設是登入狀態
				loginStatus = true;
				isLogin();

				reg = li.eq(5);
				reg.addClass("active");
				reg.find('.icon').addClass('active');
			}
		}
		$(".login-section,.wrapper").on("touchmove",handler,false);
	}


	//解決安卓虛擬鍵盤問題
	if ((/Android/gi).test(navigator.userAgent)){
	    $("#loginForm .text-field input").on("focus",function () {
	        $(".login-section").css("bottom","0.5rem")
	    });
	    $("#loginForm .text-field input").on("blur",function () {
	        $(".login-section").css("bottom","2.5rem")
	    });
	}


	//移除默認
	function handler(e) {
	    e.preventDefault();
	}
});


