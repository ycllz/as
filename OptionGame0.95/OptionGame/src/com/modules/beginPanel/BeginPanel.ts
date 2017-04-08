/**
 * 登录界面
 */
class BeginPanel extends eui.Component{ 
    public static GAME_NAME: string = "gameBegin";

    private loadingPanel:loadPanel;
    private inPanel:informationPanel;

    private btn_qq:eui.Image;
    private btn_weixin:eui.Image;

    //计时器
    private timer: egret.Timer;     //计时器,模拟用

    /**
     * 构造函数
     * ------------------------------------------------------------------------*/
    public constructor() {
        super();
        // this.skinName = skins.beginPanelSkin;
        this.skinName = skins.beginPanelSkin;
        // this.init();
    }

     /**
     * 界面切换时会调用的函数
     * ------------------------------------------------------------------------*/
    public start() {
        this.width = Common.stageH;
        this.height = Common.stageW;
        console.log("这里修改了界面大小，拉伸铺满画布--->");

        this.btn_qq.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onTouchQQ,this);
        this.btn_weixin.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onTouchWeiXin,this);
        this.init();
    }

    /**
     * 初始化
     * ------------------------------------------------------------------------*/
    private init() {      
        if(!this.loadingPanel){
            this.loadingPanel = new loadPanel();
        }
        this.loadingPanel.y = -700;
        this.addChild(this.loadingPanel);

        if(!this.inPanel){
            this.inPanel = new informationPanel();
        }
        this.inPanel.y = -700;
        this.addChild(this.inPanel);
        this.inPanel.btn.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onTouchBtn,this);
    }

    private onTouchQQ(){
        // console.log("qq in ...");
        // this.loadingPanel.y = 0;
        this.inPanel.y = 0;
    }

    private onTouchWeiXin(){
        // console.log("weixin in ...");
        // this.loadingPanel.y = 0;
        this.inPanel.y = 0;
    }

     private onTouchBtn(){
        this.loadingPanel.y = 0;
        this.inPanel.y = -700;

        this.btn_qq.visible = false;
        this.btn_weixin.visible = false;

        GameScene.instance.startGame();

        //计算主角状态计时器
        // this.timer = new egret.Timer(20,78);
        // this.timer.addEventListener(egret.TimerEvent.TIMER,this.timerFunc,this);
        // this.timer.start();
    }

    //主角状态定时器
    private timerFunc():void{
        if(this.loadingPanel.gro.width < 770){
            this.loadingPanel.gro.width += 10;
            this.loadingPanel.present.text = Math.floor(this.loadingPanel.gro.width*100/780)+"%";
        }else{
            window["doResize"]("mainBg");
            this.loadingPanel.present.text = "100%";
            var changeEvent = new ChangeSceneEvent(ChangeSceneEvent.CHANGE_SCENE_EVENT);
            changeEvent.eventType = MainPanel.GAME_NAME;
            changeEvent.obj = this;
            ViewManager.getInstance().dispatchEvent(changeEvent);
        }
    }

    private barWidth:number = 770;
    public setProgress( itemLoaded:number, itemTotal:number ){
        var persent:number = (itemLoaded / itemTotal);
        var len:number = persent * this.barWidth;
        this.loadingPanel.gro.width = len;
        this.loadingPanel.present.text = Math.floor(persent*100)+"%";
        // console.log("persent, len : ", persent, " , ", len);
    }

    /**
     * 结束界面，释放监听
     * ------------------------------------------------------------------------*/
    public dispose() {
        if(this.parent){
            this.parent.removeChild(this);
        }
        if(this.loadingPanel){
            this.loadingPanel.dispose();
        }
        if(this.inPanel){
            this.inPanel.dispose();
        }
    }
}