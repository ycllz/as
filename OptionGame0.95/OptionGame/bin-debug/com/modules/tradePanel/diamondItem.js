var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/**
 * 钻石明细item
 * */
var diamondItem = (function (_super) {
    __extends(diamondItem, _super);
    /**
     * 构造函数
     * ------------------------------------------------------------------------*/
    function diamondItem() {
        var _this = _super.call(this) || this;
        _this.skinName = skins.diamondLogItemSkin;
        return _this;
    }
    /**
     * 设置item上的数据
     * ------------------------------------------------------------------------*/
    diamondItem.prototype.setDate = function (vo) {
        this.trade = vo.trade - 1;
        this.tradeName.text = vo.getTradeName();
        this.tradeId.text = vo.tradeId.toString();
        this.tradeTime.text = vo.tradeTime;
        this.text.text = vo.getText();
        if (vo.price < 0) {
            this.price.textColor = 0x9FFF00;
            this.price.strokeColor = 0x202D01;
            this.price.text = vo.getPrice();
        }
        else {
            this.price.textColor = 0xfd2307;
            this.price.strokeColor = 0x430709;
            this.price.text = vo.getPrice();
        }
        this.priceIco.texture = RES.getRes(vo.getImgUrl());
    };
    return diamondItem;
}(eui.Component));
__reflect(diamondItem.prototype, "diamondItem");
//# sourceMappingURL=diamondItem.js.map