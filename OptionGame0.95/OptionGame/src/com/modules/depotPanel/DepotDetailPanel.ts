/**
 * 仓库物品详细内容
 */
class DepotDetailPanel extends eui.Component{
    private tradeName:eui.Label;
    private unit:eui.Label;
    private text:eui.Label;
    private price:eui.Label;

    private gold:eui.Image;
    private ico:eui.Image;

    //----------------------------------------------------
    private icoResult:eui.Image;
    private price0:eui.Label;
    private price1:eui.Label;
    private price2:eui.Label;
    private price3:eui.Label;
    private price4:eui.Label;

    private btnClose:eui.Image;

    public btnNext:eui.Image;

    /**
     * 构造函数
     * ------------------------------------------------------------------------*/
    public constructor() {
        super();
        this.skinName = skins.depotItemContSkin;
        this.btnClose.touchEnabled = true;
        btns.initScaleBtn1(this.btnClose);
        this.btnClose.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onTouchBtnClose,this);

        this.btnNext.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onTouchNext,this);
    }

    private onTouchNext(){
        DepotModule.instance.show(1);
    }

    /**
     * 设置item上的数据
     * ------------------------------------------------------------------------*/
    public setDate(vo:depotItemVo):void{
        this.tradeName.text = vo.getTradeName();
        this.unit.text = vo.unit;
        this.text.text = vo.getText();
        this.price.text = vo.getPrice();

        this.gold.texture = RES.getRes(vo.getImgUrl());
        this.ico.texture = RES.getRes("ico_"+vo.type+"_png");

        this.icoResult.texture = RES.getRes(vo.getResultUrl());
        this.price0.text = vo.getResult();
        this.price1.text = vo.price.toString();
        this.price2.text = vo.price2.toString();
        this.price3.text = vo.price3.toString();
        this.price4.text = vo.getPrice4();
    }

    /**
     * 关闭当前详细页面
     * ------------------------------------------------------------------------*/
    private onTouchBtnClose(){
        this.y = -700;
    }

    /**
     * 移除item时释放这上面监听的事件
     * ------------------------------------------------------------------------*/
    public dispose(){
        if(this.btnClose){
            this.btnClose.touchEnabled = false;
            if(this.btnClose.hasEventListener(egret.TouchEvent.TOUCH_TAP)){
                this.btnClose.removeEventListener(egret.TouchEvent.TOUCH_TAP,this.onTouchBtnClose,this);
            }
        }
         
        if(this.parent){
            this.parent.removeChild(this);
        }
    }
}