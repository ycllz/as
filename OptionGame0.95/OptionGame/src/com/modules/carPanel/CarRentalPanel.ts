/**
 * 租车行界面
 */
class CarRentalPanel extends eui.Component{ 
    public static GAME_NAME: string = "gameCarPental";

    private carPanel:carPanel;                  //租车行界面
    public static carContPanel:carItemCont;     //车辆详细信息面板
    public static carBuyPanel:carBuyPanel;      //车辆购买面板
    public static carResultPanel:carResult;     //购买后提示面板

    public static mobilePanel:MobilePanel;      //手机验证界面

    private btn_back:eui.Image;
    private btnBuild:eui.Image;

    public static Cvo:Array<carItemVo> = [];
    private itm:Array<carItem> = [];
    
    /**
     * 构造函数
     * ------------------------------------------------------------------------*/
    public constructor() {
        super();
        this.skinName = skins.carRentalPanelSkin;
    }

    public createChildren(){
        super.createChildren();
        this.init();

        btns.initScaleBtn1(this.btn_back);
        btns.initScaleBtn1(this.btnBuild);
    }

    public addEvents(){
        this.btn_back.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onTouchBtnBack,this);
        this.btnBuild.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onTouchBuild,this);
    }
    
    public removeEvents(){
        if(this.btn_back){
            this.btn_back.removeEventListener(egret.TouchEvent.TOUCH_TAP,this.onTouchBtnBack,this);
            this.btnBuild.removeEventListener(egret.TouchEvent.TOUCH_TAP,this.onTouchBuild,this);
        }
        
    }

    /**
     * 初始化
     * ------------------------------------------------------------------------*/
    private init() {
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
        for(let i = 0;i<Data.Ctrade.length;i++){
            let v = new carItemVo();
            v.trade = Data.Ctrade[i];
            v.type = Data.Ctype[i];
            v.carTime = Data.CTime[i];
            v.carPrice = Data.CPrice[i];
            v.carResult = Data.CResult[i];
            v.carNum = Data.CNum[i];

            CarRentalPanel.Cvo.push(v);

            let k = new carItem();
            let x = 0;
            let y = i*95;
            k.setDate(v);
            this.carPanel.addItem(k,x,y);
        }
        //----------------------------------------------------------------------------------------------
    }

    //返回按钮事件处理，返回主要界面
    private onTouchBtnBack(){
        // window["doResize"]("mainBg");
        // var changeEvent = new ChangeSceneEvent(ChangeSceneEvent.CHANGE_SCENE_EVENT);
        // changeEvent.eventType = MainPanel.GAME_NAME;
        // changeEvent.obj = this;
        // ViewManager.getInstance().dispatchEvent(changeEvent);
        GameScene.instance.startGame();
    }

    //租车行建筑点击，弹出我的租车行面板
    private onTouchBuild(){
        btns.inScalePanel(this.carPanel,0,0);    
    }

    /**
     * 结束界面，释放监听
     * ------------------------------------------------------------------------*/
    public dispose() {
        this.removeEvents();

        if(this.parent){
            this.parent.removeChild(this);
        }
    }
}