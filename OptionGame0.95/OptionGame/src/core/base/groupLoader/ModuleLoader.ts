
//封装主题与组资源加载
class ModuleLoader extends eui.UILayer{
	public constructor() {
		super();
	}

	private callbackList = new eui.ArrayCollection();
	private contextList = new eui.ArrayCollection();

	private o = [];

	/**
	 * 1. resourceRoot 资源根路径。配置中的所有url都是这个路径的相对值。最终url是这个字符串与配置里资源项的url相加的值。
     * 2. type 配置文件的格式。确定要用什么解析器来解析配置文件。默认"json"
	 */
	public loadRes(configPath:string, groupName:string, themePath:string, callback:Function, context:any, resourceRoot?: string, type?: string){
		this.o.push( {key:groupName, value:[configPath, groupName, themePath, callback, context]} );

		RES.addEventListener(RES.ResourceEvent.CONFIG_COMPLETE, this.onConfigComplete, this);

		RES.loadConfig(configPath, "resource/");
		// RES.loadConfig("resource/default.res.json", "resource/");
	}

	private onConfigComplete(event:RES.ResourceEvent):void {
		RES.removeEventListener(RES.ResourceEvent.CONFIG_COMPLETE, this.onConfigComplete, this);
		let len = this.o.length;
		for(let i=0; i < len; i++){
			let obj = this.o[i];
			if(obj.key == event.target.name){

			}
		}
		let themePath:string = "";
        //加载皮肤主题配置文件,可以手动修改这个文件。替换默认皮肤。
        let theme = new eui.Theme("resource/default.thm.json", this.stage);
        theme.addEventListener(eui.UIEvent.COMPLETE, this.onThemeLoadComplete, this);

        RES.addEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onResourceLoadComplete, this);
        RES.addEventListener(RES.ResourceEvent.GROUP_LOAD_ERROR, this.onResourceLoadError, this);
        RES.addEventListener(RES.ResourceEvent.GROUP_PROGRESS, this.onResourceProgress, this);
        RES.addEventListener(RES.ResourceEvent.ITEM_LOAD_ERROR, this.onItemLoadError, this);
        RES.loadGroup("preload");
	}

	private isThemeLoadEnd: boolean = false;
    
    private onThemeLoadComplete(): void {
        this.isThemeLoadEnd = true;
        // this.createScene();

		this.loadeOver();
    }
    private isResourceLoadEnd: boolean = false;
    
    private onResourceLoadComplete(event:RES.ResourceEvent):void {
        if (event.groupName == "preload") {
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