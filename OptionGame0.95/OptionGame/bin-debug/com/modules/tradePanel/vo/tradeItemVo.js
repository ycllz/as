var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
/**
 * 贸易记录中item数据
 */
var tradeItemVo = (function () {
    function tradeItemVo() {
    }
    //返回收益
    tradeItemVo.prototype.getPrice = function () {
        var num = this.salePrice - this.buyPrice;
        return num;
    };
    //返回商品名称
    tradeItemVo.prototype.getTradeName = function () {
        var text = "";
        switch (this.type) {
            case 1:
                text = "银矿石";
                break;
            case 2:
                text = "原 油";
                break;
            case 3:
                text = "铜矿石";
                break;
        }
        return text;
    };
    //返回商品描述
    tradeItemVo.prototype.getText = function () {
        var text = "";
        if (this.margin == 1) {
            text = "买涨 " + this.num + "箱";
        }
        else {
            text = "买跌 " + this.num + "箱";
        }
        return text;
    };
    //返回图片路径
    tradeItemVo.prototype.getImgUrl = function () {
        if (this.currency == 1)
            return "gold_png";
        else
            return "zuanshi_png";
    };
    //返回价差
    tradeItemVo.prototype.getMargin = function () {
        var n = 0;
        if (this.margin < 0)
            n = -this.margin;
        else
            n = this.margin;
        return "(" + n + "价差)";
    };
    return tradeItemVo;
}());
__reflect(tradeItemVo.prototype, "tradeItemVo");
//# sourceMappingURL=tradeItemVo.js.map