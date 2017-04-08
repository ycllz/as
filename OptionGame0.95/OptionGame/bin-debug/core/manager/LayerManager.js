var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var LayerManager = (function () {
    function LayerManager() {
        this.stageWidth = 1136;
        this.stageHeight = 640;
    }
    Object.defineProperty(LayerManager, "instance", {
        get: function () {
            if (undefined == this._instance) {
                this._instance = new LayerManager();
            }
            return this._instance;
        },
        enumerable: true,
        configurable: true
    });
    LayerManager.prototype.initLayer = function () {
        if (LayerManager.instance.sceneLayer == undefined) {
            LayerManager.instance.mapLayer = new eui.Component();
            LayerManager.instance.sceneLayer = new eui.Component();
            LayerManager.instance.windowLayer = new WindowLayer();
            LayerManager.instance.topLayer = new eui.Component();
        }
    };
    return LayerManager;
}());
LayerManager._instance = undefined;
__reflect(LayerManager.prototype, "LayerManager");
//# sourceMappingURL=LayerManager.js.map