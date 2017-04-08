var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/**
 * 游戏开始界面
 */
var MainPanel = (function (_super) {
    __extends(MainPanel, _super);
    function MainPanel() {
        var _this = _super.call(this) || this;
        // public static iCont:depotItemCont = null;          //仓库详细界面
        // public static eCont:EmailDetailPanel = null;          //
        _this.itm = [];
        _this.addEventListener(egret.Event.ADDED_TO_STAGE, _this.onAdd, _this);
        _this.skinName = skins.mainGamePanelSkin;
        _this.init();
        return _this;
    }
    MainPanel.prototype.onAdd = function () {
        this.removeEventListener(egret.Event.ADDED_TO_STAGE, this.onAdd, this);
    };
    //界面切换时会调用的函数
    MainPanel.prototype.start = function () {
        this.width = Common.stageH;
        this.height = Common.stageW;
        console.log("这里修改了界面大小，拉伸铺满画布--->");
        this.end();
        this.btn_1.touchEnabled = true;
        this.btn_2.touchEnabled = true;
        this.btn_3.touchEnabled = true;
        this.btn_4.touchEnabled = true;
        this.btn_5.touchEnabled = true;
        this.btnGoldTrade.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onGold, this);
        this.btnDiamonTrade.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onDiamon, this);
        this.lv.touchEnabled = true;
        this.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTap, this);
        this.onGold();
        this.mainLayer.visible = true;
    };
    MainPanel.prototype.log = function (params) {
        console.log(params);
    };
    MainPanel.prototype.onTap = function (event) {
        var obj = event.target;
        switch (obj) {
            case this.btn_1:
                CommerceModule.instance.show();
                break;
            case this.btn_2:
                EmailModule.instance.show();
                break;
            case this.btn_3:
                CarRentalModule.instance.show();
                break;
            case this.btn_4:
                TradeLogModule.instance.show();
                break;
            case this.btn_5:
                DepotModule.instance.show();
                break;
            case this.btnStartTrade:
                TradeModule.instance.show();
                break;
            case this.btnShop:
                ShopModule.instance.show(0);
                break;
            case this.btnGoldTrade:
                console.log("btnGoldTrade");
                break;
            case this.btnDiamonTrade:
                console.log("btnDiamonTrade");
                break;
            case this.lv:
                RoleInfoModule.instance.show();
                break;
            case this.head:
                RoleInfoModule.instance.show();
                break;
        }
    };
    //初始化
    MainPanel.prototype.init = function () {
        /**
         * 测试用代码
         */
        //初始化贸易数据
        for (var i = 0; i < Data.Ttrade.length; i++) {
            var v = new tradeItemVo();
            v.trade = Data.Ttrade[i];
            v.type = Data.Ttype[i];
            v.tradeId = Data.TtradeId[i];
            v.tradeTime = Data.TtradeTime[i];
            v.num = Data.Tnum[i];
            v.currency = Data.Tcurrency[i];
            v.margin = Data.Tmargin[i];
            v.buyPrice = Data.TbuyPrice[i];
            v.salePrice = Data.TsalePrice[i];
            v.payPrice = Data.TpayPrice[i];
            v.tip = Data.Ttip[i];
            MainPanel.Tvo.push(v);
        }
        //初始化钻石明细数据
        for (var i = 0; i < Data.TDtrade.length; i++) {
            var v = new diamondItemVo();
            v.trade = Data.TDtrade[i];
            v.type = Data.TDtype[i];
            v.tradeId = Data.TDtradeId[i];
            v.tradeTime = Data.TDtradeTime[i];
            v.price = Data.TDprice[i];
            MainPanel.TDvo.push(v);
        }
        //初始化商店数据
        for (var i = 0; i < Data.ShopTrade.length; i++) {
            var v = new storeItemVo();
            v.trade = Data.ShopTrade[i];
            v.price = Data.ShopPrice[i];
            MainPanel.Storevo.push(v);
        }
        //初始化钻石明细数据
        for (var i = 0; i < Data.Comtrade.length; i++) {
            var v = new commerceItemVo();
            v.trade = Data.Comtrade[i];
            v.vipIcoNum = Data.ComvipIcoNum[i];
            v.peopleName = Data.CompeopleName[i];
            v.peopleNum = Data.CompeopleNum[i];
            v.bonusPersent = Data.CombonusPersent[i];
            v.tradeNum = Data.ComtradeNum[i];
            v.time = Data.Comtime[i];
            MainPanel.Comvo.push(v);
        }
        //初始化钻石明细数据
        for (var i = 0; i < Data.EmailId.length; i++) {
            var v = new EmailVo();
            v.EId = Data.EmailId[i];
            v.ETitle = Data.EmailTitle[i];
            v.ETime = Data.EmailTime[i];
            v.ECont = Data.EmailCont[i];
            v.ERead = Data.EmailRead[i];
            v.EAward = Data.EmailAward[i];
            v.EAwardNum = Data.EmailAwardNum[i];
            v.EAwardType = Data.EmailAwardType[i];
            MainPanel.Evo.push(v);
        }
        //----------------------------------------------------------------------------------------------
    };
    MainPanel.prototype.onGold = function () {
        this.btnDiamonTrade.selected = false;
        this.btnGoldTrade.selected = true;
        // console.log("on onGold");
    };
    MainPanel.prototype.onDiamon = function () {
        this.btnGoldTrade.selected = false;
        this.btnDiamonTrade.selected = true;
        // console.log("on onDiamon");
    };
    //结束界面，释放监听
    MainPanel.prototype.end = function () {
        // this.btn_3.touchEnabled = false;
        // if(this.btn_3.hasEventListener(egret.TouchEvent.TOUCH_TAP))
        //     this.btn_3.removeEventListener(egret.TouchEvent.TOUCH_TAP,this.onTouchBtn3,this);
        // this.btn_4.touchEnabled = false;
        // if(this.btn_4.hasEventListener(egret.TouchEvent.TOUCH_TAP))
        //     this.btn_4.removeEventListener(egret.TouchEvent.TOUCH_TAP,this.onTouchBtn4,this);
        // this.btn_5.touchEnabled = false;
        // if(this.btn_5.hasEventListener(egret.TouchEvent.TOUCH_TAP))
        //     this.btn_5.removeEventListener(egret.TouchEvent.TOUCH_TAP,this.onTouchBtn5,this);
    };
    MainPanel.prototype.dispose = function () {
        if (this.parent) {
            this.parent.removeChild(this);
        }
    };
    return MainPanel;
}(eui.Component));
MainPanel.GAME_NAME = "gameMain";
MainPanel.Dvo = [];
MainPanel.Tvo = [];
MainPanel.TDvo = [];
MainPanel.Storevo = [];
MainPanel.Comvo = [];
MainPanel.Evo = [];
__reflect(MainPanel.prototype, "MainPanel");
//# sourceMappingURL=MainPanel.js.map