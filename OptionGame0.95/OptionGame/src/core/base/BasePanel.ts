class BasePanel extends eui.Component{
	public constructor() {
		super();
		Loading.instance.show();
	}

	private _groupName:string;
	public loadGroup(groupName:string, themeConfigPath?:string){
		this._groupName = groupName;

		if(!themeConfigPath){
			let theme = new eui.Theme(themeConfigPath, this.stage);
        	theme.addEventListener(eui.UIEvent.COMPLETE, this.onThemeLoadComplete, this);
		}
        RES.addEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onResourceLoadComplete, this);
        RES.addEventListener(RES.ResourceEvent.GROUP_LOAD_ERROR, this.onResourceLoadError, this);
        RES.addEventListener(RES.ResourceEvent.GROUP_PROGRESS, this.onResourceProgress, this);
        RES.addEventListener(RES.ResourceEvent.ITEM_LOAD_ERROR, this.onItemLoadError, this);
        RES.loadGroup(groupName);
	}
	private isThemeLoadEnd: boolean = false;
    
    private onThemeLoadComplete(): void {
        this.isThemeLoadEnd = true;
        // this.createScene();

		this.loadeOver();
    }
    private isResourceLoadEnd: boolean = false;
    
    private onResourceLoadComplete(event:RES.ResourceEvent):void {
        if (event.groupName == this._groupName) {
            RES.removeEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onResourceLoadComplete, this);
            RES.removeEventListener(RES.ResourceEvent.GROUP_LOAD_ERROR, this.onResourceLoadError, this);
            RES.removeEventListener(RES.ResourceEvent.GROUP_PROGRESS, this.onResourceProgress, this);
            RES.removeEventListener(RES.ResourceEvent.ITEM_LOAD_ERROR, this.onItemLoadError, this);
            this.isResourceLoadEnd = true;
            // this.createScene();
			this.loadeOver();
        }
    }

	private loadeOver(){
		if(this.isThemeLoadEnd && this.isResourceLoadEnd){
            Loading.instance.hide();
            this.onloadeOver();
        }
	}

	private onloadeOver(){
		Loading.instance.hide();
		this.show();
	}
	/**
     * 居中显示
     * */
    public setCenter() {
        this.x = (LayerManager.instance.stageWidth >> 1) - (this.width >> 1);
        this.y = (LayerManager.instance.stageHeight >> 1) - (this.height >> 1);
    }

    public show() {
		
    }

	/**
     * 资源组加载出错
     *  The resource group loading failed
     */
    private onItemLoadError(event:RES.ResourceEvent):void {
        console.warn("Url:" + event.resItem.url + " has failed to load");
    }
    /**
     * 资源组加载出错
     */
    private onResourceLoadError(event:RES.ResourceEvent):void {
        console.warn("Group:" + event.groupName + " has failed to load");
        //忽略加载失败的项目
        this.onResourceLoadComplete(event);
    }
    /**
     * preload资源组加载进度
     */
    private onResourceProgress(event:RES.ResourceEvent):void {
        if (event.groupName == "preload") {
            Loading.instance.setProgress(event.itemsLoaded, event.itemsTotal);
        }
    }


}