/**
 * 手机验证面板
 */
class MobilePanel extends eui.Component{
    private btn_bundling:eui.Image;
    private btn_close:eui.Image;
    // private btn:eui.Image;
    /**
     * 构造函数
     * ------------------------------------------------------------------------*/
    public constructor() {
        super();
        this.skinName = skins.MobilePanelSkin;

        this.btn_bundling.touchEnabled = true;
        btns.initScaleBtn1(this.btn_bundling);
        this.btn_bundling.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onTouchBtn,this);

        this.btn_close.touchEnabled = true;
        btns.initScaleBtn1(this.btn_close);
        this.btn_close.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onTouchBtnClose,this);
    }

     /**
     * 确认按钮
     * ------------------------------------------------------------------------*/
    private onTouchBtnClose(e: egret.TouchEvent){
        this.y = -700;
    }

     /**
     * 确认按钮
     * ------------------------------------------------------------------------*/
    private onTouchBtn(e: egret.TouchEvent){
        Data.GAMEID = 1;
        this.y = -700;
    }
}