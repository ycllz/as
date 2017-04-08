var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var WindowPositionManager = (function () {
    function WindowPositionManager() {
        LayerManager.instance.windowLayer.addEventListener(egret.Event.ADDED, this.onChangeWindowHandler, this);
    }
    Object.defineProperty(WindowPositionManager.prototype, "instance", {
        get: function () {
            if (WindowPositionManager._instance == undefined) {
                WindowPositionManager._instance = new WindowPositionManager();
            }
            return WindowPositionManager._instance;
        },
        enumerable: true,
        configurable: true
    });
    WindowPositionManager.prototype.onChangeWindowHandler = function () {
    };
    return WindowPositionManager;
}());
WindowPositionManager._instance = undefined;
__reflect(WindowPositionManager.prototype, "WindowPositionManager");
//# sourceMappingURL=WindowPositionManager.js.map