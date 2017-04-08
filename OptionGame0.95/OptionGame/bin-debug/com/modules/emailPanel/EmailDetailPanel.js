var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/**
 * 邮件详细内容
 */
var EmailDetailPanel = (function (_super) {
    __extends(EmailDetailPanel, _super);
    /**
     * 构造函数
     * ------------------------------------------------------------------------*/
    function EmailDetailPanel() {
        var _this = _super.call(this) || this;
        _this.skinName = skins.emailContSkin;
        _this.btnClose.touchEnabled = true;
        btns.initScaleBtn1(_this.btnClose);
        _this.btnClose.addEventListener(egret.TouchEvent.TOUCH_TAP, _this.onTouchBtnClose, _this);
        return _this;
    }
    /**
     * 设置item上的数据
     * ------------------------------------------------------------------------*/
    EmailDetailPanel.prototype.setDate = function (vo) {
        this.title.text = vo.ETitle;
        this.cont.text = vo.ECont;
        this.price.text = vo.EAwardNum.toString();
    };
    /**
     * 关闭当前详细页面
     * ------------------------------------------------------------------------*/
    EmailDetailPanel.prototype.onTouchBtnClose = function () {
        // this.y = -700;
        if (this.parent) {
            this.parent.removeChild(this);
        }
    };
    /**
     * 移除item时释放这上面监听的事件
     * ------------------------------------------------------------------------*/
    EmailDetailPanel.prototype.dispose = function () {
        this.btnClose.touchEnabled = false;
        if (this.btnClose.hasEventListener(egret.TouchEvent.TOUCH_TAP)) {
            this.btnClose.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchBtnClose, this);
        }
    };
    return EmailDetailPanel;
}(eui.Component));
__reflect(EmailDetailPanel.prototype, "EmailDetailPanel");
//# sourceMappingURL=EmailDetailPanel.js.map