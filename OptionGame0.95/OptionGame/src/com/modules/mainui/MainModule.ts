class MainModule extends BaseModule {
	public constructor() {
		super();
	}

	private static _instance:MainModule;
	public static get instance():MainModule{
		if(MainModule._instance==undefined){
			MainModule._instance = new MainModule();
		}
		return MainModule._instance;
	}

	private moduleWindow:MainPanel;//////////////////修改类名

	private GROUP_NAME:string = "mainPanel";//////////////////修改模块名


	public show(params?:any){
		if(!this.moduleWindow){
			super.startLoadModuleRES(this.GROUP_NAME, this.onResProgress);
        }else{
			this.setIspop(true);//已经加载过的，直接显示出来
		}
        
	}

	private onResProgress( params:any ){
		BeginModule.instance.setProgress(params[0], params[1]);
	}

	protected setIspop(param1:boolean){
		super.setIspop(param1);
		if(param1){
			BeginModule.instance.dispose();
			CarRentalModule.instance.dispose();
			GameScene.instance.changeBg("mainBg");

			this.addEvents();
			if(!this.parentLayer){
				this.parentLayer = LayerManager.instance.windowLayer;
			}
			this.parentLayer.addChild(this.moduleWindow);
			this.moduleWindow.start();
			
		}else{
			if(this.moduleWindow && this.moduleWindow.parent){
				this.moduleWindow.parent.removeChild(this.moduleWindow);
			}
		}
	}

	protected loadGroupRESOver(){
		this.moduleWindow = new MainPanel();//////////////////修改类名
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