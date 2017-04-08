var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Loading = (function (_super) {
    __extends(Loading, _super);
    function Loading() {
        var _this = _super.call(this) || this;
        _this.resource = "resource/assets/loading.png";
        _this.key = "loading_png";
        _this.besetTween = false;
        _this.createView();
        return _this;
    }
    Object.defineProperty(Loading, "instance", {
        get: function () {
            if (Loading._instance == undefined) {
                Loading._instance = new Loading();
            }
            return Loading._instance;
        },
        enumerable: true,
        configurable: true
    });
    Loading.prototype.loadCompleteHandler = function (event) {
        this.imageLoader.removeEventListener(egret.Event.COMPLETE, this.loadCompleteHandler, this);
        this.imageLoader.removeEventListener(egret.IOErrorEvent.IO_ERROR, this.loadErrorHandler, this);
        var imageLoader = event.currentTarget;
        this.banner = new egret.Bitmap(imageLoader.data);
        this.setView();
    };
    Loading.prototype.setView = function () {
        this.banner.anchorOffsetX = this.banner.width >> 1;
        this.banner.anchorOffsetY = this.banner.height >> 1;
        this.textField.anchorOffsetX = this.textField.width >> 1;
        this.banner.x = (LayerManager.instance.stageWidth >> 1);
        this.banner.y = (LayerManager.instance.stageHeight >> 1);
        this.textField.x = this.banner.x + 20; //+ (this.textField.width>>1);
        this.textField.y = this.banner.y - (this.banner.height >> 1) - (this.textField.height >> 1);
        this.addChild(this.banner);
        this.addChild(this.textField);
        this.besetTween = true;
        egret.Tween.get(this.banner, { loop: true }).to({ rotation: 360 }, 3000);
    };
    Loading.prototype.loadErrorHandler = function (e) {
        //console.log("loading banner img not found ...");
    };
    Loading.prototype.createView = function () {
        this.textField = new egret.TextField();
        this.addChild(this.textField);
        this.textField.y = 300;
        this.textField.width = 480;
        this.textField.height = 100;
        this.textField.textAlign = "center";
    };
    Loading.prototype.show = function (resourcePath) {
        if (resourcePath === void 0) { resourcePath = ""; }
        LayerManager.instance.topLayer.addChild(this);
        var path = this.resource;
        if (resourcePath != "") {
            path = resourcePath;
        }
        if (!this.banner) {
            this.imageLoader = new egret.ImageLoader();
            this.imageLoader.removeEventListener(egret.Event.COMPLETE, this.loadCompleteHandler, this);
            this.imageLoader.removeEventListener(egret.IOErrorEvent.IO_ERROR, this.loadErrorHandler, this);
            this.imageLoader.addEventListener(egret.Event.COMPLETE, this.loadCompleteHandler, this);
            this.imageLoader.addEventListener(egret.IOErrorEvent.IO_ERROR, this.loadErrorHandler, this);
            this.imageLoader.load(path);
        }
        else {
            this.setView();
        }
    };
    Loading.prototype.hide = function () {
        if (this.parent) {
            this.parent.removeChild(this);
        }
    };
    Loading.prototype.setProgress = function (current, total) {
        this.textField.text = "Loading..." + current + "/" + total;
    };
    return Loading;
}(egret.Sprite));
Loading._instance = undefined;
__reflect(Loading.prototype, "Loading");
//# sourceMappingURL=Loading.js.map