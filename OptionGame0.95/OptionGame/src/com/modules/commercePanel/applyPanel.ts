/**
 * 申请创建商会界面
 */
class applyPanel extends eui.Component{
    public btn:eui.Image;
    private btn_close:eui.Image;

    

    /**
     * 构造函数
     * ------------------------------------------------------------------------*/
    public constructor() {
        super();
        this.skinName = skins.applyPanelSkin;

        this.btn_close.touchEnabled = true;
        this.btn_close.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onTouchBtnClose,this);

        this.btn.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onTouchAPanelBtn,this);
    }

    private onTouchAPanelBtn(e: egret.TouchEvent){
        Data.COMMERID = 1;

        // CommerceModule.instance.openResultPanel();
        CommerceModule.instance.show(1);
    }
   
     /**
     * 关闭按钮
     * ------------------------------------------------------------------------*/
    private onTouchBtnClose(e: egret.TouchEvent){
        // console.log("右上角关闭按钮--->");
        if(this.parent){
            this.parent.removeChild(this);
        }
    }

    
}