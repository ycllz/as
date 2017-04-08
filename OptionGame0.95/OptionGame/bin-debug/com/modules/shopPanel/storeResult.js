var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/**
 * 商品购买结果提示面板
 */
var storeResult = (function (_super) {
    __extends(storeResult, _super);
    /**
     * 构造函数
     * ------------------------------------------------------------------------*/
    function storeResult() {
        var _this = _super.call(this) || this;
        _this.skinName = skins.shopResultSkin;
        _this.btn.touchEnabled = true;
        _this.btn.addEventListener(egret.TouchEvent.TOUCH_TAP, _this.onTouchBtn, _this);
        _this.btn_close.touchEnabled = true;
        _this.btn_close.addEventListener(egret.TouchEvent.TOUCH_TAP, _this.onTouchBtnClose, _this);
        return _this;
    }
    storeResult.prototype.setData = function (trade) {
        if (shopPanel.buyType == 0) {
            this.cont1.text = "是否花费" + Data.ShopPrice[trade - 1] + "元购买";
            this.buyTypeIco.texture = RES.getRes("zuanshi_png");
            this.cont2.text = Data.ShopPrice[trade - 1] * 10 + "？";
        }
        else {
            this.cont1.text = "是否花费" + Data.ShopPrice[trade - 7] * 10 + "钻石购买";
            this.buyTypeIco.texture = RES.getRes("gold_png");
            this.cont2.text = Data.ShopPrice[trade - 7] * 10 + "？";
        }
    };
    /**
    * 确认按钮
    * ------------------------------------------------------------------------*/
    storeResult.prototype.onTouchBtn = function (e) {
        this.y = -700;
    };
    /**
     * 确认按钮
     * ------------------------------------------------------------------------*/
    storeResult.prototype.onTouchBtnClose = function (e) {
        this.y = -700;
    };
    return storeResult;
}(eui.Component));
__reflect(storeResult.prototype, "storeResult");
//# sourceMappingURL=storeResult.js.map