class CarModule extends BaseModule {
	public constructor() {
		super();
	}

	private static _instance:CarModule;
	public static get instance():CarModule{
		if(CarModule._instance==undefined){
			CarModule._instance = new CarModule();
		}
		return CarModule._instance;
	}

	private moduleWindow:carPanel;//////////////////修改类名

	private GROUP_NAME:string = "shopPanel";//////////////////修改模块名

	private tabIndex:number = 0;

	public show(params?:any){
		this.tabIndex = params;
		if(!this.moduleWindow){
			super.startLoadModuleRES(this.GROUP_NAME);
        }else{
			this.setIspop(true);//已经加载过的，直接显示出来
		}
        
	}

	public setIspop(param1:boolean){
		super.setIspop(param1);
		if(param1){
			this.addEvents();
			if(!this.parentLayer){
				this.parentLayer = LayerManager.instance.windowLayer;
			}
			
			this.parentLayer.addChild(this.moduleWindow);
			
		}else{
			if(this.moduleWindow && this.moduleWindow.parent){
				this.moduleWindow.parent.removeChild(this.moduleWindow);
			}
		}
	}

	public loadGroupRESOver(){
		this.moduleWindow = new carPanel();//////////////////修改类名
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