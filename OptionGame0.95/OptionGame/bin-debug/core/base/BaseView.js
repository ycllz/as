var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/**
 *
 * @author xx 用于给单独一个需要动态加载资源的ui panel 继承使用， 调用 loadRes 方法 传入需要加载资源列表，
 *              重写 public init 方法, 还需要 调用 baseview 的 init 来清除 loading
 *
 *              然后在子类 init 方法的最后调用 setCenter 来居中，因为刚开始资源没有的时候，宽高为 0
 *
 */
var BaseView = (function (_super) {
    __extends(BaseView, _super);
    function BaseView() {
        var _this = _super.call(this) || this;
        _this.reslen = 0;
        _this.beinit = false;
        _this.resCount = 0;
        Loading.instance.show();
        return _this;
    }
    BaseView.prototype.loadRes = function (resList) {
        this.reslen = resList.length;
        this.resCount = resList.length;
        var resName = "";
        for (var i = 0; i < this.reslen; i++) {
            resName = resList[i];
            RES.getResAsync(resName, this.onOver, this);
        }
    };
    BaseView.prototype.onOver = function (data, key) {
        //        console.log("=========== onOver ",data,key);
        this.resCount--;
        if (this.resCount == 0) {
            this.init();
        }
    };
    BaseView.prototype.init = function () {
        // console.log( " getQualifiedClassName qualified class name -> " , getQualifiedClassName(this) );
        // console.log("base view init .........................");
        Loading.instance.hide();
        this.beinit = true;
    };
    /**
     * 居中显示
     * */
    BaseView.prototype.setCenter = function () {
        this.x = (ConfigData.wStage >> 1) - (this.width >> 1);
        this.y = (ConfigData.hStage >> 1) - (this.height >> 1);
    };
    BaseView.prototype.show = function () {
    };
    return BaseView;
}(egret.DisplayObjectContainer));
__reflect(BaseView.prototype, "BaseView");
//# sourceMappingURL=BaseView.js.map