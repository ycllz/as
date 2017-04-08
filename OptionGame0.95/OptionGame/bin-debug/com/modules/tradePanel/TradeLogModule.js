var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var TradeLogModule = (function (_super) {
    __extends(TradeLogModule, _super);
    function TradeLogModule() {
        var _this = _super.call(this) || this;
        _this.GROUP_NAME = "tradePanel"; //////////////////修改模块名
        _this.tabIndex = 0;
        return _this;
    }
    Object.defineProperty(TradeLogModule, "instance", {
        get: function () {
            if (TradeLogModule._instance == undefined) {
                TradeLogModule._instance = new TradeLogModule();
            }
            return TradeLogModule._instance;
        },
        enumerable: true,
        configurable: true
    });
    TradeLogModule.prototype.show = function (params) {
        if (params === void 0) { params = 0; }
        this.tabIndex = params;
        if (!this.moduleWindow) {
            _super.prototype.startLoadModuleRES.call(this, this.GROUP_NAME);
        }
        else {
            this.setIspop(true); //已经加载过的，直接显示出来
        }
    };
    TradeLogModule.prototype.setIspop = function (param1) {
        _super.prototype.setIspop.call(this, param1);
        if (param1) {
            this.addEvents();
            if (!this.parentLayer) {
                this.parentLayer = LayerManager.instance.windowLayer;
            }
            LayerManager.instance.windowLayer.showMask();
            this.parentLayer.addChild(this.moduleWindow);
            this.moduleWindow.setTab(0);
            this.moduleWindow.addEvents();
        }
        else {
            if (this.moduleWindow && this.moduleWindow.parent) {
                this.moduleWindow.parent.removeChild(this.moduleWindow);
            }
            LayerManager.instance.windowLayer.hideMask();
        }
    };
    TradeLogModule.prototype.loadGroupRESOver = function () {
        this.moduleWindow = new tradeLogPanel(); //////////////////修改类名
        this.setIspop(true); //加载完成，显示出来
    };
    TradeLogModule.prototype.dispose = function () {
        this.removeEvents();
        if (this.moduleWindow) {
            this.moduleWindow.dispose();
        }
        _super.prototype.dispose.call(this);
    };
    //只监听不同模块之间交互事件，网络事件
    TradeLogModule.prototype.addEvents = function () {
    };
    TradeLogModule.prototype.removeEvents = function () {
    };
    return TradeLogModule;
}(BaseModule));
__reflect(TradeLogModule.prototype, "TradeLogModule");
//# sourceMappingURL=TradeLogModule.js.map