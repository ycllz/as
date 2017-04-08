var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var BeginModule = (function (_super) {
    __extends(BeginModule, _super);
    function BeginModule() {
        var _this = _super.call(this) || this;
        _this.GROUP_NAME = "beginPanel"; //////////////////修改模块名
        return _this;
    }
    Object.defineProperty(BeginModule, "instance", {
        get: function () {
            if (BeginModule._instance == undefined) {
                BeginModule._instance = new BeginModule();
            }
            return BeginModule._instance;
        },
        enumerable: true,
        configurable: true
    });
    BeginModule.prototype.setProgress = function (itemLoaded, itemTotal) {
        this.moduleWindow.setProgress(itemLoaded, itemTotal);
    };
    /**
     * 如果一个模块有不同的tab，可以传参打开不同的tab
    */
    BeginModule.prototype.show = function (params) {
        if (!this.moduleWindow) {
            _super.prototype.startLoadModuleRES.call(this, this.GROUP_NAME);
        }
        else {
            this.setIspop(true); //已经加载过的，直接显示出来
        }
    };
    BeginModule.prototype.setIspop = function (param1) {
        _super.prototype.setIspop.call(this, param1);
        if (param1) {
            this.addEvents();
            if (!this.parentLayer) {
                this.parentLayer = LayerManager.instance.windowLayer;
            }
            LayerManager.instance.windowLayer.showMask();
            this.parentLayer.addChild(this.moduleWindow);
            this.moduleWindow.start();
        }
        else {
            if (this.moduleWindow && this.moduleWindow.parent) {
                this.moduleWindow.parent.removeChild(this.moduleWindow);
            }
            LayerManager.instance.windowLayer.hideMask();
        }
    };
    BeginModule.prototype.loadGroupRESOver = function () {
        this.moduleWindow = new BeginPanel(); //////////////////修改类名
        this.setIspop(true); //加载完成，显示出来
    };
    BeginModule.prototype.dispose = function () {
        this.removeEvents();
        if (this.moduleWindow) {
            this.moduleWindow.dispose();
        }
        _super.prototype.dispose.call(this);
    };
    BeginModule.prototype.addEvents = function () {
        this.connect.addHttpListener("command2", this.onrecieve, this);
        HttpConnect.instance.sendPostRequest("http://localhost/post_test.php", "p1=postP1command&p2=postP2");
    };
    BeginModule.prototype.onrecieve = function (event) {
        console.log("begin 收到数据， rest 数据 -------》 ", event.type, event.data);
    };
    BeginModule.prototype.removeEvents = function () {
    };
    return BeginModule;
}(BaseModule));
__reflect(BeginModule.prototype, "BeginModule");
//# sourceMappingURL=BeginModule.js.map