/**
 * 邮件详细内容
 */
class EmailDetailPanel extends eui.Component{
    private btnClose:eui.Image;

    private title:eui.Label;
    private cont:eui.Label;
    private price:eui.Label;
    /**
     * 构造函数
     * ------------------------------------------------------------------------*/
    public constructor() {
        super();
        this.skinName = skins.emailContSkin;
        this.btnClose.touchEnabled = true;
        btns.initScaleBtn1(this.btnClose);
        this.btnClose.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onTouchBtnClose,this);

    }

    /**
     * 设置item上的数据
     * ------------------------------------------------------------------------*/
    public setDate(vo:EmailVo):void{
        this.title.text = vo.ETitle;
        this.cont.text = vo.ECont;
        this.price.text = vo.EAwardNum.toString();
    }

    /**
     * 关闭当前详细页面
     * ------------------------------------------------------------------------*/
    private onTouchBtnClose(){
        // this.y = -700;
        if(this.parent){
            this.parent.removeChild(this);
        }
    }

    /**
     * 移除item时释放这上面监听的事件
     * ------------------------------------------------------------------------*/
    public dispose(){
        this.btnClose.touchEnabled = false;
        if(this.btnClose.hasEventListener(egret.TouchEvent.TOUCH_TAP)){
            this.btnClose.removeEventListener(egret.TouchEvent.TOUCH_TAP,this.onTouchBtnClose,this);
        }  
    }
}