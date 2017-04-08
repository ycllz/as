var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/**
 * 申请创建商会界面
 */
var applyPanel = (function (_super) {
    __extends(applyPanel, _super);
    /**
     * 构造函数
     * ------------------------------------------------------------------------*/
    function applyPanel() {
        var _this = _super.call(this) || this;
        _this.skinName = skins.applyPanelSkin;
        _this.btn_close.touchEnabled = true;
        _this.btn_close.addEventListener(egret.TouchEvent.TOUCH_TAP, _this.onTouchBtnClose, _this);
        _this.btn.addEventListener(egret.TouchEvent.TOUCH_TAP, _this.onTouchAPanelBtn, _this);
        return _this;
    }
    applyPanel.prototype.onTouchAPanelBtn = function (e) {
        Data.COMMERID = 1;
        // CommerceModule.instance.openResultPanel();
        CommerceModule.instance.show(1);
    };
    /**
    * 关闭按钮
    * ------------------------------------------------------------------------*/
    applyPanel.prototype.onTouchBtnClose = function (e) {
        // console.log("右上角关闭按钮--->");
        if (this.parent) {
            this.parent.removeChild(this);
        }
    };
    return applyPanel;
}(eui.Component));
__reflect(applyPanel.prototype, "applyPanel");
//# sourceMappingURL=applyPanel.js.map