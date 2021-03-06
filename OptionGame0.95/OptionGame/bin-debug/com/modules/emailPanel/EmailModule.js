var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var EmailModule = (function (_super) {
    __extends(EmailModule, _super);
    function EmailModule() {
        var _this = _super.call(this) || this;
        _this.GROUP_NAME = "emailPanel"; //////////////////修改模块名
        _this.tabIndex = 0; // 0:emailPanel , 1:EmailDetailPanel
        return _this;
    }
    Object.defineProperty(EmailModule, "instance", {
        get: function () {
            if (EmailModule._instance == undefined) {
                EmailModule._instance = new EmailModule();
            }
            return EmailModule._instance;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * 0:emailPanel , 1:EmailDetailPanel
    */
    EmailModule.prototype.show = function (params) {
        if (params === void 0) { params = 0; }
        this.tabIndex = params;
        if (!this.moduleWindow) {
            _super.prototype.startLoadModuleRES.call(this, this.GROUP_NAME);
        }
        else {
            this.setIspop(true); //已经加载过的，直接显示出来
        }
    };
    EmailModule.prototype.setIspop = function (param1) {
        _super.prototype.setIspop.call(this, param1);
        if (param1) {
            this.addEvents();
            if (!this.parentLayer) {
                this.parentLayer = LayerManager.instance.windowLayer;
            }
            LayerManager.instance.windowLayer.showMask();
            if (this.tabIndex == 0) {
                this.parentLayer.addChild(this.moduleWindow);
                this.moduleWindow.addEvents();
                this.moduleWindow.setTab();
            }
            else if (this.tabIndex == 1) {
                this.openEmailDetailPanel();
            }
        }
        else {
            this.dispose();
            if (this.moduleWindow && this.moduleWindow.parent) {
                this.moduleWindow.parent.removeChild(this.moduleWindow);
            }
            LayerManager.instance.windowLayer.hideMask();
        }
    };
    EmailModule.prototype.loadGroupRESOver = function () {
        this.moduleWindow = new emailPanel(); //////////////////修改类名
        this.setIspop(true); //加载完成，显示出来
    };
    EmailModule.prototype.dispose = function () {
        this.removeEvents();
        if (this.moduleWindow) {
            this.moduleWindow.dispose();
        }
        _super.prototype.dispose.call(this);
    };
    //只监听不同模块之间交互事件，网络事件
    EmailModule.prototype.addEvents = function () {
    };
    EmailModule.prototype.removeEvents = function () {
    };
    EmailModule.prototype.openEmailDetailPanel = function () {
        this.detailPanel = new EmailDetailPanel();
        this.parentLayer.addChild(this.detailPanel);
    };
    return EmailModule;
}(BaseModule));
__reflect(EmailModule.prototype, "EmailModule");
//# sourceMappingURL=EmailModule.js.map