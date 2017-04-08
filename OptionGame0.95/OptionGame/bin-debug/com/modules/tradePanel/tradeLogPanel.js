var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/**
 * 贸易明细界面
 */
var tradeLogPanel = (function (_super) {
    __extends(tradeLogPanel, _super);
    /**
     * 构造函数
     * ------------------------------------------------------------------------*/
    function tradeLogPanel() {
        var _this = _super.call(this) || this;
        _this.tab = [];
        _this.skinName = skins.tradePanelSkin;
        return _this;
    }
    tradeLogPanel.prototype.createChildren = function () {
        _super.prototype.createChildren.call(this);
        if (!this.btnClose) {
            this.btnClose = new ButtonX();
            this.btnClose.setSkinUseImage(this.btn_close); //this.btn_close 这个皮肤使用完会被 ButtonX 里面自动 removeChild，清出显示列表
        }
        this.addChild(this.btnClose);
        this.tab.push(this.tab1);
        this.tab.push(this.tab2);
        //添加监听事件
        for (var i = 0; i < 2; i++) {
            this.tab[i].touchEnabled = true;
            btns.initScaleBtn1(this.tab[i]);
            this.tab[i].addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchTab, this);
        }
    };
    tradeLogPanel.prototype.addEvents = function () {
        this.removeEvents();
        this.btnClose.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClose, this);
    };
    tradeLogPanel.prototype.removeEvents = function () {
        this.btnClose.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onClose, this);
    };
    tradeLogPanel.prototype.onClose = function () {
        this.dispose();
    };
    /**
     * 添加一个item对象到仓库中
     * 参数说明：
     *      itm：    添加到仓库中的item对象
     *      x:      itm对象的横坐标
     *      y:      itm对象的纵坐标
     * ------------------------------------------------------------------------*/
    tradeLogPanel.prototype.addTradeItem = function (itm, x, y) {
        itm.x = x;
        itm.y = y;
        this.content.addChild(itm);
    };
    /**
     * 添加一个item对象到仓库中
     * 参数说明：
     *      itm：    添加到仓库中的item对象
     *      x:      itm对象的横坐标
     *      y:      itm对象的纵坐标
     * ------------------------------------------------------------------------*/
    tradeLogPanel.prototype.addDiamondItem = function (itm, x, y) {
        itm.x = x;
        itm.y = y;
        this.content.addChild(itm);
    };
    /**
     * 设置选项卡选中状态，没选中的为黄色图片，选中为蓝色图片，并重新添加该选项下列表中的物品
     * 参数说明：
     *      num：选中的tab值，值范围从左往右为0~1
     * ------------------------------------------------------------------------*/
    tradeLogPanel.prototype.setTab = function (num) {
        for (var i = 0; i < 2; i++) {
            this.tab[i].texture = RES.getRes("tab_" + (i + 4) + "_0_png");
        }
        this.tab[num].texture = RES.getRes("tab_" + (num + 4) + "_1_png");
        this.content.removeChildren();
        if (num == 0) {
            for (var i = 0; i < MainPanel.Tvo.length; i++) {
                var v = MainPanel.Tvo[i];
                var k = new tradeItem();
                var x = 0;
                var y = i * 98;
                k.setDate(v);
                this.addTradeItem(k, x, y);
            }
        }
        else {
            for (var i = 0; i < MainPanel.TDvo.length; i++) {
                var v = MainPanel.TDvo[i];
                var k = new diamondItem();
                var x = 0;
                var y = i * 98;
                k.setDate(v);
                this.addDiamondItem(k, x, y);
            }
        }
    };
    /**
     * 选项卡触摸事件，更改点中选项卡后选项卡背景，重新添加该选项下仓库中的物品
     * ------------------------------------------------------------------------*/
    tradeLogPanel.prototype.onTouchTab = function (e) {
        var id = this.tab.indexOf(e.target);
        this.setTab(id);
    };
    tradeLogPanel.prototype.dispose = function () {
        if (this.parent) {
            this.parent.removeChild(this);
        }
    };
    return tradeLogPanel;
}(eui.Component));
tradeLogPanel.Tvo = [];
__reflect(tradeLogPanel.prototype, "tradeLogPanel");
//# sourceMappingURL=tradeLogPanel.js.map