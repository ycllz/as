class CommerceModule extends BaseModule {
	public constructor() {
		super();
	}

	private static _instance:CommerceModule;
	public static get instance():CommerceModule{
		if(CommerceModule._instance==undefined){
			CommerceModule._instance = new CommerceModule();
		}
		return CommerceModule._instance;
	}

	private moduleWindow:commercePanel;//////////////////修改类名

	private GROUP_NAME:string = "commercePanel";//////////////////修改模块名

	private tabIndex:number = 0;

	private applyPanel:applyPanel;              //申请创建商会界面
    private resultPanel:comResultPanel;          //提示界面
    private commercePanel:commercePanel;          //商会界面
//openResultPanel
	/**
	 * 0:commercePanel , 1:comResultPanel
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
			// this.parentLayer.addChild(this.moduleWindow);
			if(this.tabIndex==0){
				if(Data.COMMERID == 0){
					if(!this.applyPanel){
						this.applyPanel = new applyPanel();
					}
					this.clearModule();
					this.parentLayer.addChild(this.applyPanel);
				}else{
					this.commercePanel.addAllItem();
					this.clearModule();
					this.parentLayer.addChild(this.commercePanel);
				}
			}else if(this.tabIndex==1){
				this.openResultPanel();
			}
			
			
		}else{
			if(this.moduleWindow && this.moduleWindow.parent){
				this.moduleWindow.parent.removeChild(this.moduleWindow);
			}
			LayerManager.instance.windowLayer.hideMask();
		}
	}

	protected loadGroupRESOver(){
		this.moduleWindow = new commercePanel();//////////////////修改类名
		this.commercePanel = this.moduleWindow;
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

	private openResultPanel(){
		if(!this.resultPanel){
			this.resultPanel = new comResultPanel();
		}
		if(!this.parentLayer){
			this.parentLayer = LayerManager.instance.windowLayer;
		}
		this.clearModule();

		this.parentLayer.addChild(this.resultPanel);
	}

	private clearModule(){
		if(this.applyPanel && this.applyPanel.parent){
			this.applyPanel.parent.removeChild(this.applyPanel);
		}
		if(this.commercePanel && this.commercePanel.parent){
			this.commercePanel.parent.removeChild(this.commercePanel);
		}
		if(this.resultPanel && this.resultPanel.parent){
			this.resultPanel.parent.removeChild(this.resultPanel);
		}
	}



}