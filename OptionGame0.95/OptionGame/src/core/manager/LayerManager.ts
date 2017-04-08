

class LayerManager{

    private static _instance:LayerManager = undefined;
    public static get instance(): LayerManager {
        if(undefined == this._instance) {
            this._instance = new LayerManager();
        }
        return this._instance;
    }

	public stageWidth:number=1136;
	public stageHeight:number=640;
    public mapLayer:eui.Component;//地图层，拉伸缩放底图
    public sceneLayer:eui.Component;//场景
    public windowLayer:WindowLayer;//panel 二次弹出框
    public topLayer:eui.Component;//

    public constructor(){
        
    }

    public initLayer(){
        if(LayerManager.instance.sceneLayer==undefined){
            LayerManager.instance.mapLayer = new eui.Component();
            LayerManager.instance.sceneLayer = new eui.Component();
            LayerManager.instance.windowLayer = new WindowLayer();
            LayerManager.instance.topLayer = new eui.Component();
        }
       
    }



}