               /*var format=document.getElementById("format");
    			var zhezhao=document.getElementById("zhezhao");
    			var motai=document.getElementById("motai");
    			var buy=document.getElementById("buy");
    			format.onclick=function(){
					zhezhao.style.display="block";
					motai.style.display="block";
					motai.slidUp(slow);
    			}
    			
    			buy.onclick=function(){
    				zhezhao.style.display="none";
					motai.style.display="none";
					motai.slidDown(slow);
    			}*/
    			$("#format").click(function(){
    				$("#zhezhao").show();
    				$("#motai").slideDown("slow");
    			});
    			$("#buy").click(function(){
    				$("#zhezhao").hide();
    				$("#motai").slideUp("slow");
    			});
				$(".btn").click(function(){
					location.href="my_order1.html";
				});
				$(".before").click(function(){
					window.history.go(-1);
				});

