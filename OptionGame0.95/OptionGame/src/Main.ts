
class Main extends eui.UILayer {
    public static Main = null;
    private beCreateChildren:boolean=false;

    public constructor(){
        super();
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAdd, this);
    }
    private onAdd(){
        if(this.beCreateChildren==false){
            this.createChildren();
        }
    }

    protected createChildren(): void {
        if(this.stage==undefined && this.beCreateChildren==true)return;
        this.beCreateChildren = true;
        super.createChildren();
        
        if(this.stage.orientation != egret.OrientationMode.LANDSCAPE){
            this.stage.orientation = egret.OrientationMode.LANDSCAPE;
        }
        Common.stageW = Math.ceil(window['GetWindowWidth']() / (window['GetWindowHeight']() / 1136));
        Common.stageH = 1136;//this.stage.stageHeight;
        this.stage.setContentSize(Common.stageH,Common.stageW);
        // console.log("SW--->"+window['GetWindowWidth']()+"     SH--->"+window['GetWindowHeight']());
        // console.log("W--->"+Common.stageW+"     H--->"+Common.stageH);

        LayerManager.instance.initLayer();
        LayerManager.instance.stageWidth = Common.stageW;
        LayerManager.instance.stageHeight = Common.stageH;

        //注入自定义的素材解析器
        let assetAdapter = new AssetAdapter();
        egret.registerImplementation("eui.IAssetAdapter",assetAdapter);
        egret.registerImplementation("eui.IThemeAdapter",new ThemeAdapter());

        //设置加载进度界面
        Loading.instance.show();

        //初始化Resource资源加载库
        RES.addEventListener(RES.ResourceEvent.CONFIG_COMPLETE, this.onConfigComplete, this);
        RES.loadConfig("resource/default.res.json", "resource/");

        HttpConnect.instance.addHttpListener("command1", this.onrecieve1, this);
        HttpConnect.instance.sendPostRequest("http://localhost/post_test.php", "p1=postP1&p2=postP2");

        // console.log("屏幕宽度---》"+window['GetWindowWidth']());
    }

    private onrecieve1( event:egret.Event ){
        console.log("main 收到数据， rest 数据 -------》 ", event.type, event.data );
        
        
    }

    /**
     * 配置文件加载完成,开始预加载皮肤主题资源和preload资源组。
     */
    private onConfigComplete(event:RES.ResourceEvent):void {
        RES.removeEventListener(RES.ResourceEvent.CONFIG_COMPLETE, this.onConfigComplete, this);
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
        this.createScene();
    }
    private isResourceLoadEnd: boolean = false;
    
    private onResourceLoadComplete(event:RES.ResourceEvent):void {
        if (event.groupName == "preload") {
            RES.removeEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onResourceLoadComplete, this);
            RES.removeEventListener(RES.ResourceEvent.GROUP_LOAD_ERROR, this.onResourceLoadError, this);
            RES.removeEventListener(RES.ResourceEvent.GROUP_PROGRESS, this.onResourceProgress, this);
            RES.removeEventListener(RES.ResourceEvent.ITEM_LOAD_ERROR, this.onItemLoadError, this);
            this.isResourceLoadEnd = true;
            this.createScene();
        }
    }
    private createScene(){
        if(this.isThemeLoadEnd && this.isResourceLoadEnd){
            Loading.instance.hide();
            this.startCreateScene();
        }
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

    /**
     * 创建场景界面
     */
    protected startCreateScene(): void {
        //根据name关键字，异步获取一个json配置文件，name属性请参考resources/resource.json配置文件的内容。
        //RES.getResAsync("description_json", this.startAnimation, this);
        var scene:GameScene = new GameScene();
        this.addChild(scene);



        
        HttpConnect.instance.addHttpListener("command1", this.onrecieve, this);
        // HttpConnect.instance.sendPostRequest("http://localhost/post_test.php", "p1=postP1&p2=postP2");

        let nvc = {};
        // nvc.Add("MemberId", "10000000");
        // nvc.Add("ContractId", "1");
        // nvc.Add("BuyCount", "1");
        // nvc.Add("RiseOrFall", "1");
        // nvc.Add("ContractType", "2");
        // nvc.Add("appId", "525400b565aa");//APPID
        // nvc.Add("timeStamp", Timestamp);//时间戳
        // nvc.Add("nonce", iv);//随机数
        // nvc.Add("encrypStr", encrypStr);//加密串 token、timeStamp、nonce

        // string result = SendHttpPost("http://gongapi.wanyishou.com/Transaction/Add", nvc);
        

        // console.log("屏幕宽度---》"+window['GetWindowWidth']());
        let purl1:string = "http://123.206.98.166";

        let t = egret.getTimer();
        let e = this.encrypStr("525400b565aa", t, 5);
        let purl:string = "http://gongapi.wanyishou.com/Transaction/Add";
        let param:string = "10000000&1&1&1&2&525400b565aa&"+t + "&5&" + e;
        // purl = purl + param;
        // HttpConnect.instance.sendPostRequest(purl, param);

        var request = new egret.HttpRequest();
        request.responseType = egret.HttpResponseType.TEXT;
        request.open(purl,egret.HttpMethod.POST);
        request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        request.send(param);
        request.addEventListener(egret.Event.COMPLETE,this.onPostComplete,this);
        request.addEventListener(egret.IOErrorEvent.IO_ERROR,this.onPostIOError,this);
        request.addEventListener(egret.ProgressEvent.PROGRESS,this.onPostProgress,this);
        
    }

    private encrypStr( s1, s2, s3){
        let a = [];
        a.push(s1);
        a.push(s2);
        a.push(s3);
        a.sort();
        let s = "";
        s = a[0] + a[1] + a[2];
        return s;
    }
    private onPostComplete(event:egret.Event) {
        var request = <egret.HttpRequest>event.currentTarget;
        console.log("post data : ",request.response);
        var responseLabel = new egret.TextField();
        responseLabel.size = 18;
        responseLabel.text = "POST response:\n" + request.response.substring(0, 50) + "...";
        this.addChild(responseLabel);
        responseLabel.x = 300;
        responseLabel.y = 70;
    }

    private onPostIOError(event:egret.IOErrorEvent):void {
        console.log("post error : " + event);
    }

    private onPostProgress(event:egret.ProgressEvent):void {
        console.log("post progress : " + Math.floor(100*event.bytesLoaded/event.bytesTotal) + "%");
    }

    private onrecieve( event:egret.Event ){
        // console.log("main 收到数据， rest 数据 -------》 ", event.type, event.data );
        
        
    }

    
}
