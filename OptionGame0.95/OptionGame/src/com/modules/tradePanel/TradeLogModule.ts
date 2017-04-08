class TradeLogModule extends BaseModule {
	public constructor() {
		super();
	}

	private static _instance:TradeLogModule;
	public static get instance():TradeLogModule{
		if(TradeLogModule._instance==undefined){
			TradeLogModule._instance = new TradeLogModule();
		}
		return TradeLogModule._instance;
	}

	private moduleWindow:tradeLogPanel;//////////////////修改类名

	private GROUP_NAME:string = "tradePanel";//////////////////修改模块名

	private tabIndex:number = 0;

	public show(params:any=0){
		this.tabIndex = params;
		if(!this.moduleWindow){
			super.startLoadModuleRES(this.GROUP_NAME);
        }else{
			this.setIspop(true);//已经加载过的，直接显示出来
		}
        
	}

	protected setIspop(param1:boolean){
		super.setIspop(param1);
		if(param1){
			this.addEvents();
			if(!this.parentLayer){
				this.parentLayer = LayerManager.instance.windowLayer;
			}
			LayerManager.instance.windowLayer.showMask();
			this.parentLayer.addChild(this.moduleWindow);
			this.moduleWindow.setTab(0);
			this.moduleWindow.addEvents();
			
		}else{
			if(this.moduleWindow && this.moduleWindow.parent){
				this.moduleWindow.parent.removeChild(this.moduleWindow);
			}
			LayerManager.instance.windowLayer.hideMask();
		}
	}

	protected loadGroupRESOver(){
		this.moduleWindow = new tradeLogPanel();//////////////////修改类名
		this.setIspop(true);//加载完成，显示出来
	}

	public dispose():void{
		this.removeEvents();
		if(this.moduleWindow){
			this.moduleWindow.dispose();
		}
		super.dispose();
	}

	//只监听不同模块之间交互事件，网络事件
	private addEvents(){

	}
	private removeEvents(){

	}


}