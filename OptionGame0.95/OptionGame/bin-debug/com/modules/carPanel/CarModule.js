var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var CarModule = (function (_super) {
    __extends(CarModule, _super);
    function CarModule() {
        var _this = _super.call(this) || this;
        _this.GROUP_NAME = "shopPanel"; //////////////////修改模块名
        _this.tabIndex = 0;
        return _this;
    }
    Object.defineProperty(CarModule, "instance", {
        get: function () {
            if (CarModule._instance == undefined) {
                CarModule._instance = new CarModule();
            }
            return CarModule._instance;
        },
        enumerable: true,
        configurable: true
    });
    CarModule.prototype.show = function (params) {
        this.tabIndex = params;
        if (!this.moduleWindow) {
            _super.prototype.startLoadModuleRES.call(this, this.GROUP_NAME);
        }
        else {
            this.setIspop(true); //已经加载过的，直接显示出来
        }
    };
    CarModule.prototype.setIspop = function (param1) {
        _super.prototype.setIspop.call(this, param1);
        if (param1) {
            this.addEvents();
            if (!this.parentLayer) {
                this.parentLayer = LayerManager.instance.windowLayer;
            }
            this.parentLayer.addChild(this.moduleWindow);
        }
        else {
            if (this.moduleWindow && this.moduleWindow.parent) {
                this.moduleWindow.parent.removeChild(this.moduleWindow);
            }
        }
    };
    CarModule.prototype.loadGroupRESOver = function () {
        this.moduleWindow = new carPanel(); //////////////////修改类名
        this.setIspop(true); //加载完成，显示出来
    };
    CarModule.prototype.dispose = function () {
        this.removeEvents();
        if (this.moduleWindow) {
            this.moduleWindow.dispose();
        }
        _super.prototype.dispose.call(this);
    };
    //只监听不同模块之间交互事件，网络事件
    CarModule.prototype.addEvents = function () {
    };
    CarModule.prototype.removeEvents = function () {
    };
    return CarModule;
}(BaseModule));
__reflect(CarModule.prototype, "CarModule");
//# sourceMappingURL=CarModule.js.map