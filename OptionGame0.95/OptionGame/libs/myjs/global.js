/**
 * 定义全局变量
 * @type {string}
 */
var weixin_share_title="分享标题";
var weixin_share_desc="分享描述";
var weixin_share_link="分享链接";
var weixin_share_img_url="分享图片url";
var weixin_snsapi_base = "snsapi_base";
var weixin_snsapi_userinfo = "snsapi_userinfo";

var appid = "wxc56b6d21cc2a1950";

/***
 * 常用凼数
 */
//获取URL参数
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
//获取宽度
function GetWindowWidth()
{
    var cur_width = 640;
    //获取窗口宽度
    if (window && window.innerWidth)
        cur_width = window.innerWidth;
    else if ((document.body) && (document.body.clientWidth))
        cur_width = document.body.clientWidth;
    //通过深入Document内部对body进行检测，获取窗口大小
    if (document.documentElement && document.documentElement.clientHeight && document.documentElement.clientWidth)
    {
        cur_width = document.documentElement.clientWidth;
    }
    return cur_width;
}
//获取高度
function GetWindowHeight() {
    var cur_height = 1136;
    //获取窗口高度
    if (window && window.innerHeight)
        cur_height = window.innerHeight;
    else if ((document.body) && (document.body.clientHeight))
        cur_height = document.body.clientHeight;
    if (document.documentElement && document.documentElement.clientHeight && document.documentElement.clientWidth) {
        cur_height = document.documentElement.clientHeight;
    }
    return cur_height;
}
//返回设备像素比
function GetWindowRatio()
{
    var cur_radio = window.devicePixelRatio || 1;
    return cur_radio;
}

//获取微信code
function ReqWeiXinCode(my_scope)
{
    var redirect_uri = encodeURI(window.location.href);
    var url = "https://open.weixin.qq.com/connect/oauth2/authorize?appid="+appid+"&redirect_uri="+redirect_uri+"&response_type=code&scope="+my_scope+"&state=1#wechat_redirect";
    ///  var url = "https://open.weixin.qq.com/connect/oauth2/authorize?appid="+appid+"&redirect_uri="+redirect_uri+"&response_type=code&scope=snsapi_userinfo&state=1#wechat_redirect";
    window.location.href = url;
}

//启动egret
function StartEgret(my_scope)
{
    var data = GetRequest();
    if (data['code'] == undefined)
    {
        ReqWeiXinCode(my_scope);
    }
    if (data['code'] != undefined)
    {
        egret.runEgret();
    }
}








