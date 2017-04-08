var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/**
 * 车辆购买结果提示面板
 */
var carResult = (function (_super) {
    __extends(carResult, _super);
    /**
     * 构造函数
     * ------------------------------------------------------------------------*/
    function carResult() {
        var _this = _super.call(this) || this;
        _this.skinName = skins.carBuyResultSkin;
        _this.btn.touchEnabled = true;
        _this.btn.addEventListener(egret.TouchEvent.TOUCH_TAP, _this.onTouchBtn, _this);
        return _this;
    }
    /**
    * 确认按钮
    * ------------------------------------------------------------------------*/
    carResult.prototype.onTouchBtn = function (e) {
        this.y = -700;
    };
    return carResult;
}(eui.Component));
__reflect(carResult.prototype, "carResult");
//# sourceMappingURL=carResult.js.map