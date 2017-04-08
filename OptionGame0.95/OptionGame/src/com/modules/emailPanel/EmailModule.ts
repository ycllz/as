class EmailModule extends BaseModule {
	public constructor() {
		super();
	}

	private static _instance:EmailModule;
	public static get instance():EmailModule{
		if(EmailModule._instance==undefined){
			EmailModule._instance = new EmailModule();
		}
		return EmailModule._instance;
	}

	private moduleWindow:emailPanel;//////////////////修改类名

	private detailPanel:EmailDetailPanel;

	private GROUP_NAME:string = "emailPanel";//////////////////修改模块名

	private tabIndex:number = 0;// 0:emailPanel , 1:EmailDetailPanel

	/**
	 * 0:emailPanel , 1:EmailDetailPanel
	*/
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
			if(this.tabIndex==0){
				this.parentLayer.addChild(this.moduleWindow);
				this.moduleWindow.addEvents();
				this.moduleWindow.setTab();
			}else if(this.tabIndex==1){
				this.openEmailDetailPanel();
			}
			
		}else{
			this.dispose();
			if(this.moduleWindow && this.moduleWindow.parent){
				this.moduleWindow.parent.removeChild(this.moduleWindow);
			}
			LayerManager.instance.windowLayer.hideMask();
		}
	}

	protected loadGroupRESOver(){
		this.moduleWindow = new emailPanel();//////////////////修改类名
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

	private openEmailDetailPanel(){
		this.detailPanel = new EmailDetailPanel();
        this.parentLayer.addChild(this.detailPanel);
	}


}