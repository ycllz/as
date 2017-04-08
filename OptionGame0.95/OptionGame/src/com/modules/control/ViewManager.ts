/**
 *
 * @author 
 * 主要控制三个界面的切换
 */
class ViewManager extends egret.Sprite {
    public constructor() {
        super();
        this.init();
    }

    //定义游戏场景
    private static instance:ViewManager;
    private mainPanel: MainPanel;               // 主界面
    private carRentalPanel:CarRentalPanel;      //租车行界面
    private beginPanel:BeginPanel;              //登陆界面

	/**
	 * 这里初始化
	 */
    private init() {
        
        this.beginPanel = new BeginPanel();

        this.addChild(this.beginPanel);
        this.beginPanel.start();
        this.addEventListener(ChangeSceneEvent.CHANGE_SCENE_EVENT,this.onChangeScene,this);
    }

    public start()
    {
        this.addEventListener(ChangeSceneEvent.CHANGE_SCENE_EVENT,this.onChangeScene,this);
    }
    public static getInstance():ViewManager
    {
        if(ViewManager.instance == null)
        {
            ViewManager.instance = new ViewManager();
        }
        return ViewManager.instance;
    }

    public onChangeScene(e:ChangeSceneEvent)
    {
        e.obj.end();
        this.removeChildren();

        switch (e.eventType)
        {
            case BeginPanel.GAME_NAME:
                this.beginPanel.start();
                this.addChild(this.beginPanel);
                break;
            case MainPanel.GAME_NAME:
                if(this.mainPanel==undefined){
                    this.mainPanel = new MainPanel();
                }
                this.mainPanel.start();
                this.addChild(this.mainPanel);
                break;
            case CarRentalPanel.GAME_NAME:
                if(this.carRentalPanel==undefined){
                    this.carRentalPanel = new CarRentalPanel();
                }
                this.carRentalPanel.addEvents();
                this.addChild(this.carRentalPanel);
                break;
            // case GameStorePanel.GAME_STROE:
            //     this.gameStorePanel.start();
            //     this.addChild(this.gameStorePanel);
            //     break;
            default :
                break;
        }
    }
}
