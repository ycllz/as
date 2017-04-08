var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
/**
 * 商会item数据
 */
var commerceItemVo = (function () {
    function commerceItemVo() {
    }
    commerceItemVo.prototype.getVipIcoUrl = function () {
        return "Vip" + this.vipIcoNum + "_png";
    };
    commerceItemVo.prototype.getPeopleNum = function () {
        return this.peopleNum + "";
    };
    commerceItemVo.prototype.getBonusPersent = function () {
        return this.bonusPersent + "%";
    };
    commerceItemVo.prototype.getTradeNum = function () {
        return this.tradeNum + "万";
    };
    commerceItemVo.prototype.getBonus = function () {
        var num = Math.floor(this.bonusPersent * this.tradeNum * 100);
        var text = "";
        text = StringUtil.tranNumberToString(num);
        return text;
    };
    return commerceItemVo;
}());
__reflect(commerceItemVo.prototype, "commerceItemVo");
//# sourceMappingURL=commerceItemVo.js.map