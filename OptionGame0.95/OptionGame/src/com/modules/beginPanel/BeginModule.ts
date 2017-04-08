
class BeginModule extends BaseModule {
	public constructor() {
		super();
	}

	private static _instance:BeginModule;
	public static get instance():BeginModule{
		if(BeginModule._instance==undefined){
			BeginModule._instance = new BeginModule();
		}
		return BeginModule._instance;
	}

	private moduleWindow:BeginPanel;//////////////////修改类名

	private GROUP_NAME:string = "beginPanel";//////////////////修改模块名

	public setProgress( itemLoaded:number, itemTotal:number ){
		this.moduleWindow.setProgress(itemLoaded, itemTotal);
	}

	/** 
	 * 如果一个模块有不同的tab，可以传参打开不同的tab
	*/
	public show(params?:any){
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
			this.moduleWindow.start();
			
		}else{
			if(this.moduleWindow && this.moduleWindow.parent){
				this.moduleWindow.parent.removeChild(this.moduleWindow);
			}
			LayerManager.instance.windowLayer.hideMask();
		}
	}

	protected loadGroupRESOver(){
		this.moduleWindow = new BeginPanel();//////////////////修改类名
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
		this.connect.addHttpListener( "command2", this.onrecieve, this);
		HttpConnect.instance.sendPostRequest("http://localhost/post_test.php", "p1=postP1command&p2=postP2");
	}
	
	private onrecieve( event:egret.Event ){
        console.log("begin 收到数据， rest 数据 -------》 ", event.type, event.data );
        
    }

	private removeEvents(){

	}
}