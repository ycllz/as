/**
 * 商品购买结果提示面板
 */
class storeResult extends eui.Component{
    private btn:eui.Image;
    private btn_close:eui.Image;
    public buyTypeIco:eui.Image;
    public cont1:eui.Label;
    public cont2:eui.Label;

    /**
     * 构造函数
     * ------------------------------------------------------------------------*/
    public constructor() {
        super();
        this.skinName = skins.shopResultSkin;

        this.btn.touchEnabled = true;
        this.btn.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onTouchBtn,this);

        this.btn_close.touchEnabled = true;
        this.btn_close.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onTouchBtnClose,this);
    }

    public setData(trade:number){
        if(shopPanel.buyType == 0){
            this.cont1.text = "是否花费"+Data.ShopPrice[trade-1]+"元购买";
            this.buyTypeIco.texture = RES.getRes("zuanshi_png");  
            this.cont2.text = Data.ShopPrice[trade-1]*10 + "？";
        }else{
            this.cont1.text = "是否花费"+Data.ShopPrice[trade-7]*10+"钻石购买";
            this.buyTypeIco.texture = RES.getRes("gold_png");
            this.cont2.text = Data.ShopPrice[trade-7]*10 + "？";  
        }         
    }

     /**
     * 确认按钮
     * ------------------------------------------------------------------------*/
    private onTouchBtn(e: egret.TouchEvent){
        this.y = -700;
    }

    /**
     * 确认按钮
     * ------------------------------------------------------------------------*/
    private onTouchBtnClose(e: egret.TouchEvent){
        this.y = -700;
    }
}