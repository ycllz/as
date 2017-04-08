var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/**
 * 租车行界面
 */
var CarRentalPanel = (function (_super) {
    __extends(CarRentalPanel, _super);
    /**
     * 构造函数
     * ------------------------------------------------------------------------*/
    function CarRentalPanel() {
        var _this = _super.call(this) || this;
        _this.itm = [];
        _this.skinName = skins.carRentalPanelSkin;
        return _this;
    }
    CarRentalPanel.prototype.createChildren = function () {
        _super.prototype.createChildren.call(this);
        this.init();
        btns.initScaleBtn1(this.btn_back);
        btns.initScaleBtn1(this.btnBuild);
    };
    CarRentalPanel.prototype.addEvents = function () {
        this.btn_back.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchBtnBack, this);
        this.btnBuild.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchBuild, this);
    };
    CarRentalPanel.prototype.removeEvents = function () {
        if (this.btn_back) {
            this.btn_back.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchBtnBack, this);
            this.btnBuild.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchBuild, this);
        }
    };
    /**
     * 初始化
     * ------------------------------------------------------------------------*/
    CarRentalPanel.prototype.init = function () {
        this.btn_back.touchEnabled = true;
        this.btnBuild.touchEnabled = true;
        //添加五个面板  
        this.carPanel = new carPanel();
        this.carPanel.y = -700;
        this.addChild(this.carPanel);
        CarRentalPanel.carContPanel = new carItemCont();
        CarRentalPanel.carContPanel.y = -700;
        this.addChild(CarRentalPanel.carContPanel);
        CarRentalPanel.carBuyPanel = new carBuyPanel();
        CarRentalPanel.carBuyPanel.y = -700;
        this.addChild(CarRentalPanel.carBuyPanel);
        CarRentalPanel.carResultPanel = new carResult();
        CarRentalPanel.carResultPanel.y = -700;
        this.addChild(CarRentalPanel.carResultPanel);
        CarRentalPanel.mobilePanel = new MobilePanel();
        CarRentalPanel.mobilePanel.y = -700;
        this.addChild(CarRentalPanel.mobilePanel);
        /**----------------------------------------------------------------------------------------------
         * 测试用代码
         */
        //----------》我的租车行内item数据模拟
        for (var i = 0; i < Data.Ctrade.length; i++) {
            var v = new carItemVo();
            v.trade = Data.Ctrade[i];
            v.type = Data.Ctype[i];
            v.carTime = Data.CTime[i];
            v.carPrice = Data.CPrice[i];
            v.carResult = Data.CResult[i];
            v.carNum = Data.CNum[i];
            CarRentalPanel.Cvo.push(v);
            var k = new carItem();
            var x = 0;
            var y = i * 95;
            k.setDate(v);
            this.carPanel.addItem(k, x, y);
        }
        //----------------------------------------------------------------------------------------------
    };
    //返回按钮事件处理，返回主要界面
    CarRentalPanel.prototype.onTouchBtnBack = function () {
        // window["doResize"]("mainBg");
        // var changeEvent = new ChangeSceneEvent(ChangeSceneEvent.CHANGE_SCENE_EVENT);
        // changeEvent.eventType = MainPanel.GAME_NAME;
        // changeEvent.obj = this;
        // ViewManager.getInstance().dispatchEvent(changeEvent);
        GameScene.instance.startGame();
    };
    //租车行建筑点击，弹出我的租车行面板
    CarRentalPanel.prototype.onTouchBuild = function () {
        btns.inScalePanel(this.carPanel, 0, 0);
    };
    /**
     * 结束界面，释放监听
     * ------------------------------------------------------------------------*/
    CarRentalPanel.prototype.dispose = function () {
        this.removeEvents();
        if (this.parent) {
            this.parent.removeChild(this);
        }
    };
    return CarRentalPanel;
}(eui.Component));
CarRentalPanel.GAME_NAME = "gameCarPental";
CarRentalPanel.Cvo = [];
__reflect(CarRentalPanel.prototype, "CarRentalPanel");
//# sourceMappingURL=CarRentalPanel.js.map