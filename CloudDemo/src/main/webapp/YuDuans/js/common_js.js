$(document).ready(function(){
  
  $('li.hd_menu_tit').mousemove(function(){
  $(this).find('div.hd_menu_list,div.hd_Shopping_list').show();//you can give it a speed
  });
  $('li.hd_menu_tit').mouseleave(function(){
  $(this).find('div.hd_menu_list,div.hd_Shopping_list').hide();
  });
 $(function(){
	$(".fixed_qr_close").click(function(){
		$(".mod_qr").hide();
	})
});
 //支付方式
 $("#payment,#Landing_price").hover(function(){
			$(this).addClass("hover");
			//$(this).children(".dorpdown-layer").attr('class','');
		},function(){
			$(this).removeClass("hover");  
			//$(this).children(".dorpdown-layer").attr('class','');
		}
	); 
//产品边框样式
 $("li.gl-item").hover(function(){
			$(this).addClass("hover");
			//$(this).children(".dorpdown-layer").attr('class','');
		},function(){
			$(this).removeClass("hover");  
			//$(this).children(".dorpdown-layer").attr('class','');
		}
	); 
 //
 $(".Insurance_name").hover(function(){
			$(this).addClass("hover");
			//$(this).children(".dorpdown-layer").attr('class','');
		},function(){
			$(this).removeClass("hover");  
			//$(this).children(".dorpdown-layer").attr('class','');
		}
	); 
 //
 $(".car_Show").hover(function(){
			$(this).addClass("hover");
			//$(this).children(".dorpdown-layer").attr('class','');
		},function(){
			$(this).removeClass("hover");  
			//$(this).children(".dorpdown-layer").attr('class','');
		}
	);
	 $(".prompt,.upload_picture").hover(function(){
			$(this).addClass("hover");
			//$(this).children(".dorpdown-layer").attr('class','');
		},function(){
			$(this).removeClass("hover");  
			//$(this).children(".dorpdown-layer").attr('class','');
		}
	);
	 
});

$(document).ready(function(){
	$(".menu_list li").hover(function(){
			$(this).addClass("hover1");
		},function(){
			$(this).removeClass("hover1");  
		}
	); 
});
$(document).ready(function(){
		$(".clearfix li.list_name, li.phone_c").hover(function(){
			$(this).addClass("hd_menu_hover");
			$(this).children("ul li.list_name_bg").attr('class','');
		},function(){
			$(this).removeClass("hd_menu_hover");  
			$(this).children("ul li.list_name_bg").attr('class','');
		}
	); 				   
/*$("#allSortOuterbox li").hover(function(){
		$(this).find(".cat_pannel ").show();
	},function(){
		$(this).find(".cat_pannel ").hide();
});*/
	$("#allSortOuterbox li.name").hover(function(){
												
			$(this).addClass("hover_nav");
												
		},function(){
			$(this).removeClass("hover_nav" );  
		});
		$("div.display ").hover(function(){
		$(this).addClass("hover");
	},function(){
		$(this).removeClass("hover" );  
});	
});
$(document).ready(function(){
$("#lists li").hover(function(){
		$(this).find(".Detailed").show();
	},function(){
		$(this).find(".Detailed").hide();
});
	$("#lists li").hover(function(){
												
			$(this).addClass("hover_nav");
												
		},function(){
			$(this).removeClass("hover_nav" );  
		}
	); 
});
/**********鼠标移动效果************/
$(document).ready(function(){
	$("ul.products").hover(function() {
		$(this).find("#cell_12428").stop()
		.animate({right: "0", opacity:1}, "fast")
		.css("display","block")

	}, function() {
		$(this).find("#cell_12428").stop()
		.animate({right: "0", opacity: 0}, "fast")
	});
});
$(window).scroll(function() {
		var topToolbar = $("#dd_Section");
		var headerH = $("#Group_outerHeight").outerHeight();
		var headers = $("#header_outerHeight").outerHeight();
		var scrollTop =$(document.body).scrollTop();	
			if( scrollTop >= headerH + headers ){
				topToolbar.stop(false,true).addClass("fixToTop");
			}else if( scrollTop < headerH + headers ){
				topToolbar.stop(false,true).removeClass("fixToTop"); 
			}
});
/*********************点击事件*********************/
$( document).ready(function(){
  $('.fixed_bar').find('li').click(function(){
	$('.fixed_bar').find('li').removeClass('active');
	$(this).addClass('active');
  });																	
})
/***********************商品分类顶部浮动固定层菜单栏**************************/
$(window).scroll(function() {
		var topToolbar = $("#productsMenu");
		var headerH = $("#Preferential_AD").outerHeight();
		var headers = $("#header_outerHeight").outerHeight();
		var scrollTop =$(document.body).scrollTop();	
			if( scrollTop >= headerH + headers ){
				topToolbar.stop(false,true).addClass("fixToTop");
			}else if( scrollTop < headerH + headers ){
				topToolbar.stop(false,true).removeClass("fixToTop"); 
			}
});
$(window).scroll(function() {
		var topToolbar = $(".fixed_out ");
		var headerH = $("#header_top").outerHeight();
		var headers = $("#goodsInfo").outerHeight();
		var headerd = $("#recommnad").outerHeight();
		var scrollTop =$(document.body).scrollTop();	
			if( scrollTop >= headerH + headers +headerd ){
				topToolbar.stop(false,true).addClass("fixToTop");
			}else if( scrollTop < headerH + headers + headerd ){
				topToolbar.stop(false,true).removeClass("fixToTop"); 
			}
});
$(window).scroll(function() {
		var topToolbar = $("#Sorted");
		var headerH = $("#header_top").outerHeight();
		var headers = $("#Filter_style").outerHeight();
		var scrollTop =$(document.body).scrollTop();	
			if( scrollTop >= headerH + headers ){
				topToolbar.stop(false,true).addClass("fixToTop");
			}else if( scrollTop < headerH + headers  ){
				topToolbar.stop(false,true).removeClass("fixToTop"); 
			}
});
/********************密码强度***********************/
   $(document).ready(function(){
        $('#tbPassword,#tbPasswords').focus(function () {
            $('#pwdLevel_1,#pwdLevel_4').attr('class', 'ywz_zhuce_hongxian');
            $('#tbPassword').keyup();
        });
        $('#tbPassword,#tbPasswords').keyup(function () {
            var __th = $(this);
            if (!__th.val()) {
                $('#pwd_tip').hide();
                $('#pwd_err').show();
                Primary();
                return;
            }
            if (__th.val().length < 6) {
                $('#pwd_tip').hide();
                $('#pwd_err').show();
                Weak();
                return;
            }
            var _r = checkPassword(__th);
            if (_r < 1) {
                $('#pwd_tip').hide();
                $('#pwd_err').show();
                Primary();
                return;
            }
            if (_r > 0 && _r < 2) {
                Weak();
            } else if (_r >= 2 && _r < 4) {
                Medium();
            } else if (_r >= 4) {
                Tough();
            }
            $('#pwd_tip').hide();
            $('#pwd_err').hide();
        });
        function Primary() {
            $('#pwdLevel_1,#pwdLevel_4').attr('class', 'ywz_zhuce_huixian');
            $('#pwdLevel_2,#pwdLevel_5').attr('class', 'ywz_zhuce_huixian');
            $('#pwdLevel_3,#pwdLevel_6').attr('class', 'ywz_zhuce_huixian');
        }
        function Weak() {
            $('#pwdLevel_1,#pwdLevel_4').attr('class', 'ywz_zhuce_hongxian');
            $('#pwdLevel_2,#pwdLevel_5').attr('class', 'ywz_zhuce_huixian');
            $('#pwdLevel_3,#pwdLevel_6').attr('class', 'ywz_zhuce_huixian');
        }
        function Medium() {
            $('#pwdLevel_1,#pwdLevel_4').attr('class', 'ywz_zhuce_hongxian');
            $('#pwdLevel_2,#pwdLevel_5').attr('class', 'ywz_zhuce_hongxian2');
            $('#pwdLevel_3,#pwdLevel_6').attr('class', 'ywz_zhuce_huixian');
        }
        function Tough() {
            $('#pwdLevel_1,#pwdLevel_4').attr('class', 'ywz_zhuce_hongxian');
            $('#pwdLevel_2,#pwdLevel_5').attr('class', 'ywz_zhuce_hongxian2');
            $('#pwdLevel_3,#pwdLevel_6').attr('class', 'ywz_zhuce_hongxian3');
        }
        function checkPassword(pwdinput) {
            var maths, smalls, bigs, corps, cat, num;
            var str = $(pwdinput).val()
            var len = str.length;
            var cat = /.{16}/g
            if (len == 0) return 1;
            if (len > 16) { $(pwdinput).val(str.match(cat)[0]); }
            cat = /.*[\u4e00-\u9fa5]+.*$/
            if (cat.test(str)) {
                return -1;
            }
            cat = /\d/;
            var maths = cat.test(str);
            cat = /[a-z]/;
            var smalls = cat.test(str);
            cat = /[A-Z]/;
            var bigs = cat.test(str);
            var corps = corpses(pwdinput);
            var num = maths + smalls + bigs + corps;
            if (len < 6) { return 1; }
            if (len >= 6 && len <= 8) {
                if (num == 1) return 1;
                if (num == 2 || num == 3) return 2;
                if (num == 4) return 3;
            }
            if (len > 8 && len <= 11) {
                if (num == 1) return 2;
                if (num == 2) return 3;
                if (num == 3) return 4;
                if (num == 4) return 5;
            }
            if (len > 11) {
                if (num == 1) return 3;
                if (num == 2) return 4;
                if (num > 2) return 5;
            }
        }
        function corpses(pwdinput) {
            var cat = /./g
            var str = $(pwdinput).val();
            var sz = str.match(cat)
            for (var i = 0; i < sz.length; i++) {
                cat = /\d/;
                maths_01 = cat.test(sz[i]);
                cat = /[a-z]/;
                smalls_01 = cat.test(sz[i]);
                cat = /[A-Z]/;
                bigs_01 = cat.test(sz[i]);
                if (!maths_01 && !smalls_01 && !bigs_01) { return true; }
            }
            return false;
        } 
})  