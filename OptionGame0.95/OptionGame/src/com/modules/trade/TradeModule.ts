class TradeModule extends BaseModule {
	public constructor() {
		super();
	}

	private static _instance:TradeModule;
	public static get instance():TradeModule{
		if(TradeModule._instance==undefined){
			TradeModule._instance = new TradeModule();
		}
		return TradeModule._instance;
	}

	private moduleWindow:Trade;//////////////////修改类名

	private GROUP_NAME:string = "trade";//////////////////修改模块名


	public show(params:any=0){
		if(!this.moduleWindow){
			super.startLoadModuleRES(this.GROUP_NAME);
        }else{
			this.setIspop(true);//已经加载过的，直接显示出来
		}
        
	}

	protected setIspop(param1:boolean){
		super.setIspop(param1);
		if(param1){
			MainModule.instance.dispose();
			// GameScene.instance.changeBg("carBg");

			this.addEvents();
			if(!this.parentLayer){
				this.parentLayer = LayerManager.instance.windowLayer;
			}
			this.moduleWindow.show();
			this.parentLayer.addChild(this.moduleWindow);
			
		}else{
			if(this.moduleWindow && this.moduleWindow.parent){
				this.moduleWindow.parent.removeChild(this.moduleWindow);
			}
		}
	}

	protected loadGroupRESOver(){
		this.moduleWindow = new Trade();//////////////////修改类名
		this.setIspop(true);//加载完成，显示出来
	}

	public dispose():void{
		this.removeEvents();
		if(this.moduleWindow){
			this.moduleWindow.dispose();
		}
		super.dispose();
	}

	private addEvents(){

	}
	private removeEvents(){

	}

}