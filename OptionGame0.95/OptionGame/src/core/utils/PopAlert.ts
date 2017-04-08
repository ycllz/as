class PopAlert  extends egret.DisplayObjectContainer{
	private bg:egret.Bitmap;
    private okBtn:ButtonX;
    private cancelBtn:ButtonX;

    private tipsTxt:egret.TextField;

	private inputTxt:egret.TextField;

	private rescontainer:egret.DisplayObjectContainer;

    private bgWidth:number=-1;
    private bgHeight:number=-1;

    private txtSize:number=24;

    private text:string = "";

    private autoclose:boolean = false;

	private okCallBack:Function = undefined;
	private context:any = undefined;

    public constructor() {
        super();
        this.touchEnabled = true;
    }

    private static _instance:PopAlert;
    public static get instance():PopAlert{
        if(this._instance==undefined){
            this._instance = new PopAlert();
        }
        return this._instance;
    }

    private hide(){
        this.okBtn.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onOk, this);
        this.cancelBtn.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.oncancel, this);
        if(this.parent){
            this.parent.removeChild(this);
        }
    }

    public show(parent:egret.DisplayObjectContainer, texttureName:string, showTxt:string, txtSize:number=24,
    bgwidth:number=-1, bgheight:number=-1, autoclose:boolean=false, okCallBack:Function=undefined, context:any=undefined){
		this.okCallBack = okCallBack;
		this.context = context;
        this.initRes(parent, texttureName, showTxt, txtSize,bgwidth, bgheight, autoclose);
        // this.tipsTxt.removeEventListener(egret.Event.CHANGE, this.textReturn, this);
        // this.tipsTxt.addEventListener(egret.Event.CHANGE, this.textReturn, this);
    }

    private initRes(parent:egret.DisplayObjectContainer, texttureName:string, showTxt:string, txtSize:number=24,
    bgwidth:number=-1, bgheight:number=-1, autoclose:boolean=false){
        parent.addChild(this);
        this.visible = false;
        this.text = showTxt;
        if(bgwidth>0){
            this.bgWidth = bgwidth;
        }
        if(bgheight>0){
            this.bgHeight = bgheight;
        }
        this.txtSize = txtSize;
        if(!this.okBtn){
            RES.getResAsync(texttureName, this.onLoadOver, this);
        }else{
            this.onLoadOver();
        }
        if(autoclose){
            this.closeTimeout = egret.setTimeout(this.onCloseTimeout, this, 1500);
        }
    }

    // private textReturn():string{
    //     var txt:string = "";

    //     return txt;
    // }

    private onCloseTimeout(){
        egret.clearTimeout(this.closeTimeout);
        this.hide();
    }

    private closeTimeout:number;

    private onLoadOver(){
        if(this.okBtn==undefined){
            this.bg = ObjectUtil.createBitmapByName("tipsbg", 0, 0, this);

            this.rescontainer = new egret.DisplayObjectContainer();
			this.addChild(this.rescontainer);

            //console.log("-----------------> ", this.bg.width, this.bg.height);

            if(this.bgHeight>0){
                this.bg.scaleY = this.bgHeight/this.bg.height;
            }
            if(this.bgWidth>0){
                this.bg.scaleX = this.bgWidth/this.bg.width;
            }

            //console.log("-----------------> ", this.bg.width, this.bg.height);

            this.okBtn = new ButtonX(); //new btns.BtnBmBm("sokbtn", "okbtntxt");
            this.okBtn.setSkin("sokbtn", "okbtntxt");
            this.rescontainer.addChild(this.okBtn);

			this.cancelBtn = new ButtonX(); //new btns.BtnBmBm("scancelbtn", "cancelbtntxt");
            this.cancelBtn.setSkin("scancelbtn", "cancelbtntxt");
			this.rescontainer.addChild(this.cancelBtn);

            if(this.bgWidth<=0){
                this.bgWidth = this.bg.width;
            }
            if(this.bgHeight<=0){
                this.bgHeight = this.bg.height;
            }

            this.tipsTxt = ObjectUtil.createTextField(this.text, this.txtSize, ColorUtil.white, this.bgWidth-100, this.txtSize+5,
                0, 0, this.rescontainer, true, egret.HorizontalAlign.CENTER, 1, true, false);

			utils.setProps(this.tipsTxt, {x:this.bg.x + 50, y:this.bg.y+80} );
			
			var inputtxtbg:egret.Bitmap = ObjectUtil.createBitmapByName("sinputtxtbg", this.tipsTxt.x, this.tipsTxt.y+this.tipsTxt.height+15, this.rescontainer);
			inputtxtbg.height = this.tipsTxt.height+20;
			inputtxtbg.width = this.tipsTxt.width;

			this.inputTxt = ObjectUtil.createTextField("123456", this.txtSize, ColorUtil.black, this.tipsTxt.width, this.txtSize+5,
                inputtxtbg.x+7, inputtxtbg.y+7, this.rescontainer, true, egret.HorizontalAlign.LEFT, 1, true, false, true, egret.TextFieldType.INPUT);
			this.inputTxt.restrict = "^\u4E00-\u9FA5";
			
            this.okBtn.scaleX = 0.7;
            this.okBtn.scaleY = 0.7;
            this.cancelBtn.scaleX = 0.7;
            this.cancelBtn.scaleY = 0.7;
            utils.setProps(this.okBtn, {x:this.inputTxt.x , y:this.inputTxt.y+this.inputTxt.height+30 } );
			utils.setProps(this.cancelBtn, {x:this.okBtn.x + this.okBtn.width + 15, y:this.okBtn.y } );
        }
        this.okBtn.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onOk, this);
        this.cancelBtn.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.oncancel, this);
        this.okBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onOk, this);
        this.cancelBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.oncancel, this);

        this.x = (this.stage.stageWidth>>1) - (this.bgWidth>>1);
        this.y = (this.stage.stageHeight>>1) - (this.bgHeight>>1);

        this.tipsTxt.text = this.text;

        this.visible = true;
    }

    private oncancel(){
        this.hide();
    }

    private onOk(){
		if(this.okCallBack!=undefined){
			this.okCallBack.apply(this.context, [this.tipsTxt.text] );
		}
        this.hide();
    }
}