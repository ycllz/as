var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/**
 * 仓库物品item
 * */
var depotItem = (function (_super) {
    __extends(depotItem, _super);
    /**
     * 构造函数
     * ------------------------------------------------------------------------*/
    function depotItem() {
        var _this = _super.call(this) || this;
        _this.skinName = skins.depotItemSkin;
        _this.touchEnabled = true;
        _this.addEventListener(egret.TouchEvent.TOUCH_TAP, _this.onTouchItem, _this);
        //移除item时释放这上面监听的事件
        _this.addEventListener(egret.Event.REMOVED_FROM_STAGE, _this.removeFromStage, _this);
        return _this;
    }
    /**
     * 设置item上的数据
     * ------------------------------------------------------------------------*/
    depotItem.prototype.setDate = function (vo) {
        this.trade = vo.trade - 1;
        this.tradeName.text = vo.getTradeName();
        this.unit.text = vo.unit;
        this.text.text = vo.getText();
        this.price.text = vo.getPrice();
        this.gold.texture = RES.getRes(vo.getImgUrl());
        this.ico.texture = RES.getRes("ico_" + vo.type + "_png");
    };
    /**
     * item被点击时，弹出相应的界面
     * ------------------------------------------------------------------------*/
    depotItem.prototype.onTouchItem = function () {
        DepotConfig.instance.vo = MainPanel.Dvo[this.trade];
        DepotModule.instance.show(2);
        // this.setDate(MainPanel.Dvo[this.trade]);
    };
    /**
     * 移除item时释放这上面监听的事件
     * ------------------------------------------------------------------------*/
    depotItem.prototype.removeFromStage = function () {
        this.touchEnabled = false;
        if (this.hasEventListener(egret.TouchEvent.TOUCH_TAP)) {
            this.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchItem, this);
            this.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.removeFromStage, this);
        }
    };
    return depotItem;
}(eui.Component));
__reflect(depotItem.prototype, "depotItem");
//# sourceMappingURL=depotItem.js.map