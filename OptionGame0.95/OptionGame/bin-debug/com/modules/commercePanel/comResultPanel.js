var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/**
 * 申请创建商会提示界面
 */
var comResultPanel = (function (_super) {
    __extends(comResultPanel, _super);
    /**
     * 构造函数
     * ------------------------------------------------------------------------*/
    function comResultPanel() {
        var _this = _super.call(this) || this;
        _this.skinName = skins.resultPanelSkin;
        _this.btn.touchEnabled = true;
        _this.btn.addEventListener(egret.TouchEvent.TOUCH_TAP, _this.onTouchBtn, _this);
        return _this;
    }
    /**
    * 确认按钮
    * ------------------------------------------------------------------------*/
    comResultPanel.prototype.onTouchBtn = function (e) {
        this.y = -700;
    };
    return comResultPanel;
}(eui.Component));
__reflect(comResultPanel.prototype, "comResultPanel");
//# sourceMappingURL=comResultPanel.js.map