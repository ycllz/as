
class RoleInfoModule extends BaseModule {
	
	private static _instance:RoleInfoModule;
	public static get instance():RoleInfoModule{
		if(RoleInfoModule._instance==undefined){
			RoleInfoModule._instance = new RoleInfoModule();
		}
		return RoleInfoModule._instance;
	}
	public constructor() {
		super();
	}

	private moduleWindow:RoleInfo;

	private GROUP_NAME:string = "roleInfo";

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

	protected loadGroupRESOver(){
		this.moduleWindow = new RoleInfo();
		this.setIspop(true);//加载完成，显示出来
	}

	public dispose():void{
		this.removeEvents();
		super.dispose();
		if(this.moduleWindow){
			this.moduleWindow.dispose();
		}
	}

	private addEvents(){

	}
	private removeEvents(){

	}

}