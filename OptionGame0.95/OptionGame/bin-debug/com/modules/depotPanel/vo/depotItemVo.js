var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
/**
 * 仓库内item数据
 */
var depotItemVo = (function () {
    function depotItemVo() {
    }
    //返回商品名称
    depotItemVo.prototype.getTradeName = function () {
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
    depotItemVo.prototype.getText = function () {
        var text = "";
        if (this.currency == 1) {
            text = "买涨 " + this.num + "箱子";
        }
        else {
            text = "买跌 " + this.num + "箱子";
        }
        return text;
    };
    //返回购买总价
    depotItemVo.prototype.getPrice = function () {
        var text = (this.num * this.price) + "";
        return text;
    };
    //返回图片路径
    depotItemVo.prototype.getImgUrl = function () {
        if (this.currency == 1)
            return "gold_png";
        else
            return "zuanshi_png";
    };
    //返回预测结果图片
    depotItemVo.prototype.getResultUrl = function () {
        var num = (this.price2 - this.price);
        if (num >= 0)
            num = 1;
        else
            num = 0;
        if (num == this.currency)
            return "depotIco_1_png";
        else
            return "depotIco_0_png";
    };
    //返回当前差价
    depotItemVo.prototype.getResult = function () {
        var r = this.price2 - this.price;
        if (r >= 0)
            return "+" + r.toString() + ".00";
        return r.toString() + ".00";
    };
    //返回最多获利
    depotItemVo.prototype.getPrice4 = function () {
        var num = (this.price3 * this.num);
        if (num < 0)
            num *= -1;
        return num.toString();
    };
    return depotItemVo;
}());
__reflect(depotItemVo.prototype, "depotItemVo");
//# sourceMappingURL=depotItemVo.js.map