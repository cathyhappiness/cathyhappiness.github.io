$(document).ready(function(){
	/*信息收起和查看*/
				$(".main").hide();
				$("#down1,#down2").click(function(){
					if($(this).attr("src")=="img/down.png"){
					$(this).parent(".top1").next().slideDown("slow");
					$(this).attr("src","img/up.png");
					}else{
						$(this).parent(".top1").next().slideUp("slow");
					$(this).attr("src","img/down.png");
					}
				});
				/*侧菜单*/
				var aside=$("aside").children("a");
				aside.click(function(){
					$(this).addClass("asidestyle").siblings().removeClass("asidestyle");
				});
				$("#shopbrowser").click(function(){
					$(this).addClass("asidestyle").siblings().removeClass("asidestyle");
					window.scrollTo(0,0);
					
				});
				/*加入购物车加减数量*/
				var base_number=parseInt($(".base_number").html());
				
				var numStr=$(".number").html();
					var number=parseInt(numStr);
				$(".minus").click(function(){
					if(number==1){
						number=1;
					}else{
						number--;
					}
					$(".number").html(number);
					/*库存随之增加
					 * if(number<=0){
						number=0;
					}else{
					number--;
					base_number++;}
					$(".number").html(number);
					$(".base_number").html(base_number);*/
			});
			$(".plus").click(function(){
				if(number!=base_number){
					number++;
					$(".number").html(number);
				}
					/*库存随之减少
					  if(base_number>0){
						number++;
						base_number--;
					}
					$(".number").html(number);
					$(".base_number").html(base_number);*/
			});
			/*选择尺寸或颜色的样式*/
			$(".size").children().click(function(){
				$(this).addClass("size_style").siblings().removeClass("size_style");
				var size=$(this).html();
				$(".have_checked").children(".size").html(size);
			});
			$(".color").children().click(function(){
				$(this).addClass("size_style").siblings().removeClass("size_style");
				var color=$(this).html();
				$(".have_checked").children(".color").html(color);
			});
			/*页面跳转*/
			$(".home").click(function(){
				location.href="index_login.html";
			});
			
		});
		
