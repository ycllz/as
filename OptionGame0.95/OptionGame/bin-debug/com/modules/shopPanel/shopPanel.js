var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/**
 * 商店界面
 */
var shopPanel = (function (_super) {
    __extends(shopPanel, _super);
    /**
     * 构造函数
     * ------------------------------------------------------------------------*/
    function shopPanel() {
        var _this = _super.call(this) || this;
        _this.tab = [];
        _this.num = 0; //选中的tab值，值范围从左往右为0~3
        _this.skinName = skins.shopPanelSkin;
        return _this;
    }
    shopPanel.prototype.createChildren = function () {
        _super.prototype.createChildren.call(this);
        shopPanel.ResultPanel = new storeResult();
        this.addChild(shopPanel.ResultPanel);
        shopPanel.ResultPanel.y = -700;
        this.tab.push(this.tab0);
        this.tab.push(this.tab1);
        //添加监听事件
        for (var i = 0; i < 2; i++) {
            this.tab[i].touchEnabled = true;
            // this.tabLab[i].touchEnabled = false;
            btns.initScaleBtn1(this.tab[i]);
            this.tab[i].removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchTab, this);
            this.tab[i].addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchTab, this);
        }
        // var btnx:ButtonX = new ButtonX();
        // btnx.setSkin("btn_close_png");
        // this.addChild(btnx);
        if (!this.btnClose) {
            this.btnClose = new ButtonX();
            this.btnClose.setSkinUseImage(this.btn_close); //this.btn_close 这个皮肤使用完会被 ButtonX 里面自动 removeChild，清出显示列表
        }
        this.addChild(this.btnClose);
        this.btnClose.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchShopClose, this);
        this.btnClose.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchShopClose, this);
    };
    shopPanel.prototype.onTouchShopClose = function () {
        if (this.parent) {
            this.parent.removeChild(this);
        }
    };
    /**
     * 添加一个item对象到仓库中
     * 参数说明：
     *      itm：    添加到仓库中的item对象
     *      x:      itm对象的横坐标
     *      y:      itm对象的纵坐标
     * ------------------------------------------------------------------------*/
    shopPanel.prototype.addItem = function (itm, x, y) {
        itm.x = x;
        itm.y = y;
        this.content.addChild(itm);
    };
    /**
     * 设置选项卡选中状态，没选中的为黄色图片，选中为蓝色图片，并重新添加该选项下仓库中的物品
     * 参数说明：
     *      num：选中的tab值，值范围从左往右为0~3
     * ------------------------------------------------------------------------*/
    shopPanel.prototype.setTab = function (num) {
        this.num = num;
        this.tab[0].texture = RES.getRes("tabDiamond_0_png");
        this.tab[1].texture = RES.getRes("tabGlod_0_png");
        if (num == 0) {
            this.tab[0].texture = RES.getRes("tabDiamond_1_png");
        }
        else {
            this.tab[1].texture = RES.getRes("tabGlod_1_png");
        }
        this.content.removeChildren();
        for (var i = 0; i < 6; i++) {
            var item = new storeItem();
            var x = 253 * (i % 3);
            var y = 225 * Math.floor(i / 3);
            this.addItem(item, x, y);
            item.setDate(MainPanel.Storevo[i + num * 6]);
        }
    };
    /**
     * 选项卡触摸事件，更改点中选项卡后选项卡背景，重新添加该选项下仓库中的物品
     * ------------------------------------------------------------------------*/
    shopPanel.prototype.onTouchTab = function (e) {
        var id = this.tab.indexOf(e.target);
        this.setTab(id);
        shopPanel.buyType = id;
    };
    shopPanel.prototype.dispose = function () {
        if (this.parent) {
            this.parent.removeChild(this);
        }
    };
    return shopPanel;
}(eui.Component));
shopPanel.buyType = 0; //标记是购买金币还是购买钻石
__reflect(shopPanel.prototype, "shopPanel");
//# sourceMappingURL=shopPanel.js.map