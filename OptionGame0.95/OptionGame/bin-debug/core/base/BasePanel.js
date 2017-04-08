var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var BasePanel = (function (_super) {
    __extends(BasePanel, _super);
    function BasePanel() {
        var _this = _super.call(this) || this;
        _this.isThemeLoadEnd = false;
        _this.isResourceLoadEnd = false;
        Loading.instance.show();
        return _this;
    }
    BasePanel.prototype.loadGroup = function (groupName, themeConfigPath) {
        this._groupName = groupName;
        if (!themeConfigPath) {
            var theme = new eui.Theme(themeConfigPath, this.stage);
            theme.addEventListener(eui.UIEvent.COMPLETE, this.onThemeLoadComplete, this);
        }
        RES.addEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onResourceLoadComplete, this);
        RES.addEventListener(RES.ResourceEvent.GROUP_LOAD_ERROR, this.onResourceLoadError, this);
        RES.addEventListener(RES.ResourceEvent.GROUP_PROGRESS, this.onResourceProgress, this);
        RES.addEventListener(RES.ResourceEvent.ITEM_LOAD_ERROR, this.onItemLoadError, this);
        RES.loadGroup(groupName);
    };
    BasePanel.prototype.onThemeLoadComplete = function () {
        this.isThemeLoadEnd = true;
        // this.createScene();
        this.loadeOver();
    };
    BasePanel.prototype.onResourceLoadComplete = function (event) {
        if (event.groupName == this._groupName) {
            RES.removeEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onResourceLoadComplete, this);
            RES.removeEventListener(RES.ResourceEvent.GROUP_LOAD_ERROR, this.onResourceLoadError, this);
            RES.removeEventListener(RES.ResourceEvent.GROUP_PROGRESS, this.onResourceProgress, this);
            RES.removeEventListener(RES.ResourceEvent.ITEM_LOAD_ERROR, this.onItemLoadError, this);
            this.isResourceLoadEnd = true;
            // this.createScene();
            this.loadeOver();
        }
    };
    BasePanel.prototype.loadeOver = function () {
        if (this.isThemeLoadEnd && this.isResourceLoadEnd) {
            Loading.instance.hide();
            this.onloadeOver();
        }
    };
    BasePanel.prototype.onloadeOver = function () {
        Loading.instance.hide();
        this.show();
    };
    /**
     * 居中显示
     * */
    BasePanel.prototype.setCenter = function () {
        this.x = (LayerManager.instance.stageWidth >> 1) - (this.width >> 1);
        this.y = (LayerManager.instance.stageHeight >> 1) - (this.height >> 1);
    };
    BasePanel.prototype.show = function () {
    };
    /**
     * 资源组加载出错
     *  The resource group loading failed
     */
    BasePanel.prototype.onItemLoadError = function (event) {
        console.warn("Url:" + event.resItem.url + " has failed to load");
    };
    /**
     * 资源组加载出错
     */
    BasePanel.prototype.onResourceLoadError = function (event) {
        console.warn("Group:" + event.groupName + " has failed to load");
        //忽略加载失败的项目
        this.onResourceLoadComplete(event);
    };
    /**
     * preload资源组加载进度
     */
    BasePanel.prototype.onResourceProgress = function (event) {
        if (event.groupName == "preload") {
            Loading.instance.setProgress(event.itemsLoaded, event.itemsTotal);
        }
    };
    return BasePanel;
}(eui.Component));
__reflect(BasePanel.prototype, "BasePanel");
//# sourceMappingURL=BasePanel.js.map