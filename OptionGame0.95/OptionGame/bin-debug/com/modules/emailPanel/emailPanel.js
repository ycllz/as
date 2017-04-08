var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/**
 * 邮件界面
 */
var emailPanel = (function (_super) {
    __extends(emailPanel, _super);
    /**
     * 构造函数
     * ------------------------------------------------------------------------*/
    function emailPanel() {
        var _this = _super.call(this) || this;
        _this.skinName = skins.emailPanelSkin;
        return _this;
    }
    emailPanel.prototype.createChildren = function () {
        _super.prototype.createChildren.call(this);
        if (!this.btnClose) {
            this.btnClose = new ButtonX();
            this.btnClose.setSkinUseImage(this.btn_close); //this.btn_close 这个皮肤使用完会被 ButtonX 里面自动 removeChild，清出显示列表
        }
        this.addChild(this.btnClose);
    };
    emailPanel.prototype.addEvents = function () {
        this.removeEvents();
        this.btnClose.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchEmailClose, this);
    };
    emailPanel.prototype.removeEvents = function () {
        this.btnClose.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchEmailClose, this);
    };
    /**
     * 添加一个item对象到邮箱中
     * 参数说明：
     *      itm：    添加到邮箱中的item对象
     *      x:      itm对象的横坐标
     *      y:      itm对象的纵坐标
     * ------------------------------------------------------------------------*/
    emailPanel.prototype.addItem = function (itm, x, y) {
        itm.x = x;
        itm.y = y;
        this.content.addChild(itm);
    };
    emailPanel.prototype.setTab = function () {
        //初始化邮箱
        for (var i = 0; i < MainPanel.Evo.length; i++) {
            var k = new emailItem();
            var x = 0;
            var y = 98 * i;
            this.addItem(k, x, y);
            k.setDate(MainPanel.Evo[i]);
        }
    };
    emailPanel.prototype.onTouchEmailClose = function () {
        this.dispose();
    };
    emailPanel.prototype.dispose = function () {
        this.removeEvents();
        if (this.parent) {
            this.parent.removeChild(this);
        }
    };
    return emailPanel;
}(eui.Component));
__reflect(emailPanel.prototype, "emailPanel");
//# sourceMappingURL=emailPanel.js.map