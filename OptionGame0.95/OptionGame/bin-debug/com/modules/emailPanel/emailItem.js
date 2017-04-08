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
var emailItem = (function (_super) {
    __extends(emailItem, _super);
    /**
     * 构造函数
     * ------------------------------------------------------------------------*/
    function emailItem() {
        var _this = _super.call(this) || this;
        _this.skinName = skins.emailItemSkin;
        _this.btn_watch.touchEnabled = true;
        btns.initScaleBtn1(_this.btn_watch);
        _this.btn_watch.addEventListener(egret.TouchEvent.TOUCH_TAP, _this.onTouchItem, _this);
        return _this;
    }
    /**
    * 设置item上的数据
    * ------------------------------------------------------------------------*/
    emailItem.prototype.setDate = function (vo) {
        this.trade = vo.EId - 1;
        this.bg.texture = RES.getRes("emailItemBg_" + vo.ERead + "_png");
        // console.log("emailItemBg_"+vo.ERead+"_png");
        this.title.text = vo.ETitle;
        this.time.text = vo.ETime;
        // this.tradeName.text = vo.getTradeName();
        // this.unit.text = vo.unit;
        // this.text.text = vo.getText();
        // this.price.text = vo.getPrice();
        // this.gold.texture = RES.getRes(vo.getImgUrl());
        // this.ico.texture = RES.getRes("ico_"+vo.type+"_png");
    };
    /**
    * 查看按钮被点击时，弹出车辆详细信息面板
    * ------------------------------------------------------------------------*/
    emailItem.prototype.onTouchItem = function () {
        // CarRentalPanel.carContPanel.y = 0;  
        // btns.inScalePanel(MainPanel.eCont,0,0);
        // MainPanel.eCont.setDate();
        EmailConfig.instance.vo = MainPanel.Evo[this.trade];
        EmailModule.instance.show(1);
    };
    /**
     * 移除item时释放这上面监听的事件
     * ------------------------------------------------------------------------*/
    emailItem.prototype.removeFromStage = function () {
        this.btn_watch.touchEnabled = false;
        if (this.btn_watch.hasEventListener(egret.TouchEvent.TOUCH_TAP)) {
            this.btn_watch.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchItem, this);
        }
    };
    return emailItem;
}(eui.Component));
__reflect(emailItem.prototype, "emailItem");
//# sourceMappingURL=emailItem.js.map