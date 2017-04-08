var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
/**
 * 我的租车行中车辆信息item数据
 */
var carItemVo = (function () {
    function carItemVo() {
    }
    //返回状态
    carItemVo.prototype.getResult = function () {
        var text = "carResult" + this.carResult + "_png";
        return text;
    };
    //返回商品描述
    carItemVo.prototype.getText = function () {
        var text = "";
        text = "购买车辆1辆";
        return text;
    };
    //返回图片路径
    carItemVo.prototype.getImgUrl = function () {
        return "carLongIco" + this.type + "_png";
    };
    //返回收益
    carItemVo.prototype.getPrice = function () {
        var text = "";
        text = StringUtil.tranNumberToString(this.carPrice);
        return text;
    };
    return carItemVo;
}());
__reflect(carItemVo.prototype, "carItemVo");
//# sourceMappingURL=carItemVo.js.map