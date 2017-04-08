/**
 * 仓库物品item
 * */
class depotItem extends eui.Component{
    private trade:number;
    private tradeName:eui.Label;    
    private unit:eui.Label;
    private text:eui.Label;
    private price:eui.Label;

    private gold:eui.Image;
    private ico:eui.Image;

    

    /**
     * 构造函数
     * ------------------------------------------------------------------------*/
    public constructor() {
        super();
        this.skinName = skins.depotItemSkin;
       
        this.touchEnabled = true;
        this.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onTouchItem,this);

        //移除item时释放这上面监听的事件
        this.addEventListener(egret.Event.REMOVED_FROM_STAGE,this.removeFromStage, this);
    }
    
    /**
     * 设置item上的数据
     * ------------------------------------------------------------------------*/
    public setDate(vo:depotItemVo):void{ 
        this.trade = vo.trade - 1;

        this.tradeName.text = vo.getTradeName();
        this.unit.text = vo.unit;
        this.text.text = vo.getText();
        this.price.text = vo.getPrice();

        this.gold.texture = RES.getRes(vo.getImgUrl());
        this.ico.texture = RES.getRes("ico_"+vo.type+"_png");
    }

    /**
     * item被点击时，弹出相应的界面
     * ------------------------------------------------------------------------*/
    private onTouchItem(){
        DepotConfig.instance.vo = MainPanel.Dvo[this.trade];
        DepotModule.instance.show( 2 );
        // this.setDate(MainPanel.Dvo[this.trade]);
    }

    /**
     * 移除item时释放这上面监听的事件
     * ------------------------------------------------------------------------*/
    private removeFromStage(){
        this.touchEnabled = false;
        if(this.hasEventListener(egret.TouchEvent.TOUCH_TAP)){
            this.removeEventListener(egret.TouchEvent.TOUCH_TAP,this.onTouchItem,this);
            this.removeEventListener(egret.TouchEvent.TOUCH_TAP,this.removeFromStage,this);
        }  
    }
}