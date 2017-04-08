var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/**
 * 仓库物品详细内容
 */
var DepotDetailPanel = (function (_super) {
    __extends(DepotDetailPanel, _super);
    /**
     * 构造函数
     * ------------------------------------------------------------------------*/
    function DepotDetailPanel() {
        var _this = _super.call(this) || this;
        _this.skinName = skins.depotItemContSkin;
        _this.btnClose.touchEnabled = true;
        btns.initScaleBtn1(_this.btnClose);
        _this.btnClose.addEventListener(egret.TouchEvent.TOUCH_TAP, _this.onTouchBtnClose, _this);
        _this.btnNext.addEventListener(egret.TouchEvent.TOUCH_TAP, _this.onTouchNext, _this);
        return _this;
    }
    DepotDetailPanel.prototype.onTouchNext = function () {
        DepotModule.instance.show(1);
    };
    /**
     * 设置item上的数据
     * ------------------------------------------------------------------------*/
    DepotDetailPanel.prototype.setDate = function (vo) {
        this.tradeName.text = vo.getTradeName();
        this.unit.text = vo.unit;
        this.text.text = vo.getText();
        this.price.text = vo.getPrice();
        this.gold.texture = RES.getRes(vo.getImgUrl());
        this.ico.texture = RES.getRes("ico_" + vo.type + "_png");
        this.icoResult.texture = RES.getRes(vo.getResultUrl());
        this.price0.text = vo.getResult();
        this.price1.text = vo.price.toString();
        this.price2.text = vo.price2.toString();
        this.price3.text = vo.price3.toString();
        this.price4.text = vo.getPrice4();
    };
    /**
     * 关闭当前详细页面
     * ------------------------------------------------------------------------*/
    DepotDetailPanel.prototype.onTouchBtnClose = function () {
        this.y = -700;
    };
    /**
     * 移除item时释放这上面监听的事件
     * ------------------------------------------------------------------------*/
    DepotDetailPanel.prototype.dispose = function () {
        if (this.btnClose) {
            this.btnClose.touchEnabled = false;
            if (this.btnClose.hasEventListener(egret.TouchEvent.TOUCH_TAP)) {
                this.btnClose.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchBtnClose, this);
            }
        }
        if (this.parent) {
            this.parent.removeChild(this);
        }
    };
    return DepotDetailPanel;
}(eui.Component));
__reflect(DepotDetailPanel.prototype, "DepotDetailPanel");
//# sourceMappingURL=DepotDetailPanel.js.map