var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
//封装主题与组资源加载
var ModuleLoader = (function (_super) {
    __extends(ModuleLoader, _super);
    function ModuleLoader() {
        var _this = _super.call(this) || this;
        _this.callbackList = new eui.ArrayCollection();
        _this.contextList = new eui.ArrayCollection();
        _this.o = [];
        _this.isThemeLoadEnd = false;
        _this.isResourceLoadEnd = false;
        return _this;
    }
    /**
     * 1. resourceRoot 资源根路径。配置中的所有url都是这个路径的相对值。最终url是这个字符串与配置里资源项的url相加的值。
     * 2. type 配置文件的格式。确定要用什么解析器来解析配置文件。默认"json"
     */
    ModuleLoader.prototype.loadRes = function (configPath, groupName, themePath, callback, context, resourceRoot, type) {
        this.o.push({ key: groupName, value: [configPath, groupName, themePath, callback, context] });
        RES.addEventListener(RES.ResourceEvent.CONFIG_COMPLETE, this.onConfigComplete, this);
        RES.loadConfig(configPath, "resource/");
        // RES.loadConfig("resource/default.res.json", "resource/");
    };
    ModuleLoader.prototype.onConfigComplete = function (event) {
        RES.removeEventListener(RES.ResourceEvent.CONFIG_COMPLETE, this.onConfigComplete, this);
        var len = this.o.length;
        for (var i = 0; i < len; i++) {
            var obj = this.o[i];
            if (obj.key == event.target.name) {
            }
        }
        var themePath = "";
        //加载皮肤主题配置文件,可以手动修改这个文件。替换默认皮肤。
        var theme = new eui.Theme("resource/default.thm.json", this.stage);
        theme.addEventListener(eui.UIEvent.COMPLETE, this.onThemeLoadComplete, this);
        RES.addEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onResourceLoadComplete, this);
        RES.addEventListener(RES.ResourceEvent.GROUP_LOAD_ERROR, this.onResourceLoadError, this);
        RES.addEventListener(RES.ResourceEvent.GROUP_PROGRESS, this.onResourceProgress, this);
        RES.addEventListener(RES.ResourceEvent.ITEM_LOAD_ERROR, this.onItemLoadError, this);
        RES.loadGroup("preload");
    };
    ModuleLoader.prototype.onThemeLoadComplete = function () {
        this.isThemeLoadEnd = true;
        // this.createScene();
        this.loadeOver();
    };
    ModuleLoader.prototype.onResourceLoadComplete = function (event) {
        if (event.groupName == "preload") {
            RES.removeEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onResourceLoadComplete, this);
            RES.removeEventListener(RES.ResourceEvent.GROUP_LOAD_ERROR, this.onResourceLoadError, this);
            RES.removeEventListener(RES.ResourceEvent.GROUP_PROGRESS, this.onResourceProgress, this);
            RES.removeEventListener(RES.ResourceEvent.ITEM_LOAD_ERROR, this.onItemLoadError, this);
            this.isResourceLoadEnd = true;
            // this.createScene();
            this.loadeOver();
        }
    };
    ModuleLoader.prototype.loadeOver = function () {
        if (this.isThemeLoadEnd && this.isResourceLoadEnd) {
            Loading.instance.hide();
            this.onloadeOver();
        }
    };
    ModuleLoader.prototype.onloadeOver = function () {
    };
    /**
     * 资源组加载出错
     *  The resource group loading failed
     */
    ModuleLoader.prototype.onItemLoadError = function (event) {
        console.warn("Url:" + event.resItem.url + " has failed to load");
    };
    /**
     * 资源组加载出错
     */
    ModuleLoader.prototype.onResourceLoadError = function (event) {
        console.warn("Group:" + event.groupName + " has failed to load");
        //忽略加载失败的项目
        this.onResourceLoadComplete(event);
    };
    /**
     * preload资源组加载进度
     */
    ModuleLoader.prototype.onResourceProgress = function (event) {
        if (event.groupName == "preload") {
            Loading.instance.setProgress(event.itemsLoaded, event.itemsTotal);
        }
    };
    return ModuleLoader;
}(eui.UILayer));
__reflect(ModuleLoader.prototype, "ModuleLoader");
//# sourceMappingURL=ModuleLoader.js.map