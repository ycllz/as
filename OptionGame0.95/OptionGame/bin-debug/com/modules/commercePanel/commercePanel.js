var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/**
 * 商会界面
 */
var commercePanel = (function (_super) {
    __extends(commercePanel, _super);
    function commercePanel() {
        var _this = _super.call(this) || this;
        _this.tab = [];
        _this.vtab = [];
        _this.tabNum = 0;
        _this.skinName = skins.commercePanelSkin;
        return _this;
    }
    commercePanel.prototype.createChildren = function () {
        _super.prototype.createChildren.call(this);
        this.btn_close.touchEnabled = true;
        this.btn_close.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchBtn, this);
        this.tab.push(this.tab1);
        this.tab.push(this.tab2);
        //添加监听事件
        for (var i = 0; i < 2; i++) {
            this.tab[i].touchEnabled = true;
            btns.initScaleBtn1(this.tab[i]);
            this.tab[i].addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchTab, this);
        }
        this.vtab.push(this.vtab1);
        this.vtab.push(this.vtab2);
        //添加监听事件
        for (var i = 0; i < 2; i++) {
            this.vtab[i].touchEnabled = true;
            btns.initScaleBtn1(this.vtab[i]);
            this.vtab[i].addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchVTab, this);
        }
        this.addAllItem();
    };
    /**
     * 添加一个item对象到仓库中
     * 参数说明：
     *      itm：    添加到仓库中的item对象
     *      x:      itm对象的横坐标
     *      y:      itm对象的纵坐标
     * ------------------------------------------------------------------------*/
    commercePanel.prototype.addItem = function (itm, x, y) {
        itm.x = x;
        itm.y = y;
        this.content.addChild(itm);
    };
    commercePanel.prototype.addAllItem = function () {
        this.content.removeChildren();
        for (var i = 0; i < MainPanel.Comvo.length; i++) {
            var item = new commerceItem();
            var x = 0;
            var y = 66 * i;
            this.addItem(item, x, y);
            item.setDate(MainPanel.Comvo[i]);
        }
    };
    /**
    * 选项卡触摸事件，更改点中选项卡后选项卡背景，重新添加该选项下仓库中的物品
    * ------------------------------------------------------------------------*/
    commercePanel.prototype.onTouchTab = function (e) {
        var id = this.tab.indexOf(e.target);
        this.setTab(id);
    };
    /**
     * 选项卡触摸事件，更改点中选项卡后选项卡背景，重新添加该选项下仓库中的物品
     * ------------------------------------------------------------------------*/
    commercePanel.prototype.onTouchVTab = function (e) {
        var id = this.vtab.indexOf(e.target);
        this.setVTab(id);
    };
    /**
    * 设置选项卡选中状态，没选中的为黄色图片，选中为蓝色图片，并重新添加该选项下列表中的物品
    * 参数说明：
    *      num：选中的tab值，值范围从左往右为0~1
    * ------------------------------------------------------------------------*/
    commercePanel.prototype.setTab = function (num) {
        this.tab[0].texture = RES.getRes("tab_zonglan_" + (num == 0 ? 1 : 0) + "_png");
        this.tab[1].texture = RES.getRes("tab_gaikuo_" + (num == 1 ? 1 : 0) + "_png");
        if (num != this.tabNum) {
            this.tabNum = num;
            this.swapChildren(this.tab1, this.tab2);
        }
        this.addAllItem();
    };
    /**
     * 设置选项卡选中状态，没选中的为黄色图片，选中为蓝色图片，并重新添加该选项下列表中的物品
     * 参数说明：
     *      num：选中的tab值，值范围从左往右为0~1
     * ------------------------------------------------------------------------*/
    commercePanel.prototype.setVTab = function (num) {
        this.vtab[0].texture = RES.getRes("tab_coutDiamond_" + (num == 0 ? 1 : 0) + "_png");
        this.vtab[1].texture = RES.getRes("tab_coutGold_" + (num == 1 ? 1 : 0) + "_png");
        this.ico1.texture = RES.getRes(num == 0 ? "zuanshi_png" : "gold_png");
        this.ico2.texture = RES.getRes(num == 0 ? "zuanshi_png" : "gold_png");
    };
    /**
    * 确认按钮
    * ------------------------------------------------------------------------*/
    commercePanel.prototype.onTouchBtn = function (e) {
        this.y = -700;
    };
    commercePanel.prototype.dispose = function () {
    };
    return commercePanel;
}(eui.Component));
__reflect(commercePanel.prototype, "commercePanel");
//# sourceMappingURL=commercePanel.js.map