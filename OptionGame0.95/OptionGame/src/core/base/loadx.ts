class loadx {
	public constructor() {
	}

    private static _instance:loadx = undefined;
    public static get instance(): loadx {
        if(undefined == this._instance) {
            this._instance = new loadx();
        }
        return this._instance;
    }

    // public callback:Function;
    // public context:any;
	// private _groupName:string;

    private _loadList = [];

    /**
     * 
     * @params lprogress 此回调会返回 当前已经加载数量，总共资源数
    */
	public loadGroup(groupName:string, lcallback:Function, lcontext:any, lprogress:Function=undefined){
		// this._groupName = groupName;
        this._loadList[groupName] = {gname:groupName, callback:lcallback, context:lcontext, progress:lprogress};
        // this.callback = lcallback;
        // this.context = lcontext;
        RES.addEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onResourceLoadComplete, this);
        RES.addEventListener(RES.ResourceEvent.GROUP_LOAD_ERROR, this.onResourceLoadError, this);
        RES.addEventListener(RES.ResourceEvent.GROUP_PROGRESS, this.onResourceProgress, this);
        RES.addEventListener(RES.ResourceEvent.ITEM_LOAD_ERROR, this.onItemLoadError, this);
        RES.loadGroup(groupName);
        // console.log("start load  -->", groupName , "<-- module group");
	}
    
    // private isResourceLoadEnd: boolean = false;
    
    private onResourceLoadComplete(event:RES.ResourceEvent):void {
        let len:number = this._loadList.length;

        let obj:any = this._loadList[event.groupName];
        let call:Function = obj.callback;
        let context:any = obj.context;
        call.call(context);
        delete this._loadList[event.groupName];
        // console.log("loadx load over call back success .....................");

        // let obj:any;
        // for(let i:number = 0; i<len; i++){
        //     obj = this._loadList[i];
        //     if(event.groupName == obj.gname){
        //         // this.callback.call(this.context);
        //         let call:Function = obj.callback;
        //         let context:any = obj.context;
        //         call.call(context);
        //         delete this._loadList[i];
        //         console.log("loadx load over call back success .....................");
        //         break;
        //     }
        // }

        if(this._loadList.length<=0){
            RES.removeEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onResourceLoadComplete, this);
            RES.removeEventListener(RES.ResourceEvent.GROUP_LOAD_ERROR, this.onResourceLoadError, this);
            RES.removeEventListener(RES.ResourceEvent.GROUP_PROGRESS, this.onResourceProgress, this);
            RES.removeEventListener(RES.ResourceEvent.ITEM_LOAD_ERROR, this.onItemLoadError, this);
            // this.isResourceLoadEnd = true;

            Loading.instance.hide();

            // console.log("load over resource list ");
        }
        // if (event.groupName == this._groupName) {
            
            // this.createScene();
			
        // }
    }

	private loadeOver( lcallback:Function, lcontext:any ){
        // console.log("over");
        // this.callback.call(this.context);
		Loading.instance.hide();
	}

	/**
     * 资源组加载出错
     *  The resource group loading failed
     */
    private onItemLoadError(event:RES.ResourceEvent):void {
        console.log("Url:" + event.resItem.url + " has failed to load");
    }
    /**
     * 资源组加载出错
     */
    private onResourceLoadError(event:RES.ResourceEvent):void {
        console.log("Group:" + event.groupName + " has failed to load");
        //忽略加载失败的项目
        this.onResourceLoadComplete(event);
    }
    /**
     * preload资源组加载进度
     */
    private onResourceProgress(event:RES.ResourceEvent):void {
        //event.groupName
        Loading.instance.setProgress(event.itemsLoaded, event.itemsTotal);
        console.log(`Loading...${event.itemsLoaded}/${event.itemsTotal}`);
        // console.log(Math.floor( event.itemsLoaded/event.itemsTotal * 100) );
        let func:Function;
        let obj:any = this._loadList[event.groupName];
        if(obj){
           func = obj.progress;
           if(func){
               func.call(obj.context, [event.itemsLoaded, event.itemsTotal]);
           }
        }
            
    }



}