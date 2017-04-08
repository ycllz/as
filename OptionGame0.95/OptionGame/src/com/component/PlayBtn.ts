/**
 *
 * @author 
 *
 */
class PlayBtn extends egret.DisplayObjectContainer {

    private thisobj: any;
    private btn: btns.BtnBmTf = null;
    private txt: egret.Bitmap = null;

    private enableTextTureName: string = "";
    private disableTextTureName: string = "";
    private downTextTureName: string = "";

    private btnTouchCallBack: Function = null;

    //用来识别按钮
    private btnName: string = "";
    //唯一识别码
    private m_btnId: number = 0;

    /**
     * txtTexttureName  按钮的文字图片的名称
     * */
    public constructor(enableTTname: string,txtTexttureName: string,disableTTname: string,downTTname: string) {
        super();
        this.enableTextTureName = enableTTname;
        this.disableTextTureName = disableTTname;
        this.downTextTureName = downTTname;
        this.btnName = txtTexttureName;

        this.btn = new btns.BtnBmTf(enableTTname,"");
        this.addChild(this.btn);

        var tt: egret.Texture = RES.getRes(txtTexttureName);
        var bmName: egret.Bitmap = new egret.Bitmap(tt);
        bmName.x = this.btn.x + this.btn.width + 5;
        bmName.y = this.btn.y + 8;
        this.addChild(bmName);
        this.txt = bmName;
    }

    set btnId(value: number) {
        this.m_btnId = value;
    }
    get btnId(): number {
        return this.m_btnId;
    }

    get width(): number {
        //console.log(this.btn.width + this.txt.width);
        if(this.btn != null && this.txt != null) {
            return this.btn.width + this.txt.width;
        }
        return 145;
    }

    public setBtnState(enableTouch: boolean,callback: Function,thisobj: any) {
        this.thisobj = thisobj;
        this.btn.touchEnabled = enableTouch ? true : false;
        this.btnTouchCallBack = callback;
        // this.btn.updateBtn(enableTouch ? this.enableTextTureName : this.disableTextTureName);
        if(true == this.btn.touchEnabled) {
            this.btn.removeEventListener(egret.TouchEvent.TOUCH_TAP,this.onTouch,this);
            this.btn.removeEventListener(egret.TouchEvent.TOUCH_BEGIN,this.onBegin,this);
            this.btn.removeEventListener(egret.TouchEvent.TOUCH_END,this.onEnd,this);

            this.btn.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onTouch,this);
            this.btn.addEventListener(egret.TouchEvent.TOUCH_BEGIN,this.onBegin,this);
            this.btn.addEventListener(egret.TouchEvent.TOUCH_END,this.onEnd,this);
        } else {
            this.btn.removeEventListener(egret.TouchEvent.TOUCH_TAP,this.onTouch,this);
            this.btn.removeEventListener(egret.TouchEvent.TOUCH_BEGIN,this.onBegin,this);
            this.btn.removeEventListener(egret.TouchEvent.TOUCH_END,this.onEnd,this);
            // this.btn.updateBtn(this.disableTextTureName);
        }
    }

    public onTouch() {
        //        console.log("touch enabled");
        if(this.btnTouchCallBack) {
            this.btnTouchCallBack.apply(this.thisobj,[this.btnName]);
        }
    }

    private onBegin() {
        // this.btn.updateBtn(this.downTextTureName);
    }

    private onEnd() {
        // this.btn.updateBtn(this.enableTextTureName);
    }

}
