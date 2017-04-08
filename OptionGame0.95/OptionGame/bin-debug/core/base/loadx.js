var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var loadx = (function () {
    function loadx() {
        // public callback:Function;
        // public context:any;
        // private _groupName:string;
        this._loadList = [];
    }
    Object.defineProperty(loadx, "instance", {
        get: function () {
            if (undefined == this._instance) {
                this._instance = new loadx();
            }
            return this._instance;
        },
        enumerable: true,
        configurable: true
    });
    /**
     *
     * @params lprogress 此回调会返回 当前已经加载数量，总共资源数
    */
    loadx.prototype.loadGroup = function (groupName, lcallback, lcontext, lprogress) {
        if (lprogress === void 0) { lprogress = undefined; }
        // this._groupName = groupName;
        this._loadList[groupName] = { gname: groupName, callback: lcallback, context: lcontext, progress: lprogress };
        // this.callback = lcallback;
        // this.context = lcontext;
        RES.addEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onResourceLoadComplete, this);
        RES.addEventListener(RES.ResourceEvent.GROUP_LOAD_ERROR, this.onResourceLoadError, this);
        RES.addEventListener(RES.ResourceEvent.GROUP_PROGRESS, this.onResourceProgress, this);
        RES.addEventListener(RES.ResourceEvent.ITEM_LOAD_ERROR, this.onItemLoadError, this);
        RES.loadGroup(groupName);
        // console.log("start load  -->", groupName , "<-- module group");
    };
    // private isResourceLoadEnd: boolean = false;
    loadx.prototype.onResourceLoadComplete = function (event) {
        var len = this._loadList.length;
        var obj = this._loadList[event.groupName];
        var call = obj.callback;
        var context = obj.context;
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
        if (this._loadList.length <= 0) {
            RES.removeEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onResourceLoadComplete, this);
            RES.removeEventListener(RES.ResourceEvent.GROUP_LOAD_ERROR, this.onResourceLoadError, this);
            RES.removeEventListener(RES.ResourceEvent.GROUP_PROGRESS, this.onResourceProgress, this);
            RES.removeEventListener(RES.ResourceEvent.ITEM_LOAD_ERROR, this.onItemLoadError, this);
            // this.isResourceLoadEnd = true;
            Loading.instance.hide();
        }
        // if (event.groupName == this._groupName) {
        // this.createScene();
        // }
    };
    loadx.prototype.loadeOver = function (lcallback, lcontext) {
        // console.log("over");
        // this.callback.call(this.context);
        Loading.instance.hide();
    };
    /**
     * 资源组加载出错
     *  The resource group loading failed
     */
    loadx.prototype.onItemLoadError = function (event) {
        console.log("Url:" + event.resItem.url + " has failed to load");
    };
    /**
     * 资源组加载出错
     */
    loadx.prototype.onResourceLoadError = function (event) {
        console.log("Group:" + event.groupName + " has failed to load");
        //忽略加载失败的项目
        this.onResourceLoadComplete(event);
    };
    /**
     * preload资源组加载进度
     */
    loadx.prototype.onResourceProgress = function (event) {
        //event.groupName
        Loading.instance.setProgress(event.itemsLoaded, event.itemsTotal);
        console.log("Loading..." + event.itemsLoaded + "/" + event.itemsTotal);
        // console.log(Math.floor( event.itemsLoaded/event.itemsTotal * 100) );
        var func;
        var obj = this._loadList[event.groupName];
        if (obj) {
            func = obj.progress;
            if (func) {
                func.call(obj.context, [event.itemsLoaded, event.itemsTotal]);
            }
        }
    };
    return loadx;
}());
loadx._instance = undefined;
__reflect(loadx.prototype, "loadx");
//# sourceMappingURL=loadx.js.map