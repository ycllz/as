var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
/**
 * 钻石明细item数据
 */
var diamondItemVo = (function () {
    function diamondItemVo() {
    }
    //返回商品名称
    diamondItemVo.prototype.getTradeName = function () {
        var text = "";
        switch (this.type) {
            case 1:
                text = "租车行";
                break;
            case 2:
                text = "充值";
                break;
            case 3:
                text = "商会";
                break;
        }
        return text;
    };
    //返回商品描述
    diamondItemVo.prototype.getText = function () {
        var text = "";
        switch (this.type) {
            case 1:
                text = "购买车辆1辆";
                break;
            case 2:
                text = "充值钻石";
                break;
            case 3:
                text = "商会分红";
                break;
        }
        return text;
    };
    //返回图片路径
    diamondItemVo.prototype.getImgUrl = function () {
        if (this.price >= 0)
            return "inIco_png";
        else
            return "outIco_png";
    };
    //返回收益
    diamondItemVo.prototype.getPrice = function () {
        var text = "";
        text = StringUtil.tranNumberToString(this.price);
        return text;
    };
    return diamondItemVo;
}());
__reflect(diamondItemVo.prototype, "diamondItemVo");
//# sourceMappingURL=diamondItemVo.js.map