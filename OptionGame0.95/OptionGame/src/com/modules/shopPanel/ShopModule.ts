class ShopModule extends BaseModule {
	
	public constructor() {
		super();
	}

	private static _instance:ShopModule;
	public static get instance():ShopModule{
		if(ShopModule._instance==undefined){
			ShopModule._instance = new ShopModule();
		}
		return ShopModule._instance;
	}

	private moduleWindow:shopPanel;//////////////////修改类名

	private GROUP_NAME:string = "shopPanel";//////////////////修改模块名

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
			this.moduleWindow.setTab(this.tabIndex);
			
		}else{
			if(this.moduleWindow && this.moduleWindow.parent){
				this.moduleWindow.parent.removeChild(this.moduleWindow);
			}
			LayerManager.instance.windowLayer.hideMask();
		}
	}

	protected loadGroupRESOver(){
		this.moduleWindow = new shopPanel();//////////////////修改类名
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