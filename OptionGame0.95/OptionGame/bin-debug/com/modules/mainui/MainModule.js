var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var MainModule = (function (_super) {
    __extends(MainModule, _super);
    function MainModule() {
        var _this = _super.call(this) || this;
        _this.GROUP_NAME = "mainPanel"; //////////////////修改模块名
        return _this;
    }
    Object.defineProperty(MainModule, "instance", {
        get: function () {
            if (MainModule._instance == undefined) {
                MainModule._instance = new MainModule();
            }
            return MainModule._instance;
        },
        enumerable: true,
        configurable: true
    });
    MainModule.prototype.show = function (params) {
        if (!this.moduleWindow) {
            _super.prototype.startLoadModuleRES.call(this, this.GROUP_NAME, this.onResProgress);
        }
        else {
            this.setIspop(true); //已经加载过的，直接显示出来
        }
    };
    MainModule.prototype.onResProgress = function (params) {
        BeginModule.instance.setProgress(params[0], params[1]);
    };
    MainModule.prototype.setIspop = function (param1) {
        _super.prototype.setIspop.call(this, param1);
        if (param1) {
            BeginModule.instance.dispose();
            CarRentalModule.instance.dispose();
            GameScene.instance.changeBg("mainBg");
            this.addEvents();
            if (!this.parentLayer) {
                this.parentLayer = LayerManager.instance.windowLayer;
            }
            this.parentLayer.addChild(this.moduleWindow);
            this.moduleWindow.start();
        }
        else {
            if (this.moduleWindow && this.moduleWindow.parent) {
                this.moduleWindow.parent.removeChild(this.moduleWindow);
            }
        }
    };
    MainModule.prototype.loadGroupRESOver = function () {
        this.moduleWindow = new MainPanel(); //////////////////修改类名
        this.setIspop(true); //加载完成，显示出来
    };
    MainModule.prototype.dispose = function () {
        this.removeEvents();
        if (this.moduleWindow) {
            this.moduleWindow.dispose();
        }
        _super.prototype.dispose.call(this);
    };
    MainModule.prototype.addEvents = function () {
    };
    MainModule.prototype.removeEvents = function () {
    };
    return MainModule;
}(BaseModule));
__reflect(MainModule.prototype, "MainModule");
//# sourceMappingURL=MainModule.js.map