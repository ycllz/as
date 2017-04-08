var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var WindowLayer = (function (_super) {
    __extends(WindowLayer, _super);
    function WindowLayer() {
        var _this = _super.call(this) || this;
        _this._mask = new egret.Sprite();
        _this.addChild(_this._mask);
        return _this;
    }
    WindowLayer.prototype.addChild = function (child) {
        _super.prototype.addChild.call(this, child);
        child.x = (LayerManager.instance.stageWidth >> 1) - (child.width >> 1);
        child.y = (LayerManager.instance.stageHeight >> 1) - (child.height >> 1);
    };
    /**
     * 一般来说，此方法不用。
     * 如果没有 createchild 就addchild 的时候，界面的位置应该不是居中的，调用这里居中
     *
    */
    WindowLayer.prototype.setCenter = function (child) {
        _super.prototype.addChild.call(this, child);
        child.x = (LayerManager.instance.stageWidth >> 1) - (child.width >> 1);
        child.y = (LayerManager.instance.stageHeight >> 1) - (child.height >> 1);
    };
    WindowLayer.prototype.showMask = function () {
        this._mask.visible = true;
        this._mask.graphics.beginFill(0, 0.5);
        this._mask.graphics.drawRect(-50, -50, Common.stageW + 100, Common.stageH + 100);
        this._mask.graphics.endFill();
    };
    WindowLayer.prototype.hideMask = function () {
        this._mask.visible = false;
    };
    return WindowLayer;
}(eui.Component));
__reflect(WindowLayer.prototype, "WindowLayer");
//# sourceMappingURL=WindowLayer.js.map