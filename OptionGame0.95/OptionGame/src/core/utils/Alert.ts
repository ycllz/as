/**
 * Created by xx on 2016-12-20.
 */
class Alert extends egret.DisplayObjectContainer{

    private bg:egret.Bitmap;
    private okBtn:btns.BtnBmBm;
    private tipsTxt:egret.TextField;

    private bgWidth:number=-1;
    private bgHeight:number=-1;

    private txtSize:number=24;

    private text:string = "";

    private autoclose:boolean = false;

    public constructor() {
        super();
        this.touchEnabled = true;
    }

    private static _instance:Alert;
    public static get instance():Alert{
        if(this._instance==undefined){
            this._instance = new Alert();
        }
        return this._instance;
    }

    private hide(){
        if(this.parent){
            this.parent.removeChild(this);
        }
    }

    public show(parent:egret.DisplayObjectContainer, texttureName:string, showTxt:string, txtSize:number=24,
    bgwidth:number=-1, bgheight:number=-1, autoclose:boolean=false){
        this.initRes(parent, texttureName, showTxt, txtSize,bgwidth, bgheight, autoclose);
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

    private onCloseTimeout(){
        egret.clearTimeout(this.closeTimeout);
        this.hide();
    }

    private closeTimeout:number;

    private onLoadOver(){
        if(!this.okBtn){

            this.bg = ObjectUtil.createBitmapByName("tipsbg", 0, 0, this);

            //console.log("-----------------> ", this.bg.width, this.bg.height);

            if(this.bgHeight>0){
                this.bg.scaleY = this.bgHeight/this.bg.height;
            }
            if(this.bgWidth>0){
                this.bg.scaleX = this.bgWidth/this.bg.width;
            }

            //console.log("-----------------> ", this.bg.width, this.bg.height);

            this.okBtn = new btns.BtnBmBm("sokbtn", "okbtntxt");
            this.addChild(this.okBtn);

            if(this.bgWidth<=0){
                this.bgWidth = this.bg.width;
            }
            if(this.bgHeight<=0){
                this.bgHeight = this.bg.height;
            }

            this.tipsTxt = ObjectUtil.createTextField(this.text, this.txtSize, ColorUtil.white, this.bgWidth-100, this.bgHeight-160,
                0, 0, this, true, egret.HorizontalAlign.CENTER, 1, true, false);

            utils.setProps(this.tipsTxt, {x:this.bg.x + 50, y:this.bg.y+80} );

            utils.setProps(this.okBtn, {x:this.tipsTxt.x + (this.tipsTxt.width>>1)-(this.okBtn.width>>1),
                y:this.bgHeight- this.okBtn.height - 20 } );
        }

        this.okBtn.ctrlTouch(true);
        this.okBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onOk, this);

        this.x = (this.stage.stageWidth>>1) - (this.bgWidth>>1);
        this.y = (this.stage.stageHeight>>1) - (this.bgHeight>>1);

        this.tipsTxt.text = this.text;

        this.visible = true;
    }

    private onOk(){
        this.hide();
    }

}