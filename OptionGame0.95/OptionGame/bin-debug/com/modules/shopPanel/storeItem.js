var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/**
 * 商店物品item
 * */
var storeItem = (function (_super) {
    __extends(storeItem, _super);
    /**
     * 构造函数
     * ------------------------------------------------------------------------*/
    function storeItem() {
        var _this = _super.call(this) || this;
        _this.skinName = skins.shopItemSkin;
        _this.touchEnabled = true;
        _this.addEventListener(egret.TouchEvent.TOUCH_TAP, _this.onTouchItem, _this);
        //移除item时释放这上面监听的事件
        _this.addEventListener(egret.Event.REMOVED_FROM_STAGE, _this.removeFromStage, _this);
        return _this;
    }
    /**
     * 设置item上的数据
     * ------------------------------------------------------------------------*/
    storeItem.prototype.setDate = function (vo) {
        this.trade = vo.trade;
        this.bg.texture = RES.getRes(vo.getBgImgUrl());
        this.shopIco.texture = RES.getRes(vo.getShopIco());
        this.typeIco.texture = RES.getRes(vo.getTypeIco());
        this.price.text = vo.getPrice();
        this.storeName.text = vo.getName();
        if (this.trade <= 6) {
            this.storeName.strokeColor = 0x214F70;
            this.price.strokeColor = 0x214F70;
        }
        else {
            this.storeName.strokeColor = 0x633B17;
            this.price.strokeColor = 0x633B17;
        }
    };
    /**
     * item被点击时，弹出相应的界面
     * ------------------------------------------------------------------------*/
    storeItem.prototype.onTouchItem = function () {
        shopPanel.ResultPanel.setData(this.trade);
        btns.inScalePanel(shopPanel.ResultPanel, 0, 0);
        // MainPanel.iCont.setDate(MainPanel.Dvo[this.trade]);
    };
    /**
     * 移除item时释放这上面监听的事件
     * ------------------------------------------------------------------------*/
    storeItem.prototype.removeFromStage = function () {
        this.touchEnabled = false;
        if (this.hasEventListener(egret.TouchEvent.TOUCH_TAP)) {
            this.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchItem, this);
            this.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.removeFromStage, this);
        }
    };
    return storeItem;
}(eui.Component));
__reflect(storeItem.prototype, "storeItem");
//# sourceMappingURL=storeItem.js.map