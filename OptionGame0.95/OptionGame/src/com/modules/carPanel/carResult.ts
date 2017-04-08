/**
 * 车辆购买结果提示面板
 */
class carResult extends eui.Component{
    private btn:eui.Image;
    /**
     * 构造函数
     * ------------------------------------------------------------------------*/
    public constructor() {
        super();
        this.skinName = skins.carBuyResultSkin;

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