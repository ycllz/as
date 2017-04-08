var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var TradeModule = (function (_super) {
    __extends(TradeModule, _super);
    function TradeModule() {
        var _this = _super.call(this) || this;
        _this.GROUP_NAME = "trade"; //////////////////修改模块名
        return _this;
    }
    Object.defineProperty(TradeModule, "instance", {
        get: function () {
            if (TradeModule._instance == undefined) {
                TradeModule._instance = new TradeModule();
            }
            return TradeModule._instance;
        },
        enumerable: true,
        configurable: true
    });
    TradeModule.prototype.show = function (params) {
        if (params === void 0) { params = 0; }
        if (!this.moduleWindow) {
            _super.prototype.startLoadModuleRES.call(this, this.GROUP_NAME);
        }
        else {
            this.setIspop(true); //已经加载过的，直接显示出来
        }
    };
    TradeModule.prototype.setIspop = function (param1) {
        _super.prototype.setIspop.call(this, param1);
        if (param1) {
            MainModule.instance.dispose();
            // GameScene.instance.changeBg("carBg");
            this.addEvents();
            if (!this.parentLayer) {
                this.parentLayer = LayerManager.instance.windowLayer;
            }
            this.moduleWindow.show();
            this.parentLayer.addChild(this.moduleWindow);
        }
        else {
            if (this.moduleWindow && this.moduleWindow.parent) {
                this.moduleWindow.parent.removeChild(this.moduleWindow);
            }
        }
    };
    TradeModule.prototype.loadGroupRESOver = function () {
        this.moduleWindow = new Trade(); //////////////////修改类名
        this.setIspop(true); //加载完成，显示出来
    };
    TradeModule.prototype.dispose = function () {
        this.removeEvents();
        if (this.moduleWindow) {
            this.moduleWindow.dispose();
        }
        _super.prototype.dispose.call(this);
    };
    TradeModule.prototype.addEvents = function () {
    };
    TradeModule.prototype.removeEvents = function () {
    };
    return TradeModule;
}(BaseModule));
__reflect(TradeModule.prototype, "TradeModule");
//# sourceMappingURL=TradeModule.js.map