/**
 * 商店物品item
 * */
class storeItem extends eui.Component{
    private trade:number;

    private bg:eui.Image;
    private shopIco:eui.Image;
    private typeIco:eui.Image;
    private price:eui.Label;
    private storeName:eui.Label;
    /**
     * 构造函数
     * ------------------------------------------------------------------------*/
    public constructor() {
        super();
        this.skinName = skins.shopItemSkin;
       
        this.touchEnabled = true;
        this.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onTouchItem,this);

        //移除item时释放这上面监听的事件
        this.addEventListener(egret.Event.REMOVED_FROM_STAGE,this.removeFromStage, this);
    }
    
    /**
     * 设置item上的数据
     * ------------------------------------------------------------------------*/
    public setDate(vo:storeItemVo):void{ 
        this.trade = vo.trade;
        this.bg.texture = RES.getRes(vo.getBgImgUrl());
        this.shopIco.texture = RES.getRes(vo.getShopIco());
        this.typeIco.texture = RES.getRes(vo.getTypeIco());
        this.price.text = vo.getPrice();
        this.storeName.text = vo.getName();

        if(this.trade <= 6 ){
            this.storeName.strokeColor = 0x214F70;
            this.price.strokeColor = 0x214F70;
        }else{
            this.storeName.strokeColor = 0x633B17;
            this.price.strokeColor = 0x633B17;
        }
    }

    /**
     * item被点击时，弹出相应的界面
     * ------------------------------------------------------------------------*/
    private onTouchItem(){
        shopPanel.ResultPanel.setData(this.trade);
        btns.inScalePanel(shopPanel.ResultPanel,0,0);    
        // MainPanel.iCont.setDate(MainPanel.Dvo[this.trade]);
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