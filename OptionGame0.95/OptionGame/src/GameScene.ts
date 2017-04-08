class GameScene extends egret.DisplayObjectContainer {

    private static _instance:GameScene;
    public static get instance():GameScene{
    	if(!GameScene._instance){
    		GameScene._instance = new GameScene();
    	}
    	return GameScene._instance;
    }

    //设置舞台焦点

    public constructor() {
        super();
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
    }
    private onAddToStage(event: egret.Event) {
        this.removeEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);

        this.addChild(LayerManager.instance.mapLayer);
        this.addChild(LayerManager.instance.sceneLayer);
        this.addChild(LayerManager.instance.windowLayer);
        this.addChild(LayerManager.instance.topLayer);

        // ProtoFactory.getInstance().Init();
        // PlayerData.instance;

        this.openLogin();

    }
    
    


    private openLogin() {
        //加载登陆界面
        // LayerManager.instance.sceneLayer.addChild(ViewManager.getInstance());
        BeginModule.instance.show();
    }

    //主场景创建
    /**
     * 初次登录输入邀请码的登录，等服务端返回，调用这里进游戏
     * 非初次登录，直接微信，qq登录也是服务端返回，调用这里进游戏
    */
    public startGame() {
        MainModule.instance.show();
    }

    public changeBg( bgResName:string ){
        // window["doResize"](bgResName);
    }

    

}