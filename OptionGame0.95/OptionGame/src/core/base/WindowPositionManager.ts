class WindowPositionManager {

	private static _instance:WindowPositionManager=undefined;
	get instance():WindowPositionManager{
		if(WindowPositionManager._instance==undefined){
			WindowPositionManager._instance = new WindowPositionManager();
		}
		return WindowPositionManager._instance;
	}
	public constructor() {
		LayerManager.instance.windowLayer.addEventListener(egret.Event.ADDED, this.onChangeWindowHandler, this);
	}

	private onChangeWindowHandler():void
	{
		
	}
}