var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/**
 * 商会item
 * */
var commerceItem = (function (_super) {
    __extends(commerceItem, _super);
    /**
     * 构造函数
     * ------------------------------------------------------------------------*/
    function commerceItem() {
        var _this = _super.call(this) || this;
        _this.skinName = skins.commerceItemSkin;
        return _this;
    }
    /**
     * 设置item上的数据
     * ------------------------------------------------------------------------*/
    commerceItem.prototype.setDate = function (vo) {
        this.trade = vo.trade - 1;
        this.vipIco.texture = RES.getRes(vo.getVipIcoUrl());
        this.peopleName.text = vo.peopleName;
        this.peopleNum.text = vo.getPeopleNum();
        this.bonusPersent.text = vo.getBonusPersent();
        this.tradeNum.text = vo.getTradeNum();
        this.bonus.text = vo.getBonus();
        this.time.text = vo.time;
        if (vo.time == "在线") {
            this.time.textColor = 0xa9f12b;
        }
        else {
            this.time.textColor = 0xffeeba;
        }
    };
    return commerceItem;
}(eui.Component));
__reflect(commerceItem.prototype, "commerceItem");
//# sourceMappingURL=commerceItem.js.map