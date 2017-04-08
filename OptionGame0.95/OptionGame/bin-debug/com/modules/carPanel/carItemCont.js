var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/**
 * 租车行车辆详细信息item
 * */
var carItemCont = (function (_super) {
    __extends(carItemCont, _super);
    /**
     * 构造函数
     * ------------------------------------------------------------------------*/
    function carItemCont() {
        var _this = _super.call(this) || this;
        _this.skinName = skins.carItemContSkin;
        _this.btn.touchEnabled = true;
        btns.initScaleBtn1(_this.btn);
        _this.btn.addEventListener(egret.TouchEvent.TOUCH_TAP, _this.onTouchClose, _this);
        return _this;
    }
    /**
     * 设置item上的数据
     * ------------------------------------------------------------------------*/
    carItemCont.prototype.setDate = function (vo) {
        this.carIco.texture = RES.getRes(vo.getImgUrl());
        this.carNum.text = vo.carNum;
        this.carPrice.text = vo.carPrice.toString();
    };
    /**
     * 点击确认按钮，隐藏当前面板
     * ------------------------------------------------------------------------*/
    carItemCont.prototype.onTouchClose = function () {
        this.y = -700;
    };
    return carItemCont;
}(eui.Component));
__reflect(carItemCont.prototype, "carItemCont");
//# sourceMappingURL=carItemCont.js.map