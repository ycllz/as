/**
 * 申请创建商会提示界面
 */
class comResultPanel extends eui.Component{
    private btn:eui.Image;

    /**
     * 构造函数
     * ------------------------------------------------------------------------*/
    public constructor() {
        super();
        this.skinName = skins.resultPanelSkin;

        this.btn.touchEnabled = true;
        this.btn.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onTouchBtn,this);
    }

     /**
     * 确认按钮
     * ------------------------------------------------------------------------*/
    private onTouchBtn(e: egret.TouchEvent){
        this.y = -700;
    }
}