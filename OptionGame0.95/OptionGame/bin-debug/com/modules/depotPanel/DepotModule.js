var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var DepotModule = (function (_super) {
    __extends(DepotModule, _super);
    function DepotModule() {
        var _this = _super.call(this) || this;
        _this.GROUP_NAME = "depotPanel"; //////////////////修改模块名
        return _this;
    }
    Object.defineProperty(DepotModule, "instance", {
        get: function () {
            if (DepotModule._instance == undefined) {
                DepotModule._instance = new DepotModule();
            }
            return DepotModule._instance;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * 0:depotPanel , 1:profitablePanel, 2:DepotDetailPanel
    */
    DepotModule.prototype.show = function (params) {
        if (params === void 0) { params = 0; }
        this._index = params;
        if (!this.moduleWindow) {
            _super.prototype.startLoadModuleRES.call(this, this.GROUP_NAME);
        }
        else {
            this.setIspop(true); //已经加载过的，直接显示出来
        }
    };
    DepotModule.prototype.setIspop = function (param1) {
        _super.prototype.setIspop.call(this, param1);
        if (param1) {
            this.addEvents();
            if (!this.parentLayer) {
                this.parentLayer = LayerManager.instance.windowLayer;
            }
            LayerManager.instance.windowLayer.showMask();
            if (this._index == 0) {
                this.moduleWindow.addEvents();
                this.parentLayer.addChild(this.moduleWindow);
                this.moduleWindow.setTab(0);
            }
            else if (this._index == 1) {
                this.openProFitablePanel();
            }
            else if (this._index == 2) {
                this.openDepotDetailPanel(DepotConfig.instance.vo);
            }
        }
        else {
            if (this.moduleWindow && this.moduleWindow.parent) {
                this.moduleWindow.parent.removeChild(this.moduleWindow);
            }
            LayerManager.instance.windowLayer.hideMask();
        }
    };
    DepotModule.prototype.loadGroupRESOver = function () {
        this.moduleWindow = new depotPanel(); //////////////////修改类名
        this.setIspop(true); //加载完成，显示出来
    };
    DepotModule.prototype.dispose = function () {
        this.removeEvents();
        if (this.moduleWindow) {
            this.moduleWindow.dispose();
        }
        _super.prototype.dispose.call(this);
    };
    DepotModule.prototype.addEvents = function () {
    };
    DepotModule.prototype.removeEvents = function () {
    };
    DepotModule.prototype.openProFitablePanel = function () {
        if (!this.proPanel) {
            this.proPanel = new profitablePanel();
        }
        this.parentLayer.addChild(this.proPanel);
        this.proPanel.setType(Math.ceil(Math.random() * 10) % 3);
        this.proPanel.initMovie.play(0);
    };
    DepotModule.prototype.openDepotDetailPanel = function (vo) {
        if (!vo)
            return;
        if (!this.depotDetailPanel) {
            this.depotDetailPanel = new DepotDetailPanel();
        }
        this.depotDetailPanel.setDate(vo);
        this.parentLayer.addChild(this.depotDetailPanel);
    };
    DepotModule.prototype.clearModulePanel = function () {
        if (this.moduleWindow) {
            this.moduleWindow.dispose();
        }
        if (this.depotDetailPanel) {
            this.depotDetailPanel.dispose();
        }
        if (this.proPanel) {
            this.proPanel.dispose();
        }
    };
    return DepotModule;
}(BaseModule));
__reflect(DepotModule.prototype, "DepotModule");
//# sourceMappingURL=DepotModule.js.map