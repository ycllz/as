var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/**
 * 我的租车行详情面板
 */
var carPanel = (function (_super) {
    __extends(carPanel, _super);
    /**
     * 构造函数
     * ------------------------------------------------------------------------*/
    function carPanel() {
        var _this = _super.call(this) || this;
        _this.skinName = skins.carPanelSkin;
        _this.btn_close.touchEnabled = true;
        btns.initScaleBtn1(_this.btn_close);
        _this.btn_close.addEventListener(egret.TouchEvent.TOUCH_TAP, _this.onTouchBtnClose, _this);
        _this.btn_buy.touchEnabled = true;
        btns.initScaleBtn1(_this.btn_buy);
        _this.btn_buy.addEventListener(egret.TouchEvent.TOUCH_TAP, _this.onTouchBtnBuy, _this);
        return _this;
    }
    carPanel.prototype.onTouchBtnClose = function () {
        this.y = -700;
    };
    //点击购买车辆按钮
    carPanel.prototype.onTouchBtnBuy = function () {
        if (Data.GAMEID == 0) {
            btns.inScalePanel(CarRentalPanel.mobilePanel, 0, 0);
        }
        else {
            btns.inScalePanel(CarRentalPanel.carBuyPanel, 0, 0);
        }
    };
    /**
     * 添加一个item对象到仓库中
     * 参数说明：
     *      itm：    添加到仓库中的item对象
     *      x:      itm对象的横坐标
     *      y:      itm对象的纵坐标
     * ------------------------------------------------------------------------*/
    carPanel.prototype.addItem = function (itm, x, y) {
        itm.x = x;
        itm.y = y;
        this.content.addChild(itm);
    };
    carPanel.prototype.dispose = function () {
    };
    return carPanel;
}(eui.Component));
__reflect(carPanel.prototype, "carPanel");
//# sourceMappingURL=carPanel.js.map