
$(function(){
	
	//Create Template 	
	$('body').append(`
		<div class="wrapper"></div>
		<div id="goTop"></div>
	`);
	$('header').append(`
		<div class="pull-down-inner">
			<a href="index.html"><img class="titleicon" src="imgs/logo/126_logo_420x130@3x.png"></a>
			<button class="toggle">
				<span class="bar bar-01"></span>
				<span class="bar bar-02"></span>
				<span class="bar bar-03"></span>
			</button>
			<button class="customer">
				<a href="#"><img src="imgs/icons/Customer service_132x132@3x.png" class="customerpic"></a>
			</button>
		</div>
		<nav class="pull-down-list">
			<ul>
				<li><a href="index.html">首页</a></li>
				<li><a href="slot.html">老虎机</a></li>
				<li><a href="realmangame.html">真人娱乐</a></li>
				<li><a href="fishing.html">捕鱼王</a></li>
				<li><a href="promotions.html">优惠活动</a></li>
				<li><a href="memberclub.html">VIP俱乐部</a></li>
				<li><a href="download.html">游戏客户端下载</a></li>
				<li><a href="aboutus.html">关于我们</a></li>
				<li class="hoverpop">移动版使用导向</li>
			</ul>
		</nav>
	`);
	$('nav.tab-bar').append(`
		<ul class="clearfix menu">
			<!-- 未登录 -->
			<li class="game" data-val="game">
				<a href="javascript:void(0);"><span class="icon"></span><span class="categories">游戏</span></a>
			</li>
			<li class="regist" data-val="regist">
				<a href="javascript:void(0);"><span class="icon"></span><span class="categories big">立即注册</span></a>			
			</li>
			<li class="login" data-val="login">
				<a href="javascript:void(0);"><span class="icon"></span><span class="categories">登录</span></a>
			</li>

			<!-- 登录 -->
			<li class="game hasLogin" data-val="game">
				<a href="javascript:void(0);"><span class="icon"></span><span class="categories">游戏</span></a>
			</li>
			<li class="management hasLogin" data-val="management">
				<a href="javascript:void(0);"><span class="icon"></span><span class="categories">资金管理</span></a>
			</li>
			<li class="member hasLogin" data-val="member">
				<a href="javascript:void(0);"><span class="icon"></span><span class="categories">会员中心</span></a>
			</li>
		</ul>	
		<div class="login-section model box-model" id="login">
			<div class="title">登录<span>|</span><span>请先登录后使用会员功能</span><span class="close box-switch" data-val="login"></span></div>
			
			<div class="content">
				<form class="loginTab" id="loginForm">
					<div class="acc text-field">
						<input type="text" name="account" placeholder="用户名">
						<span class="close"></span>
					</div>		
					<div class="pwd text-field">
						<input type="password" name="password" placeholder="密码">
						<span class="close"></span>
					</div>
					<div class="errMsg">用户名或密码错误</div>
					<div class="submit">
						<input class="common-btn" type="submit" name="submit" id="submit" value="登录">
					</div>
					<div class="forget">
						<input class="common-btn forget-btn" type="button" name="forget" id="forget" value="忘记密码?">
					</div>				
				</form>			
			</div>
		</div>	
		<div class="game-section model box-model" id="game">
			<div class="title">游戏<span>|</span><span>快速游戏</span><span class="close box-switch" data-val="game"></span></div>
			
			<div id="game-content">
				<ul class="category-list clearfix">
					<li>
						<a href="slot.html">
							<img src="imgs/tabBar/ToolsBar_slot_240x240@3x.jpg">
						</a>
						<span class="name">老虎机</span>
					</li>
					<li>
						<a href="realmangame.html">
							<img src="imgs/tabBar/ToolsBar_live_240x240@3x.jpg">
						</a>
						<span class="name">真人娱乐</span>
					</li>
					<li>
						<a href="fishing.html">
							<img src="imgs/tabBar/ToolsBar_fish_240x240@3x.jpg">
						</a>
						<span class="name">捕鱼王</span>
					</li>
				</ul>
				<div class="favorite game-list">
					<p>我收藏的游戏</p>
					<ul class="clearfix">
						<li><a href="javascript:;">疯狂的猴子</a></li>
						<li><a href="javascript:;">快乐的猴子</a></li>
						<li><a href="javascript:;">加班的猴子</a></li>
					</ul>
				</div>
				<div class="regular game-list">
					<p>我常玩的游戏</p>
					<ul class="clearfix">
						<li><a href="#">神经的猴子</a></li>
						<li><a href="#">桑心的猴子</a></li>
						<li><a href="#">无聊的猴子</a></li>
					</ul>
				</div>
						
			</div>
		</div>	
		<div class="management-section model box-model" id="management">
			<div class="title">资金管理<span>|</span><span>快速充值转帐提款</span><span class="close box-switch" data-val="management"></span></div>
			
			<div id="management-content" >
				<ul class="operating-list clearfix">
					<li>
						<a href="savemoney.html">
							<div class="deposit"></div>
							<p>存款</p>
						</a>
					</li>					
					<li>
						<a href="transfermoney.html">
							<div class="transfer"></div>
							<p>转帐</p>
						</a>
					</li>
					<li>
						<a href="takemoney_havecreditcard.html">
							<div class="withdraw"></div>
							<p>提款</p>
						</a>
					</li>
				</ul>
				<ul class="report-list clearfix">
					<li><a href="gameRecord.html">游戏纪录</a></li>
					<li><a href="transactionRecord.html">交易纪录</a></li>
					<li><a href="financialStatement.html">资金纪录</a></li>
				</ul>				
			</div>
		</div>
	`);
	$('footer').append(`
		<div class="justtext">
			<p>ⓒ126直营网持有合法牌照且受其监管</p>
		</div>
		<div class="computerdownload">
		<a href="http://www.126bet6.com/">
			<div class="imgcpu"> 
				<img src="imgs/icons/noun_115_cc.png">
			</div>
			<div class="wordcpu">
				<p>电脑版</p>
			</div>
		</a>
		</div>
	`);

	





	/* ------------------ header ------------------*/
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


	/* ------------------ tab Bar ------------------*/
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

	//置頂功能
	goTop.init();

	//解決安卓虛擬鍵盤問題
	if ((/Android/gi).test(navigator.userAgent)){
	    $("#loginForm .text-field input").on("focus",function () {
	        $(".login-section").css("bottom","0.5rem")
	    });
	    $("#loginForm .text-field input").on("blur",function () {
	        $(".login-section").css("bottom","2.5rem")
	    });
	}

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
});

/*
	 * Hover 判斷
	 */
	 $('header').on('click','.hoverpop', function(){
	 	console.log('123');
	 	$('body').append(`
			<div class="hover01">
				<img class="nexticon" src="imgs/icons/Info_arrow171x171@3.png">
				<div class="guide01">
					<p class="gnumber">1.</p>
					<p class="gtitle">快速游戏列表</p>
					<p class="gcontent">点击即可快速选择常玩游戏</p>
					<img class="arrow01" src="imgs/icons/Info_arrow01_124x460@3x.png">
				</div>
				<div class="guide02">
					<p class="gnumber">2.</p>
					<p class="gtitle">快速资金管理</p>
					<p class="gcontent">充值、转账、提款查看游戏记录和财务报表更便捷</p>
					<img class="arrow02" src="imgs/icons/Info_arrow02_128x248@3x.png">
				</div>
				<div class="guide03">
					<p class="gnumber">3.</p>
					<p class="gtitle">会员中心快速入口</p>
					<p class="gcontent">进入会员中心随时<br>随地一键搞定</p>
					<img class="arrow03" src="imgs/icons/Info_arrow03_128x576@3x.png">
				</div>
			</div>
			<div class="hover02">
				<img class="closeicon" src="imgs/icons/Info_close171x171@3x.png">
				<div class="guide04">		
					<img class="arrow04" src="imgs/icons/info_arrow04_165x333@3.png">
					<div class="situation04">
						<p class="gnumber">4.</p>
						<p class="gtitle">全新优化后的导航菜单</p>
						<p class="gcontent">欢迎体验</p>
					</div>
				</div>
				<div class="guide05">
					<img class="arrow05" src="imgs/icons/Info_arrow05_132x444@3x.png">
					<div class="situation05">
						<p class="gnumber">5.</p>
						<p class="gtitle">快速客服</p>
						<p class="gcontent">24小時在线服务</p>
					</div>
				</div>
			</div>
	 	`);
	
	 	$('.pull-down-list ul').slideUp(500,function(){
			$('.toggle').removeClass('is--active');
			$('.pull-down-list').css({'z-index':'','height':''});
		});
	
		$('html').css('overflow','hidden');
		$('body').css('overflow','hidden');
		$('body').on("touchmove",handler,false);
		$('html').on("touchmove",handler,false);
		

		$('body').scrollTop('0');
		$('.hover02').hide();
		function switchhover(){
			$('.hover01').fadeOut();
			$('.hover02').fadeIn();
		}
		function laststep(){
			$('.hover02').fadeOut();
			$('body').css('overflow','');
			$('html').css('overflow','');
			$('body').off("touchmove",handler,false);
			$('html').off("touchmove",handler,false);
		}
		$('.hover01').click(function(){
			switchhover();
		});
		$('.hover02').click(function(){
			laststep();
		});
		
	
	 });
/*
 * Go Top 功能
 */
var timer = null;
var goTop = {	
	init: function(){
		var $goTop = $('#goTop');
		$(window).on('scroll',function(){
			if($(document).scrollTop() > 0){
				$goTop.show();
			}else{
				$goTop.hide();
			}
		})
		$goTop.on('click', function(){
			clearInterval(timer);
			var current = speed = 0;
		    var speedLevel = 6;//數字越大越快

			timer = setInterval(function(){
				current = document.documentElement.scrollTop || document.body.scrollTop;
				speed = Math.floor( ( 0 - current) / speedLevel );
				if(current == 0){
					clearInterval(timer);
				}else{
					document.documentElement.scrollTop = document.body.scrollTop = current + speed;
				}
			},30);
		});
	}
}





/*
 * 確認 popup 功能
 * 需先執行 init function 才能使用 
 * title: 確認框標題
 * details: 確認框內容
 * hasCancel(true / false): 是否要取消紐
 * callback: 點擊確認後執行的 Fn
 */
 
var timeoutHandle = null;
var popLayer = {
    init: function(){
        //產生元件
        var hasLayer = $('#layer').length;
        if(!hasLayer){
            $('body').append(`
                <div class="overlay" id="layer"> 
                    <div class="layer-wrap">            
                        <div class="layer-content">      
                            <dl>
                                <dt>
                                    <p class="title"></p>
                                </dt>
                                <dd>
                                    <p class="details"></p>
                                    <img class="layer-close" src="imgs/icons/Close_132x132@3x.png" alt="X">
                                </dd>
                            </dl>
                            <div class="layer-btn layer-ok">确定</div>
                            <div class="layer-btn layer-cancel layer-2btn">取消</div>
                        </div> 
                    </div> 
                </div>
            `);
        }; 
        
        //點擊ok、取消、x按鈕
        $('.layer-cancel,.layer-close').on('click', 
        function() { 
            popLayer.hideLayer(); 
        });
        //點擊內容外區域自動關閉 
        // $('.overlay').on('click',  function(event) { 
        //     if (event.target == this){ 
        //         popLayer.hideLayer(); 
        //     } 
        // }); 
        
        //esc鍵關閉
        $(document).keyup(function(event) { 
            if (event.keyCode == 27) { 
                popLayer.hideLayer(); 
            } 
        });  
    },
    showLayer: function showLayer(title,details,controlcount,hasCancel,callback){ 
        //展示層
        var layer = $('#layer'), 
            layerwrap = layer.find('.layer-wrap');
        layerwrap.find('.title').text(title);
        layerwrap.find('.details').text(details);

        if(controlcount==='1'){
            //增加倒數計時判斷
            function countdown(minutes) {
                var seconds = 60;
                var mins = minutes
                function tick() {
                    var counter = $('#timer');
                    var current_minutes = mins-1
                    seconds--;
                    counter.text(current_minutes.toString() + ":" + (seconds < 10 ? "0" : "") + String(seconds));                     
                    if( seconds > 0 ) {
                        timeoutHandle=setTimeout(tick, 1000);
                    }else {
                        if(mins > 1){
                       // countdown(mins-1);   never reach “00″ issue solved:Contributed by Victor Streithorst
                            setTimeout(
                                function() { 
                                    countdown(mins - 1); 
                                }, 1000);
                        }
                    }
                    
                }
                tick();
            }

            if(!$('#timer').length){
                $('dd').append(`
                                <div class="timeoutclass">  
                                    <div class = 'timetext'>有效时间：</div>
                                    <div id = 'timer'>20:00</div>
                                    <div class = 'clearfix'></div>
                                    <div class = 'roletext'>1.成功付款后，将会自动到帐，并显示出提示 <br/>2.长时间无反应，请<a class="contactService" href="">联系客服。</a></div>
                                </div>
                            `);
            }
            
            countdown(20);
        }
        else{
            $('.timeoutclass').remove();
        }


        if(hasCancel==='1'){
            $('.layer-ok,.layer-cancel').addClass('layer-2btn');
            $('.layer-ok').text("关闭");
            $('.layer-cancel').text("再试一次");
            layerwrap.find('.layer-cancel').show();
        }
        else if(hasCancel==='2'){
            $('.layer-ok,.layer-cancel').removeClass('layer-2btn');
            layerwrap.find('.layer-cancel').hide();
        } 
        else if(hasCancel==='3'){
            $('.layer-ok,.layer-cancel').removeClass('layer-2btn');
            layerwrap.find('.layer-cancel').hide();
            $('.layer-2btn').text("关闭");
        }
        //是否有確認 fn
        $('.layer-ok').off('click');
        $('.layer-ok').on('click', function() { 
            callback?callback():popLayer.hideLayer();
        });
        $(".overlay").on("touchmove",handler,false);
        layer.fadeIn(); 

        //畫面居中
        layerwrap.css({ 
            'margin-top': (-layerwrap.outerHeight()-25)/2 
        }); 
    },
    hideLayer: function (){ 
        //隱藏
        $('.overlay').fadeOut(); 
        clearTimeout(timeoutHandle);
        $(".overlay").off("touchmove",handler,false);
    }
}


/*
 * Success 彈窗 功能
 * 需先執行 init function 才能使用
 * string: 欲顯示之內容
 * location: 跳轉的網址
 * size( "M" / "L"): 預設為S，需變大請給參數 "M" / "L" 
 */
var sucFlag = true;
var sucBox = {   
    init: function(){
        //產生元件
        var hasBox = $('.suc-box').length;
        if(!hasBox){
            $('body').append(`
                <div class="suc-box">                    
                </div>
            `);            
        };         
    },
    showBox: function showBox(string,href,size){ 
    	if(sucFlag){
    		sucFlag = false;
		    var box = $('.suc-box');
		    box.text(string); 
		    switch(size){
		        case "M":
		            box.width('60%');
		            break;
		        case "L":
		            box.width('80%');
		            break;            
		    }
		    //置中
		    var h = box.outerHeight(), 
		        w = box.outerWidth();
		    box.css({    
		    	'top': $(window).height()/2 + $(document).scrollTop(),
		        'margin-top': -h/2,
		        'margin-left': -w/2
		    });
		    //1.5秒後消失
		    box.show();
		    box.animate({
		       opacity:'0.8'
		     },800);
		    setTimeout(function(){
		        box.animate({
		           opacity:'0'
		         },700,function(){
		            box.hide();
		            sucFlag = true;
		            if(href){
		            	location.href = href;
		            }
		         });                
		    },2500);
		}
    }  
}   


/*
 * 將姓名或卡號轉成星號
 * type: name/card
*/
function stringToStars(value , type){

	var str = "";
	if(type == "card"){
       str= value;
       var strhide = str.substr(2,10);
       var newstr = str.replace(strhide,"** **** **** ");
       return newstr;
	}
    else if(type == "name"){

		str = value[0];
		for(var i=0; i<value.length-1; i++){
			//保留姓名第一位，其餘用星號替代
			str += "*";
		}
		return str;
	}
}


//移除默認
function handler(e) {
    e.preventDefault();
}


//FOR TEST
//pagination
$('.go').on("click",function(){
	console.log("get page : " + $('#paginationForm input').val())
	//$('#paginationForm').submit();
});

popLayer.init();
$(window).on("orientationchange", function(){
	console.log(window.orientation);
	// window.orientation 屬性僅在手機瀏覽器支援
	if (window.orientation === 90 || window.orientation === -90 ){
		popLayer.showLayer("请使用竖屏浏览","以获得更好的体验","",false,function(){
			popLayer.hideLayer();
			window.location.reload() ;
			
		});              
    } 
    if (window.orientation === 0){		
		window.location.reload() ;
	}
	// alert(window.orientation);
});

function chkHorizontal(){
	if (window.orientation === 90 || window.orientation === -90 ){
		 $('nav').hide();
		 $('footer').css('padding-bottom','0');        
    	 $('.mlayer-content').css('overflow-y','scroll');
    } 
}
$(chkHorizontal());
