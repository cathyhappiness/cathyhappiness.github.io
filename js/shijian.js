       /*        var myspan=document.getElementById("dianji");
    			var zhezhao=document.getElementById("zhezhao");
    			var motai=document.getElementById("motai");
    			var login=document.getElementById("login");
    			myspan.onclick=function(){
					zhezhao.style.display="block";
					motai.style.display="block";
    			}
    			
    			login.onclick=function(){
    				zhezhao.style.display="none";
					motai.style.display="none";
    			}*/
    			$(".lists").click(function(){
    				location.href="lists.html";
    			});
    			$("#dianji").click(function(){
    				$("#zhezhao").show();
    				$("#motai").slideDown("fast");
    			});
    			$("#login").click(function(){
    				$("#zhezhao").hide();
    				$("#motai").slideUp("fast");
    			});
    			$(".btn").click(function(){
					location.href="shop_details.html";
				});
    			$(".before").click(function(){
					window.history.go(-1);
				});
