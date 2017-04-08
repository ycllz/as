var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/**
 *
 */
var informationPanel = (function (_super) {
    __extends(informationPanel, _super);
    /**
     * 构造函数
     * ------------------------------------------------------------------------*/
    function informationPanel() {
        var _this = _super.call(this) || this;
        _this.skinName = skins.informationPanelSkin;
        return _this;
    }
    informationPanel.prototype.dispose = function () {
    };
    return informationPanel;
}(eui.Component));
__reflect(informationPanel.prototype, "informationPanel");
//# sourceMappingURL=informationPanel.js.map