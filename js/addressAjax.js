/**
 * 
 * @authors xd (sxd1991@outlook.com)
 * @date    2017-03-10 17:52:15
 * @version $Id$
 */
//弹出错误匡
// 显示弹框
//全局地址变量
var url_address="https://www.youjin360.com";

function showError(mask,frame,erro){
    $(mask).css({"display":"block"});
    $(frame).css({"display":"flex"});
    $(frame).find("span").text(erro);
    hideError(mask,mask,frame);
}
// 影藏弹框
function hideError(cl,mask,frame){
    $(cl).on("click",function(){
        $(mask).css({"display":"none"});
        $(frame).css({"display":"none"});
    })
}
// 封装ajax方法
function ajaxRequest(url,data){
	var result;
    var url=url||"";
    var data=data||{};
	$.ajax({
        url:url,
        type:"POST",
        data:data,
        async:false,
        success:function(e){
            // if(e.r==1){
            //     result=e;
            // }else{
            //     result=e.msg;
            //     showError(".public-mask",".public-frame",result); 
            // }
            result=e;
        }
        // error:function(e){
        //     result=e;
        //     showError(".public-mask",".public-frame",result); 
        // }
    })
    return result;
}
//获取get传的参数
function GetRequest() {  
   var url = location.search; //获取url中"?"符后的字串  
   var theRequest = new Object();  
   if (url.indexOf("?") != -1) {  
      var str = url.substr(1);  
      strs = str.split("&");  
      for(var i = 0; i < strs.length; i ++) {  
         theRequest[strs[i].split("=")[0]]=unescape(strs[i].split("=")[1]);  
      }  
   }  
   return theRequest;  
} 

//判断设备
var u = navigator.userAgent;
var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1; //android终端
var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
if(isiOS){
  $(".ios-appliance").css("display","block") 
}

