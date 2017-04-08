var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Main = (function (_super) {
    __extends(Main, _super);
    function Main() {
        var _this = _super.call(this) || this;
        _this.beCreateChildren = false;
        _this.isThemeLoadEnd = false;
        _this.isResourceLoadEnd = false;
        _this.addEventListener(egret.Event.ADDED_TO_STAGE, _this.onAdd, _this);
        return _this;
    }
    Main.prototype.onAdd = function () {
        if (this.beCreateChildren == false) {
            this.createChildren();
        }
    };
    Main.prototype.createChildren = function () {
        if (this.stage == undefined && this.beCreateChildren == true)
            return;
        this.beCreateChildren = true;
        _super.prototype.createChildren.call(this);
        if (this.stage.orientation != egret.OrientationMode.LANDSCAPE) {
            this.stage.orientation = egret.OrientationMode.LANDSCAPE;
        }
        Common.stageW = Math.ceil(window['GetWindowWidth']() / (window['GetWindowHeight']() / 1136));
        Common.stageH = 1136; //this.stage.stageHeight;
        this.stage.setContentSize(Common.stageH, Common.stageW);
        // console.log("SW--->"+window['GetWindowWidth']()+"     SH--->"+window['GetWindowHeight']());
        // console.log("W--->"+Common.stageW+"     H--->"+Common.stageH);
        LayerManager.instance.initLayer();
        LayerManager.instance.stageWidth = Common.stageW;
        LayerManager.instance.stageHeight = Common.stageH;
        //注入自定义的素材解析器
        var assetAdapter = new AssetAdapter();
        egret.registerImplementation("eui.IAssetAdapter", assetAdapter);
        egret.registerImplementation("eui.IThemeAdapter", new ThemeAdapter());
        //设置加载进度界面
        Loading.instance.show();
        //初始化Resource资源加载库
        RES.addEventListener(RES.ResourceEvent.CONFIG_COMPLETE, this.onConfigComplete, this);
        RES.loadConfig("resource/default.res.json", "resource/");
        HttpConnect.instance.addHttpListener("command1", this.onrecieve1, this);
        HttpConnect.instance.sendPostRequest("http://localhost/post_test.php", "p1=postP1&p2=postP2");
        // console.log("屏幕宽度---》"+window['GetWindowWidth']());
    };
    Main.prototype.onrecieve1 = function (event) {
        console.log("main 收到数据， rest 数据 -------》 ", event.type, event.data);
    };
    /**
     * 配置文件加载完成,开始预加载皮肤主题资源和preload资源组。
     */
    Main.prototype.onConfigComplete = function (event) {
        RES.removeEventListener(RES.ResourceEvent.CONFIG_COMPLETE, this.onConfigComplete, this);
        //加载皮肤主题配置文件,可以手动修改这个文件。替换默认皮肤。
        var theme = new eui.Theme("resource/default.thm.json", this.stage);
        theme.addEventListener(eui.UIEvent.COMPLETE, this.onThemeLoadComplete, this);
        RES.addEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onResourceLoadComplete, this);
        RES.addEventListener(RES.ResourceEvent.GROUP_LOAD_ERROR, this.onResourceLoadError, this);
        RES.addEventListener(RES.ResourceEvent.GROUP_PROGRESS, this.onResourceProgress, this);
        RES.addEventListener(RES.ResourceEvent.ITEM_LOAD_ERROR, this.onItemLoadError, this);
        RES.loadGroup("preload");
    };
    Main.prototype.onThemeLoadComplete = function () {
        this.isThemeLoadEnd = true;
        this.createScene();
    };
    Main.prototype.onResourceLoadComplete = function (event) {
        if (event.groupName == "preload") {
            RES.removeEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onResourceLoadComplete, this);
            RES.removeEventListener(RES.ResourceEvent.GROUP_LOAD_ERROR, this.onResourceLoadError, this);
            RES.removeEventListener(RES.ResourceEvent.GROUP_PROGRESS, this.onResourceProgress, this);
            RES.removeEventListener(RES.ResourceEvent.ITEM_LOAD_ERROR, this.onItemLoadError, this);
            this.isResourceLoadEnd = true;
            this.createScene();
        }
    };
    Main.prototype.createScene = function () {
        if (this.isThemeLoadEnd && this.isResourceLoadEnd) {
            Loading.instance.hide();
            this.startCreateScene();
        }
    };
    /**
     * 资源组加载出错
     *  The resource group loading failed
     */
    Main.prototype.onItemLoadError = function (event) {
        console.warn("Url:" + event.resItem.url + " has failed to load");
    };
    /**
     * 资源组加载出错
     */
    Main.prototype.onResourceLoadError = function (event) {
        console.warn("Group:" + event.groupName + " has failed to load");
        //忽略加载失败的项目
        this.onResourceLoadComplete(event);
    };
    /**
     * preload资源组加载进度
     */
    Main.prototype.onResourceProgress = function (event) {
        if (event.groupName == "preload") {
            Loading.instance.setProgress(event.itemsLoaded, event.itemsTotal);
        }
    };
    /**
     * 创建场景界面
     */
    Main.prototype.startCreateScene = function () {
        //根据name关键字，异步获取一个json配置文件，name属性请参考resources/resource.json配置文件的内容。
        //RES.getResAsync("description_json", this.startAnimation, this);
        var scene = new GameScene();
        this.addChild(scene);
        HttpConnect.instance.addHttpListener("command1", this.onrecieve, this);
        // HttpConnect.instance.sendPostRequest("http://localhost/post_test.php", "p1=postP1&p2=postP2");
        var nvc = {};
        // nvc.Add("MemberId", "10000000");
        // nvc.Add("ContractId", "1");
        // nvc.Add("BuyCount", "1");
        // nvc.Add("RiseOrFall", "1");
        // nvc.Add("ContractType", "2");
        // nvc.Add("appId", "525400b565aa");//APPID
        // nvc.Add("timeStamp", Timestamp);//时间戳
        // nvc.Add("nonce", iv);//随机数
        // nvc.Add("encrypStr", encrypStr);//加密串 token、timeStamp、nonce
        // string result = SendHttpPost("http://gongapi.wanyishou.com/Transaction/Add", nvc);
        // console.log("屏幕宽度---》"+window['GetWindowWidth']());
        var purl1 = "http://123.206.98.166";
        var t = egret.getTimer();
        var e = this.encrypStr("525400b565aa", t, 5);
        var purl = "http://gongapi.wanyishou.com/Transaction/Add";
        var param = "10000000&1&1&1&2&525400b565aa&" + t + "&5&" + e;
        // purl = purl + param;
        // HttpConnect.instance.sendPostRequest(purl, param);
        var request = new egret.HttpRequest();
        request.responseType = egret.HttpResponseType.TEXT;
        request.open(purl, egret.HttpMethod.POST);
        request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        request.send(param);
        request.addEventListener(egret.Event.COMPLETE, this.onPostComplete, this);
        request.addEventListener(egret.IOErrorEvent.IO_ERROR, this.onPostIOError, this);
        request.addEventListener(egret.ProgressEvent.PROGRESS, this.onPostProgress, this);
    };
    Main.prototype.encrypStr = function (s1, s2, s3) {
        var a = [];
        a.push(s1);
        a.push(s2);
        a.push(s3);
        a.sort();
        var s = "";
        s = a[0] + a[1] + a[2];
        return s;
    };
    Main.prototype.onPostComplete = function (event) {
        var request = event.currentTarget;
        console.log("post data : ", request.response);
        var responseLabel = new egret.TextField();
        responseLabel.size = 18;
        responseLabel.text = "POST response:\n" + request.response.substring(0, 50) + "...";
        this.addChild(responseLabel);
        responseLabel.x = 300;
        responseLabel.y = 70;
    };
    Main.prototype.onPostIOError = function (event) {
        console.log("post error : " + event);
    };
    Main.prototype.onPostProgress = function (event) {
        console.log("post progress : " + Math.floor(100 * event.bytesLoaded / event.bytesTotal) + "%");
    };
    Main.prototype.onrecieve = function (event) {
        // console.log("main 收到数据， rest 数据 -------》 ", event.type, event.data );
    };
    return Main;
}(eui.UILayer));
Main.Main = null;
__reflect(Main.prototype, "Main");
//# sourceMappingURL=Main.js.map