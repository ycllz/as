var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/**
 * 租车行车辆信息item
 * */
var carItem = (function (_super) {
    __extends(carItem, _super);
    /**
     * 构造函数
     * ------------------------------------------------------------------------*/
    function carItem() {
        var _this = _super.call(this) || this;
        _this.skinName = skins.carItemSkin;
        _this.btn_watch.touchEnabled = true;
        btns.initScaleBtn1(_this.btn_watch);
        _this.btn_watch.addEventListener(egret.TouchEvent.TOUCH_TAP, _this.onTouchItem, _this);
        return _this;
        //移除item时释放这上面监听的事件
        // this.btn_watch.addEventListener(egret.Event.REMOVED_FROM_STAGE,this.removeFromStage, this);
    }
    /**
     * 设置item上的数据
     * ------------------------------------------------------------------------*/
    carItem.prototype.setDate = function (vo) {
        this.carId = vo.trade - 1;
        RES.getResAsync(vo.getImgUrl(), this.onLoadOverIcon, this);
        this.carTime.text = vo.carTime;
        this.carPrice.text = vo.getPrice();
        RES.getResAsync(vo.getResult(), this.onLoadOverResult, this);
    };
    carItem.prototype.onLoadOverIcon = function (data, key) {
        this.carIco.texture = data;
    };
    carItem.prototype.onLoadOverResult = function (data, key) {
        this.carResult.texture = data;
    };
    /**
     * 查看按钮被点击时，弹出车辆详细信息面板
     * ------------------------------------------------------------------------*/
    carItem.prototype.onTouchItem = function () {
        // CarRentalPanel.carContPanel.y = 0;  
        btns.inScalePanel(CarRentalPanel.carContPanel, 0, 0);
        CarRentalPanel.carContPanel.setDate(CarRentalPanel.Cvo[this.carId]);
    };
    /**
     * 移除item时释放这上面监听的事件
     * ------------------------------------------------------------------------*/
    carItem.prototype.removeFromStage = function () {
        this.btn_watch.touchEnabled = false;
        if (this.btn_watch.hasEventListener(egret.TouchEvent.TOUCH_TAP)) {
            this.btn_watch.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchItem, this);
        }
    };
    return carItem;
}(eui.Component));
__reflect(carItem.prototype, "carItem");
//# sourceMappingURL=carItem.js.map