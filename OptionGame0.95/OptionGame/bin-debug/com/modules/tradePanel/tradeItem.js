var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/**
 * 仓库物品item
 * */
var tradeItem = (function (_super) {
    __extends(tradeItem, _super);
    /**
     * 构造函数
     * ------------------------------------------------------------------------*/
    function tradeItem() {
        var _this = _super.call(this) || this;
        _this.skinName = skins.tradeLogItemSkin;
        return _this;
    }
    /**
     * 设置item上的数据
     * ------------------------------------------------------------------------*/
    tradeItem.prototype.setDate = function (vo) {
        this.trade = vo.trade - 1;
        this.tradeName.text = vo.getTradeName();
        this.tradeId.text = vo.tradeId.toString();
        this.tradeTime.text = vo.tradeTime;
        this.margin.text = vo.getMargin();
        this.text.text = vo.getText();
        this.buyPrice.text = "买入价：" + (vo.buyPrice * vo.num).toString() + ".000";
        this.salePrice.text = "卖出价：" + (vo.salePrice * vo.num).toString() + ".000";
        this.payPrice.text = "订货款：" + (vo.payPrice * vo.num).toString() + ".000";
        this.tip.text = "服务费：" + (vo.tip * vo.num).toString() + ".000";
        if (vo.getPrice() < 0) {
            this.price.textColor = 0xa2ff01;
            this.price.strokeColor = 0x1a2d03;
            this.price.text = vo.getPrice() + ".000";
        }
        else {
            this.price.textColor = 0xff2103;
            this.price.strokeColor = 0x450303;
            this.price.text = vo.getPrice() + ".000";
        }
        this.gold.texture = RES.getRes(vo.getImgUrl());
        this.ico.texture = RES.getRes("ico_" + vo.type + "_png");
    };
    return tradeItem;
}(eui.Component));
__reflect(tradeItem.prototype, "tradeItem");
//# sourceMappingURL=tradeItem.js.map