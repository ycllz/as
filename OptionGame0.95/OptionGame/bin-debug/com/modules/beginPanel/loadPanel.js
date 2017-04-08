var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/**
 * 加载界面
 */
var loadPanel = (function (_super) {
    __extends(loadPanel, _super);
    /**
     * 构造函数
     * ------------------------------------------------------------------------*/
    function loadPanel() {
        var _this = _super.call(this) || this;
        _this.skinName = skins.loadingPanelSkin;
        return _this;
    }
    loadPanel.prototype.dispose = function () {
    };
    return loadPanel;
}(eui.Component));
__reflect(loadPanel.prototype, "loadPanel");
//# sourceMappingURL=loadPanel.js.map