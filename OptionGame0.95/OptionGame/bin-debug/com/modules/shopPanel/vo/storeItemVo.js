var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
/**
 * 我的租车行中车辆信息item数据
 */
var storeItemVo = (function () {
    function storeItemVo() {
    }
    //返回图片路径
    storeItemVo.prototype.getBgImgUrl = function () {
        if (this.trade <= 6)
            return "diamondBg_png";
        else
            return "goldBg_png";
    };
    storeItemVo.prototype.getShopIco = function () {
        var num = this.trade % 6;
        if (num == 0)
            num = 6;
        if (this.trade <= 6)
            return "ico_diamond" + num + "_png";
        else
            return "ico_gold" + num + "_png";
    };
    storeItemVo.prototype.getTypeIco = function () {
        if (this.trade <= 6)
            return "renmingbi_png";
        else
            return "zuanshi_png";
    };
    storeItemVo.prototype.getPrice = function () {
        if (this.trade <= 6)
            return this.price.toString();
        else
            return (this.price * 10).toString();
    };
    storeItemVo.prototype.getName = function () {
        if (this.trade <= 6)
            return "钻石" + this.price + "0";
        else
            return "金币" + this.price + "0";
    };
    return storeItemVo;
}());
__reflect(storeItemVo.prototype, "storeItemVo");
//# sourceMappingURL=storeItemVo.js.map