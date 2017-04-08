var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var ShopModule = (function (_super) {
    __extends(ShopModule, _super);
    function ShopModule() {
        var _this = _super.call(this) || this;
        _this.GROUP_NAME = "shopPanel"; //////////////////修改模块名
        _this.tabIndex = 0;
        return _this;
    }
    Object.defineProperty(ShopModule, "instance", {
        get: function () {
            if (ShopModule._instance == undefined) {
                ShopModule._instance = new ShopModule();
            }
            return ShopModule._instance;
        },
        enumerable: true,
        configurable: true
    });
    ShopModule.prototype.show = function (params) {
        if (params === void 0) { params = 0; }
        this.tabIndex = params;
        if (!this.moduleWindow) {
            _super.prototype.startLoadModuleRES.call(this, this.GROUP_NAME);
        }
        else {
            this.setIspop(true); //已经加载过的，直接显示出来
        }
    };
    ShopModule.prototype.setIspop = function (param1) {
        _super.prototype.setIspop.call(this, param1);
        if (param1) {
            this.addEvents();
            if (!this.parentLayer) {
                this.parentLayer = LayerManager.instance.windowLayer;
            }
            LayerManager.instance.windowLayer.showMask();
            this.parentLayer.addChild(this.moduleWindow);
            this.moduleWindow.setTab(this.tabIndex);
        }
        else {
            if (this.moduleWindow && this.moduleWindow.parent) {
                this.moduleWindow.parent.removeChild(this.moduleWindow);
            }
            LayerManager.instance.windowLayer.hideMask();
        }
    };
    ShopModule.prototype.loadGroupRESOver = function () {
        this.moduleWindow = new shopPanel(); //////////////////修改类名
        this.setIspop(true); //加载完成，显示出来
    };
    ShopModule.prototype.dispose = function () {
        this.removeEvents();
        if (this.moduleWindow) {
            this.moduleWindow.dispose();
        }
        _super.prototype.dispose.call(this);
    };
    ShopModule.prototype.addEvents = function () {
    };
    ShopModule.prototype.removeEvents = function () {
    };
    return ShopModule;
}(BaseModule));
__reflect(ShopModule.prototype, "ShopModule");
//# sourceMappingURL=ShopModule.js.map