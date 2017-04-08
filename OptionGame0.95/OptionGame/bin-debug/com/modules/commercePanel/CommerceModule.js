var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var CommerceModule = (function (_super) {
    __extends(CommerceModule, _super);
    function CommerceModule() {
        var _this = _super.call(this) || this;
        _this.GROUP_NAME = "commercePanel"; //////////////////修改模块名
        _this.tabIndex = 0;
        return _this;
    }
    Object.defineProperty(CommerceModule, "instance", {
        get: function () {
            if (CommerceModule._instance == undefined) {
                CommerceModule._instance = new CommerceModule();
            }
            return CommerceModule._instance;
        },
        enumerable: true,
        configurable: true
    });
    //openResultPanel
    /**
     * 0:commercePanel , 1:comResultPanel
    */
    CommerceModule.prototype.show = function (params) {
        if (params === void 0) { params = 0; }
        this.tabIndex = params;
        if (!this.moduleWindow) {
            _super.prototype.startLoadModuleRES.call(this, this.GROUP_NAME);
        }
        else {
            this.setIspop(true); //已经加载过的，直接显示出来
        }
    };
    CommerceModule.prototype.setIspop = function (param1) {
        _super.prototype.setIspop.call(this, param1);
        if (param1) {
            this.addEvents();
            if (!this.parentLayer) {
                this.parentLayer = LayerManager.instance.windowLayer;
            }
            LayerManager.instance.windowLayer.showMask();
            // this.parentLayer.addChild(this.moduleWindow);
            if (this.tabIndex == 0) {
                if (Data.COMMERID == 0) {
                    if (!this.applyPanel) {
                        this.applyPanel = new applyPanel();
                    }
                    this.clearModule();
                    this.parentLayer.addChild(this.applyPanel);
                }
                else {
                    this.commercePanel.addAllItem();
                    this.clearModule();
                    this.parentLayer.addChild(this.commercePanel);
                }
            }
            else if (this.tabIndex == 1) {
                this.openResultPanel();
            }
        }
        else {
            if (this.moduleWindow && this.moduleWindow.parent) {
                this.moduleWindow.parent.removeChild(this.moduleWindow);
            }
            LayerManager.instance.windowLayer.hideMask();
        }
    };
    CommerceModule.prototype.loadGroupRESOver = function () {
        this.moduleWindow = new commercePanel(); //////////////////修改类名
        this.commercePanel = this.moduleWindow;
        this.setIspop(true); //加载完成，显示出来
    };
    CommerceModule.prototype.dispose = function () {
        this.removeEvents();
        if (this.moduleWindow) {
            this.moduleWindow.dispose();
        }
        _super.prototype.dispose.call(this);
    };
    //只监听不同模块之间交互事件，网络事件
    CommerceModule.prototype.addEvents = function () {
    };
    CommerceModule.prototype.removeEvents = function () {
    };
    CommerceModule.prototype.openResultPanel = function () {
        if (!this.resultPanel) {
            this.resultPanel = new comResultPanel();
        }
        if (!this.parentLayer) {
            this.parentLayer = LayerManager.instance.windowLayer;
        }
        this.clearModule();
        this.parentLayer.addChild(this.resultPanel);
    };
    CommerceModule.prototype.clearModule = function () {
        if (this.applyPanel && this.applyPanel.parent) {
            this.applyPanel.parent.removeChild(this.applyPanel);
        }
        if (this.commercePanel && this.commercePanel.parent) {
            this.commercePanel.parent.removeChild(this.commercePanel);
        }
        if (this.resultPanel && this.resultPanel.parent) {
            this.resultPanel.parent.removeChild(this.resultPanel);
        }
    };
    return CommerceModule;
}(BaseModule));
__reflect(CommerceModule.prototype, "CommerceModule");
//# sourceMappingURL=CommerceModule.js.map