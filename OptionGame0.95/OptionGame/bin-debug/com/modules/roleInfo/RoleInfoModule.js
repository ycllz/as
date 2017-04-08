var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var RoleInfoModule = (function (_super) {
    __extends(RoleInfoModule, _super);
    function RoleInfoModule() {
        var _this = _super.call(this) || this;
        _this.GROUP_NAME = "roleInfo";
        return _this;
    }
    Object.defineProperty(RoleInfoModule, "instance", {
        get: function () {
            if (RoleInfoModule._instance == undefined) {
                RoleInfoModule._instance = new RoleInfoModule();
            }
            return RoleInfoModule._instance;
        },
        enumerable: true,
        configurable: true
    });
    RoleInfoModule.prototype.show = function (params) {
        if (params === void 0) { params = 0; }
        if (!this.moduleWindow) {
            _super.prototype.startLoadModuleRES.call(this, this.GROUP_NAME);
        }
        else {
            this.setIspop(true); //已经加载过的，直接显示出来
        }
    };
    RoleInfoModule.prototype.setIspop = function (param1) {
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
    RoleInfoModule.prototype.loadGroupRESOver = function () {
        this.moduleWindow = new RoleInfo();
        this.setIspop(true); //加载完成，显示出来
    };
    RoleInfoModule.prototype.dispose = function () {
        this.removeEvents();
        _super.prototype.dispose.call(this);
        if (this.moduleWindow) {
            this.moduleWindow.dispose();
        }
    };
    RoleInfoModule.prototype.addEvents = function () {
    };
    RoleInfoModule.prototype.removeEvents = function () {
    };
    return RoleInfoModule;
}(BaseModule));
__reflect(RoleInfoModule.prototype, "RoleInfoModule");
//# sourceMappingURL=RoleInfoModule.js.map