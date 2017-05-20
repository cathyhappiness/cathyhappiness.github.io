/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2017-04-19 09:41:31
 * @version $Id$
 */
//影藏提示框
function hideAddressMask(){
    jQuery(".address-mask").fadeOut(1000);
}
//展示隐藏框
function showAddressMask(text){
    $(".address-mask").text(text);
    $(".address-mask").css("display","block");
    clearTimeout(timerMask);
    timerMask=setTimeout(hideAddressMask,1000)
}

//获取uid
var uid=GetRequest().uid;

//填写地址

var inpUser;
var inpTel;
var inpRegion;
var inpAdress;
var inpCode

// 获取用户是否已经填写地址
idAddAdress=ajaxRequest(url_address+'/?m=Mobile&s=getUserAddress',{'uid':uid});
if(idAddAdress.status==1){
  inpUser=$(".uname").val(idAddAdress.data.name);
  inpTel=$(".uphone").val(idAddAdress.data.mobile);
  inpRegion=$(".uregion").val(idAddAdress.data.area);
  inpAdress=$(".uaddress").val(idAddAdress.data.address);
  inpCode=$(".upostcode").val(idAddAdress.data.address);
  // $(".btn-info-submit").text("修改");
}

//弹出的类容
$(".btn").on("click",function(){
    inpUser=$(".uname").val();
    inpTel=$(".uphone").val();
    inpRegion=$(".uregion").val().split(",").join(" ");
    inpAdress=$(".uaddress").val();
    inpCode=$(".upostcode").val();
    if(inpUser==""){
        showAddressMask("请填写收货人");
        return
    }else if(inpTel==""){
        showAddressMask("请填写手机号");
        return
    }else if(inpRegion==""){
        showAddressMask("请填写地区");
        return
    }else if(inpAdress==""){
        showAddressMask("请填写详细地址");
        return
    }else if(inpCode==""){
        showAddressMask("请填写详细地址");
        return
    }else{
        $(".add-user-info").css("display","none");
        var userAddressAdd=ajaxRequest(url_address+'/?m=Mobile&s=addAddress',{'uid':uid,'name':inpUser,'mobile':inpTel,'area':inpAddress,'address':inpAdressDetail})
        if(userAddressAdd.r==1){
          showAddressMask("提交成功");
          // window.history.back();
        }
    }
})
