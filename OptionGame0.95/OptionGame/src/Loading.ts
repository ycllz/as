
class Loading extends egret.Sprite {


    private static _instance: Loading = undefined;

    public static get instance(): Loading {
        if(Loading._instance == undefined) {
            Loading._instance = new Loading();
        }
        return Loading._instance;
    }

    private textField: egret.TextField;
    private banner: egret.Bitmap;
    private resource: string = "resource/assets/loading.png";
    private key: string = "loading_png";
    private imageLoader: egret.ImageLoader;
    private besetTween: boolean = false;

    public constructor() {
        super();
        this.createView();
    }

    private loadCompleteHandler(event: egret.Event): void {

        this.imageLoader.removeEventListener(egret.Event.COMPLETE,this.loadCompleteHandler,this);
        this.imageLoader.removeEventListener(egret.IOErrorEvent.IO_ERROR,this.loadErrorHandler,this);

        var imageLoader = <egret.ImageLoader>event.currentTarget;
        this.banner = new egret.Bitmap(imageLoader.data);

        this.setView();
    }

    private setView() {
        this.banner.anchorOffsetX = this.banner.width >> 1;
        this.banner.anchorOffsetY = this.banner.height >> 1;
        this.textField.anchorOffsetX = this.textField.width >> 1;

        this.banner.x = (LayerManager.instance.stageWidth >> 1);
        this.banner.y = (LayerManager.instance.stageHeight >> 1);
        this.textField.x = this.banner.x + 20;//+ (this.textField.width>>1);
        this.textField.y = this.banner.y - (this.banner.height >> 1) - (this.textField.height >> 1);

        this.addChild(this.banner);
        this.addChild(this.textField);

        this.besetTween = true;
        egret.Tween.get(this.banner,{ loop: true }).to({ rotation: 360 },3000);
    }

    private loadErrorHandler(e: egret.Event): void {
        //console.log("loading banner img not found ...");
    }

    private createView():void {
        this.textField = new egret.TextField();
        this.addChild(this.textField);
        this.textField.y = 300;
        this.textField.width = 480;
        this.textField.height = 100;
        this.textField.textAlign = "center";
    }

    public show(resourcePath:string = ""){
        LayerManager.instance.topLayer.addChild(this);
        var path: string = this.resource;
        if(resourcePath != "") {
            path = resourcePath;
        }
        if(!this.banner) {
            this.imageLoader = new egret.ImageLoader();
            this.imageLoader.removeEventListener(egret.Event.COMPLETE,this.loadCompleteHandler,this);
            this.imageLoader.removeEventListener(egret.IOErrorEvent.IO_ERROR,this.loadErrorHandler,this);
            this.imageLoader.addEventListener(egret.Event.COMPLETE,this.loadCompleteHandler,this);
            this.imageLoader.addEventListener(egret.IOErrorEvent.IO_ERROR,this.loadErrorHandler,this);
            this.imageLoader.load(path);
        }
        else {
            this.setView();
        }
    }

    public hide(){
        if(this.parent){
            this.parent.removeChild(this);
        }
    }

    public setProgress(current:number, total:number):void {
        this.textField.text = `Loading...${current}/${total}`;
    }
}
