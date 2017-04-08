var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/**
 * 车辆购买面板
 */
var carBuyPanel = (function (_super) {
    __extends(carBuyPanel, _super);
    /**
     * 构造函数
     * ------------------------------------------------------------------------*/
    function carBuyPanel() {
        var _this = _super.call(this) || this;
        _this.btnCar = [];
        _this.btnBorder = [];
        _this.skinName = skins.carBuySkin;
        _this.btnCar.push(_this.btnCar1);
        _this.btnCar.push(_this.btnCar2);
        _this.btnCar.push(_this.btnCar3);
        _this.btnCar.push(_this.btnCar4);
        _this.btnCar.push(_this.btnCar5);
        _this.btnBorder.push(_this.btnBorder1);
        _this.btnBorder.push(_this.btnBorder2);
        _this.btnBorder.push(_this.btnBorder3);
        _this.btnBorder.push(_this.btnBorder4);
        _this.btnBorder.push(_this.btnBorder5);
        for (var i = 0; i < _this.btnBorder.length; i++) {
            _this.btnBorder[i].visible = false;
        }
        _this.btnBorder[0].visible = true;
        //添加监听事件
        for (var i = 0; i < _this.btnBorder.length; i++) {
            _this.btnCar[i].touchEnabled = true;
            _this.btnCar[i].addEventListener(egret.TouchEvent.TOUCH_TAP, _this.onTouchTab, _this);
            _this.btnCar[i].texture = RES.getRes("carIco" + (i + 1) + "_png");
        }
        _this.btn_game.touchEnabled = true;
        btns.initScaleBtn1(_this.btn_game);
        _this.btn_game.addEventListener(egret.TouchEvent.TOUCH_TAP, _this.onTouchBtn, _this);
        return _this;
    }
    /**
     * 确认购买按钮
     * ------------------------------------------------------------------------*/
    carBuyPanel.prototype.onTouchBtn = function (e) {
        this.y = -700;
        btns.inScalePanel(CarRentalPanel.carResultPanel, 0, 0);
        // CarRentalPanel.carResultPanel.y = 0;
    };
    /**
     * 选项卡触摸事件，更改点中五辆车的选中状态
     * ------------------------------------------------------------------------*/
    carBuyPanel.prototype.onTouchTab = function (e) {
        var id = this.btnCar.indexOf(e.target);
        for (var i = 0; i < this.btnBorder.length; i++) {
            this.btnBorder[i].visible = false;
        }
        this.btnBorder[id].visible = true;
    };
    return carBuyPanel;
}(eui.Component));
__reflect(carBuyPanel.prototype, "carBuyPanel");
//# sourceMappingURL=carBuyPanel.js.map