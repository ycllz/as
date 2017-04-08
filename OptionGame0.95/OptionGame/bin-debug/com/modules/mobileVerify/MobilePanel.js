var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/**
 * 手机验证面板
 */
var MobilePanel = (function (_super) {
    __extends(MobilePanel, _super);
    // private btn:eui.Image;
    /**
     * 构造函数
     * ------------------------------------------------------------------------*/
    function MobilePanel() {
        var _this = _super.call(this) || this;
        _this.skinName = skins.MobilePanelSkin;
        _this.btn_bundling.touchEnabled = true;
        btns.initScaleBtn1(_this.btn_bundling);
        _this.btn_bundling.addEventListener(egret.TouchEvent.TOUCH_TAP, _this.onTouchBtn, _this);
        _this.btn_close.touchEnabled = true;
        btns.initScaleBtn1(_this.btn_close);
        _this.btn_close.addEventListener(egret.TouchEvent.TOUCH_TAP, _this.onTouchBtnClose, _this);
        return _this;
    }
    /**
    * 确认按钮
    * ------------------------------------------------------------------------*/
    MobilePanel.prototype.onTouchBtnClose = function (e) {
        this.y = -700;
    };
    /**
    * 确认按钮
    * ------------------------------------------------------------------------*/
    MobilePanel.prototype.onTouchBtn = function (e) {
        Data.GAMEID = 1;
        this.y = -700;
    };
    return MobilePanel;
}(eui.Component));
__reflect(MobilePanel.prototype, "MobilePanel");
//# sourceMappingURL=MobilePanel.js.map