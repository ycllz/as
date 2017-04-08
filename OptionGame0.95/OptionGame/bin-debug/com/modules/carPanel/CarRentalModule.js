var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var CarRentalModule = (function (_super) {
    __extends(CarRentalModule, _super);
    function CarRentalModule() {
        var _this = _super.call(this) || this;
        _this.GROUP_NAME = "carRentalPanel"; //////////////////修改模块名
        return _this;
    }
    Object.defineProperty(CarRentalModule, "instance", {
        get: function () {
            if (CarRentalModule._instance == undefined) {
                CarRentalModule._instance = new CarRentalModule();
            }
            return CarRentalModule._instance;
        },
        enumerable: true,
        configurable: true
    });
    CarRentalModule.prototype.show = function (params) {
        if (params === void 0) { params = 0; }
        if (!this.moduleWindow) {
            _super.prototype.startLoadModuleRES.call(this, this.GROUP_NAME);
        }
        else {
            this.setIspop(true); //已经加载过的，直接显示出来
        }
    };
    CarRentalModule.prototype.setIspop = function (param1) {
        _super.prototype.setIspop.call(this, param1);
        if (param1) {
            MainModule.instance.dispose();
            GameScene.instance.changeBg("carBg");
            this.addEvents();
            if (!this.parentLayer) {
                this.parentLayer = LayerManager.instance.windowLayer;
            }
            this.moduleWindow.addEvents();
            this.parentLayer.addChild(this.moduleWindow);
        }
        else {
            if (this.moduleWindow && this.moduleWindow.parent) {
                this.moduleWindow.parent.removeChild(this.moduleWindow);
            }
        }
    };
    CarRentalModule.prototype.loadGroupRESOver = function () {
        this.moduleWindow = new CarRentalPanel(); //////////////////修改类名
        this.setIspop(true); //加载完成，显示出来
    };
    CarRentalModule.prototype.dispose = function () {
        this.removeEvents();
        if (this.moduleWindow) {
            this.moduleWindow.dispose();
        }
        _super.prototype.dispose.call(this);
    };
    CarRentalModule.prototype.addEvents = function () {
    };
    CarRentalModule.prototype.removeEvents = function () {
    };
    return CarRentalModule;
}(BaseModule));
__reflect(CarRentalModule.prototype, "CarRentalModule");
//# sourceMappingURL=CarRentalModule.js.map