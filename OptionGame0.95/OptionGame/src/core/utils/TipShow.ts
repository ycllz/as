


class TipShow extends egret.Sprite {

    private textTip: egret.TextField;
    private imgTip: egret.Bitmap;
    private funTouch: Function;
    private context: any;

    constructor() {
        super();
        this.init();
    }
    private init() {
        this.textTip = new egret.TextField;
        utils.setProps(this.textTip,{});

        this.imgTip = new egret.Bitmap();
        this.addChild(this.imgTip);
        this.addEventListener(egret.TouchEvent.TOUCH_END,this.funTouchEnd,this);
    }
    private funTouchEnd() {
        this.funTouch.call(this.context);
        this.onRem();
    }
    private updateDraw(alpha: number,color: number) {
        this.graphics.clear();
        this.graphics.beginFill(color,alpha);
        this.graphics.drawRect(0,0,this.parent.width,this.parent.height);
        this.graphics.endFill();
    }

    private timeoutTouch(funCall,context) {
        this.funTouch = funCall;
        this.context = context;

        this.touchEnabled = false;
        egret.setTimeout(() => {
            this.touchEnabled = true;
        },this,1500);
    }
    private onRem() {
        this.parent.removeChild(this);
    }

    /**
     * API
     */
    public onAdd(container: any,funCall: Function,context: any,alpha: number = 0.5,color: number = 0x000000) {
        container.addChild(this);
        this.updateDraw(alpha,color);
        this.timeoutTouch(funCall,context);
    }
    public setImg(nameTexture: string,objProps: any,arrAnchor: Array<number> = [0,0]) {
        utils.setProps(this.imgTip,{ texture: RES.getRes(nameTexture) });
        utils.setProps(this.imgTip,objProps,arrAnchor);
    }


    private static inst: TipShow;
    static getInst() {
        if(!this.inst)
            this.inst = new TipShow;
        return this.inst;
    }

}