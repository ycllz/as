class DepotModule extends BaseModule {
	public constructor() {
		super();
	}

	private static _instance:DepotModule;
	public static get instance():DepotModule{
		if(DepotModule._instance==undefined){
			DepotModule._instance = new DepotModule();
		}
		return DepotModule._instance;
	}

	private moduleWindow:depotPanel;//////////////////修改类名

	private GROUP_NAME:string = "depotPanel";//////////////////修改模块名

	private proPanel:profitablePanel;//盈利结算页面

	private depotDetailPanel:DepotDetailPanel;

	private _index:number;//// 0:depotPanel , 1:profitablePanel, 2:DepotDetailPanel
	/**
	 * 0:depotPanel , 1:profitablePanel, 2:DepotDetailPanel
	*/
	public show(params:any=0){
		this._index = params;
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
			if(this._index==0){
				this.moduleWindow.addEvents();
				this.parentLayer.addChild(this.moduleWindow);
				this.moduleWindow.setTab(0);
			}else if(this._index==1){
				this.openProFitablePanel();
			}else if(this._index==2){
				this.openDepotDetailPanel( DepotConfig.instance.vo );
			}
			
			
		}else{
			if(this.moduleWindow && this.moduleWindow.parent){
				this.moduleWindow.parent.removeChild(this.moduleWindow);
			}
			LayerManager.instance.windowLayer.hideMask();
		}
	}

	protected loadGroupRESOver(){
		this.moduleWindow = new depotPanel();//////////////////修改类名
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

	private openProFitablePanel(){
		if(!this.proPanel){
			this.proPanel = new profitablePanel();
		}
		this.parentLayer.addChild(this.proPanel);
        this.proPanel.setType(Math.ceil(Math.random()*10)%3);
        this.proPanel.initMovie.play(0);
	}

	private openDepotDetailPanel(vo:depotItemVo){
		if(!vo)return;
		if(!this.depotDetailPanel){
			this.depotDetailPanel = new DepotDetailPanel();
		}
		this.depotDetailPanel.setDate(vo);
		this.parentLayer.addChild(this.depotDetailPanel);
	}

	private clearModulePanel(){
		if(this.moduleWindow){
			this.moduleWindow.dispose();
		}
		if(this.depotDetailPanel){
			this.depotDetailPanel.dispose();
		}
		if(this.proPanel){
			this.proPanel.dispose();
		}
	}


}