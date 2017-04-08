var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/**
 * 登录界面
 */
var BeginPanel = (function (_super) {
    __extends(BeginPanel, _super);
    /**
     * 构造函数
     * ------------------------------------------------------------------------*/
    function BeginPanel() {
        var _this = _super.call(this) || this;
        _this.barWidth = 770;
        // this.skinName = skins.beginPanelSkin;
        _this.skinName = skins.beginPanelSkin;
        return _this;
        // this.init();
    }
    /**
    * 界面切换时会调用的函数
    * ------------------------------------------------------------------------*/
    BeginPanel.prototype.start = function () {
        this.width = Common.stageH;
        this.height = Common.stageW;
        console.log("这里修改了界面大小，拉伸铺满画布--->");
        this.btn_qq.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchQQ, this);
        this.btn_weixin.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchWeiXin, this);
        this.init();
    };
    /**
     * 初始化
     * ------------------------------------------------------------------------*/
    BeginPanel.prototype.init = function () {
        if (!this.loadingPanel) {
            this.loadingPanel = new loadPanel();
        }
        this.loadingPanel.y = -700;
        this.addChild(this.loadingPanel);
        if (!this.inPanel) {
            this.inPanel = new informationPanel();
        }
        this.inPanel.y = -700;
        this.addChild(this.inPanel);
        this.inPanel.btn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchBtn, this);
    };
    BeginPanel.prototype.onTouchQQ = function () {
        // console.log("qq in ...");
        // this.loadingPanel.y = 0;
        this.inPanel.y = 0;
    };
    BeginPanel.prototype.onTouchWeiXin = function () {
        // console.log("weixin in ...");
        // this.loadingPanel.y = 0;
        this.inPanel.y = 0;
    };
    BeginPanel.prototype.onTouchBtn = function () {
        this.loadingPanel.y = 0;
        this.inPanel.y = -700;
        this.btn_qq.visible = false;
        this.btn_weixin.visible = false;
        GameScene.instance.startGame();
        //计算主角状态计时器
        // this.timer = new egret.Timer(20,78);
        // this.timer.addEventListener(egret.TimerEvent.TIMER,this.timerFunc,this);
        // this.timer.start();
    };
    //主角状态定时器
    BeginPanel.prototype.timerFunc = function () {
        if (this.loadingPanel.gro.width < 770) {
            this.loadingPanel.gro.width += 10;
            this.loadingPanel.present.text = Math.floor(this.loadingPanel.gro.width * 100 / 780) + "%";
        }
        else {
            window["doResize"]("mainBg");
            this.loadingPanel.present.text = "100%";
            var changeEvent = new ChangeSceneEvent(ChangeSceneEvent.CHANGE_SCENE_EVENT);
            changeEvent.eventType = MainPanel.GAME_NAME;
            changeEvent.obj = this;
            ViewManager.getInstance().dispatchEvent(changeEvent);
        }
    };
    BeginPanel.prototype.setProgress = function (itemLoaded, itemTotal) {
        var persent = (itemLoaded / itemTotal);
        var len = persent * this.barWidth;
        this.loadingPanel.gro.width = len;
        this.loadingPanel.present.text = Math.floor(persent * 100) + "%";
        // console.log("persent, len : ", persent, " , ", len);
    };
    /**
     * 结束界面，释放监听
     * ------------------------------------------------------------------------*/
    BeginPanel.prototype.dispose = function () {
        if (this.parent) {
            this.parent.removeChild(this);
        }
        if (this.loadingPanel) {
            this.loadingPanel.dispose();
        }
        if (this.inPanel) {
            this.inPanel.dispose();
        }
    };
    return BeginPanel;
}(eui.Component));
BeginPanel.GAME_NAME = "gameBegin";
__reflect(BeginPanel.prototype, "BeginPanel");
//# sourceMappingURL=BeginPanel.js.map