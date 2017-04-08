var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/**
 * 盈利页面面板
 */
var profitablePanel = (function (_super) {
    __extends(profitablePanel, _super);
    // private btn:eui.Image;
    /**
     * 构造函数
     * ------------------------------------------------------------------------*/
    function profitablePanel() {
        var _this = _super.call(this) || this;
        _this.skinName = skins.profitablePanelSkin;
        _this.btn.touchEnabled = true;
        btns.initScaleBtn1(_this.btn);
        _this.btn.addEventListener(egret.TouchEvent.TOUCH_TAP, _this.onTouchBtn, _this);
        return _this;
    }
    /**
    * 确认按钮
    * ------------------------------------------------------------------------*/
    profitablePanel.prototype.onTouchBtn = function (e) {
        // console.log("关闭盈利界面");
        this.y = -700;
    };
    profitablePanel.prototype.setType = function (type) {
        if (type == 0) {
            this.star.visible = false;
            this.text0.texture = RES.getRes("touzishibai_png");
            this.text0.visible = true;
            this.text1.visible = false;
            this.halo0.visible = true;
            this.halo1.visible = false;
            this.goldIco.visible = false;
            this.textBg.texture = RES.getRes("shibaiBotton_png");
            this.smallStar.texture = RES.getRes("smallStar1_png");
            this.contText.text = "损失购货成本";
            this.priceText.textColor = 0xff2c2c;
        }
        else if (type == 1) {
            this.star.visible = true;
            this.text0.visible = false;
            this.text1.visible = true;
            this.halo0.visible = false;
            this.halo1.visible = true;
            this.goldIco.visible = true;
            this.textBg.texture = RES.getRes("huoliBotton_png");
            this.smallStar.texture = RES.getRes("smallStar_png");
            this.contText.text = "连本带利收益";
            this.priceText.textColor = 0xFFF000;
        }
        else {
            this.star.visible = false;
            this.text0.texture = RES.getRes("xiushi_png");
            this.text0.visible = true;
            this.text1.visible = false;
            this.halo0.visible = true;
            this.halo1.visible = false;
            this.goldIco.visible = false;
            this.textBg.texture = RES.getRes("shibaiBotton_png");
            this.smallStar.texture = RES.getRes("smallStar1_png");
            this.contText.text = "获得购货成本";
            this.priceText.textColor = 0xFFF000;
        }
    };
    profitablePanel.prototype.dispose = function () {
        if (this.parent) {
            this.parent.removeChild(this);
        }
    };
    return profitablePanel;
}(eui.Component));
__reflect(profitablePanel.prototype, "profitablePanel");
//# sourceMappingURL=profitablePanel.js.map