/**
 * 
 * @authors xd (sxd1991@outlook.com)
 * @date    2017-03-10 09:14:57
 * @version $Id$
 */
//设置跟元素字体大小
(function (doc, win) {
    var docEl = doc.documentElement;
    var resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize', recalc = function () {
		    var sUserAgent = navigator.userAgent.toLowerCase();
		    var bIsIpad = sUserAgent.match(/ipad/i) == "ipad";
		    var bIsIphoneOs = sUserAgent.match(/iphone os/i) == "iphone os";
		    var bIsMidp = sUserAgent.match(/midp/i) == "midp";
		    var bIsUc7 = sUserAgent.match(/rv:1.2.3.4/i) == "rv:1.2.3.4";
		    var bIsUc = sUserAgent.match(/ucweb/i) == "ucweb";
		    var bIsAndroid = sUserAgent.match(/android/i) == "android";
		    var bIsCE = sUserAgent.match(/windows ce/i) == "windows ce";
		    var bIsWM = sUserAgent.match(/windows mobile/i) == "windows mobile";
		    var clientWidth = docEl.clientWidth;
		    if (!clientWidth) return;

		    if (bIsIpad || bIsIphoneOs || bIsMidp || bIsUc7 || bIsUc || bIsAndroid || bIsCE || bIsWM) {
		        // console.log("phone");
		        docEl.style.fontSize = 20 * (clientWidth / 375) + 'px';
		    } else {
		        // console.log("pc");
		        docEl.style.fontSize=25+ 'px';
		    }	         
        };
    if (!doc.addEventListener) return; win.addEventListener(resizeEvt, recalc, false);
    recalc();
})(document, window); 
ss