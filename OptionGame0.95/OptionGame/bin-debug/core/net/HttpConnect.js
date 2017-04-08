var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var HttpConnect = (function (_super) {
    __extends(HttpConnect, _super);
    // private static _instance:CarRentalModule;
    // public static get instance():CarRentalModule{
    // 	if(CarRentalModule._instance==undefined){
    // 		CarRentalModule._instance = new CarRentalModule();
    // 	}
    // 	return CarRentalModule._instance;
    // }
    function HttpConnect() {
        var _this = _super.call(this) || this;
        _this.beInit = false;
        _this._messageMap = [];
        return _this;
    }
    Object.defineProperty(HttpConnect, "instance", {
        get: function () {
            if (!HttpConnect._instance) {
                HttpConnect._instance = new HttpConnect();
                HttpConnect.instance.initHttpEvent();
            }
            return HttpConnect._instance;
        },
        enumerable: true,
        configurable: true
    });
    HttpConnect.prototype.initHttpEvent = function () {
        if (this.beInit == true) {
            return;
        }
        this.beInit = true;
        HttpConnect.instance.addEventListener(egret.Event.COMPLETE, this.onPostComplete, this);
        HttpConnect.instance.addEventListener(egret.IOErrorEvent.IO_ERROR, this.onPostIOError, this);
        HttpConnect.instance.addEventListener(egret.ProgressEvent.PROGRESS, this.onPostProgress, this);
    };
    ///////////////////////////////////////////// 数据格式是一般的文本 ////////////////////////////////////////////////////////////////////
    /**
     * @lurl 	服务端url
     * @params  发给服务端参数"p1=postP1&p2=postP2"
     * @lresponseType 服务端返回的数据格式，默认文本格式
     * @lrequestHeader	发个服务端的数据格式化方式，默认 key value 方式格式化
    */
    HttpConnect.prototype.sendPostRequest = function (lurl, lparams, lresponseType, lrequestHeader) {
        if (lparams === void 0) { lparams = undefined; }
        if (lresponseType === void 0) { lresponseType = egret.HttpResponseType.TEXT; }
        if (lrequestHeader === void 0) { lrequestHeader = "application/x-www-form-urlencoded"; }
        var request = HttpConnect.instance;
        request.responseType = lresponseType; //设置返回的数据格式, 默认为文本格式
        request.open(lurl, egret.HttpMethod.POST);
        request.setRequestHeader("Content-Type", lrequestHeader); //设置响应头, 默认使用key value 的方式来格式化参数
        if (lparams == undefined) {
            request.send();
        }
        else {
            request.send(lparams);
        }
    };
    /***
     *	收到数据，做分发处理
     */
    HttpConnect.prototype.onPostComplete = function (event) {
        var request = event.currentTarget;
        HttpConnect.instance.dispatchEventWith("command1", false, request.response);
        console.log("POST response! post data : ", request.response);
    };
    HttpConnect.prototype.onPostIOError = function (event) {
        console.log("post error : " + event);
    };
    HttpConnect.prototype.onPostProgress = function (event) {
        console.log("post progress : " + Math.floor(100 * event.bytesLoaded / event.bytesTotal) + "%");
    };
    HttpConnect.prototype.addHttpListener = function (lcommand, lhandler, lcontext) {
        HttpConnect.instance.addEventListener(lcommand, lhandler, lcontext);
    };
    /**
     * 删除消息处理监听
    */
    HttpConnect.prototype.removeHttpListener = function (lcommand, lhandler, lcontext) {
        HttpConnect.instance.removeEventListener(lcommand, lhandler, lcontext);
    };
    /**
     * 判断是否有消息监听
     */
    HttpConnect.prototype.hasHttptListener = function (lcommand) {
        return HttpConnect.instance.hasEventListener(lcommand);
    };
    Object.defineProperty(HttpConnect.prototype, "urlLoader", {
        get: function () {
            this.initUrlLoader();
            return this._urlLoader;
        },
        enumerable: true,
        configurable: true
    });
    HttpConnect.prototype.initUrlLoader = function () {
        if (!this._urlLoader) {
            this._urlLoader = new egret.URLLoader();
            this._urlLoader.addEventListener(egret.Event.COMPLETE, this.onReceive, this);
            this._urlLoader.addEventListener(egret.IOErrorEvent.IO_ERROR, this.onSendJsonIOError, this);
            this._urlLoader.addEventListener(egret.ProgressEvent.PROGRESS, this.onsendJsonProgress, this);
            this._urlRequest = new egret.URLRequest();
            this._urlRequest.method = egret.URLRequestMethod.POST;
        }
    };
    HttpConnect.prototype.sendPostRequestAsJson = function (lurl, lparams) {
        if (lparams === void 0) { lparams = undefined; }
        this.initUrlLoader();
        //发送数据格式："a=1&b=2&c=3"
        this._urlLoader.dataFormat = egret.URLLoaderDataFormat.TEXT;
        this._urlRequest.url = lurl;
        this._urlRequest.data = new egret.URLVariables(lparams);
        this._urlLoader.load(this._urlRequest);
    };
    HttpConnect.prototype.onReceive = function (event) {
        var loader = event.target;
        var data = loader.data;
        console.log(data.toString());
        // 1.采用js的解析方法
        var js = eval("(" + data.toString() + ")");
        console.log("origin:" + js.origin);
        // 2.采用json解析器方法
        var txt = data.toString();
        var obj = JSON.parse(txt);
        console.log("origin:" + obj.origin);
        this._urlLoader.dispatchEventWith("command", false, data);
    };
    HttpConnect.prototype.onSendJsonIOError = function (event) {
        console.log("post json error : " + event);
    };
    HttpConnect.prototype.onsendJsonProgress = function (event) {
        console.log("post json progress : " + Math.floor(100 * event.bytesLoaded / event.bytesTotal) + "%");
    };
    /**
     * 监听消息
    */
    HttpConnect.prototype.addHttpListenerJson = function (lcommand, lhandler, lcontext) {
        this._urlLoader.addEventListener(lcommand, lhandler, lcontext);
    };
    /**
     * 删除消息处理监听
    */
    HttpConnect.prototype.removeHttpListenerJson = function (lcommand, lhandler, lcontext) {
        this._urlLoader.removeEventListener(lcommand, lhandler, lcontext);
    };
    /**
     * 判断是否有消息监听
     */
    HttpConnect.prototype.hasHttpListenerJson = function (lcommand) {
        return this._urlLoader.hasEventListener(lcommand);
    };
    return HttpConnect;
}(egret.HttpRequest));
HttpConnect._instance = undefined;
__reflect(HttpConnect.prototype, "HttpConnect");
//# sourceMappingURL=HttpConnect.js.map