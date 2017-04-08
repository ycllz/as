var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/**
 * 仓库界面
 */
var depotPanel = (function (_super) {
    __extends(depotPanel, _super);
    /**
     * 构造函数
     * ------------------------------------------------------------------------*/
    function depotPanel() {
        var _this = _super.call(this) || this;
        _this.tab = [];
        _this.skinName = skins.depotPanelSkin;
        return _this;
    }
    depotPanel.prototype.createChildren = function () {
        _super.prototype.createChildren.call(this);
        this.tab.push(this.tab1);
        this.tab.push(this.tab2);
        this.tab.push(this.tab3);
        this.tab.push(this.tab4);
        //添加监听事件
        for (var i = 0; i < 4; i++) {
            this.tab[i].touchEnabled = true;
            // this.tabLab[i].touchEnabled = false;
            btns.initScaleBtn1(this.tab[i]);
            this.tab[i].addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchTab, this);
        }
    };
    depotPanel.prototype.test = function () {
        //初始化仓库数据
        for (var i = 0; i < Data.Dtrade.length; i++) {
            var v = new depotItemVo();
            v.trade = Data.Dtrade[i];
            v.type = Data.Dtype[i];
            v.unit = Data.Dunit[i];
            v.num = Data.Dnum[i];
            v.currency = Data.Dcurrency[i];
            v.price = Data.Dprice[i];
            v.price2 = Data.Dprice2[i];
            v.price3 = Data.Dprice3[i];
            MainPanel.Dvo.push(v);
            var k = new depotItem();
            var x = (i % 3) * 310;
            var y = Math.floor(i / 3) * 116;
            k.setDate(v);
            this.addItem(k, x, y);
        }
    };
    depotPanel.prototype.addEvents = function () {
        this.removeEvents();
        this.btn_close.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClose, this);
    };
    depotPanel.prototype.removeEvents = function () {
        this.btn_close.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onClose, this);
    };
    depotPanel.prototype.onClose = function () {
        this.dispose();
    };
    /**
     * 添加一个item对象到仓库中
     * 参数说明：
     *      itm：    添加到仓库中的item对象
     *      x:      itm对象的横坐标
     *      y:      itm对象的纵坐标
     * ------------------------------------------------------------------------*/
    depotPanel.prototype.addItem = function (itm, x, y) {
        itm.x = x;
        itm.y = y;
        this.content.addChild(itm);
    };
    /**
     * 设置选项卡选中状态，没选中的为黄色图片，选中为蓝色图片，并重新添加该选项下仓库中的物品
     * 参数说明：
     *      num：选中的tab值，值范围从左往右为0~3
     * ------------------------------------------------------------------------*/
    depotPanel.prototype.setTab = function (num) {
        for (var i = 0; i < 4; i++) {
            this.tab[i].texture = RES.getRes("tab_" + i + "_0_png");
        }
        this.tab[num].texture = RES.getRes("tab_" + num + "_1_png");
        this.content.removeChildren();
        var item_num = 0;
        for (var i = 0; i < MainPanel.Dvo.length; i++) {
            var v = MainPanel.Dvo[i];
            var k = new depotItem();
            var x = (item_num % 3) * 310;
            var y = Math.floor(item_num / 3) * 116;
            k.setDate(v);
            if (v.type == num || num == 0) {
                this.addItem(k, x, y);
                item_num++;
            }
        }
        //test  测试数据
        this.test();
    };
    /**
     * 选项卡触摸事件，更改点中选项卡后选项卡背景，重新添加该选项下仓库中的物品
     * ------------------------------------------------------------------------*/
    depotPanel.prototype.onTouchTab = function (e) {
        var id = this.tab.indexOf(e.target);
        this.setTab(id);
    };
    depotPanel.prototype.dispose = function () {
        this.removeEvents();
        if (this.parent) {
            this.parent.removeChild(this);
        }
    };
    return depotPanel;
}(eui.Component));
__reflect(depotPanel.prototype, "depotPanel");
//# sourceMappingURL=depotPanel.js.map