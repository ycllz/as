/**
 * 仓库物品item
 * */
class tradeItem extends eui.Component{
    private trade:number;
    private tradeName:eui.Label;  
    private margin:eui.Label;    
    private text:eui.Label;
    private price:eui.Label;

    private tradeId:eui.Label;
    private tradeTime:eui.Label;
    private buyPrice:eui.Label;
    private salePrice:eui.Label;
    private payPrice:eui.Label;
    private tip:eui.Label;

    private gold:eui.Image;
    private ico:eui.Image;

    /**
     * 构造函数
     * ------------------------------------------------------------------------*/
    public constructor() {
        super();
        this.skinName = skins.tradeLogItemSkin;
       
    }
    
    
    /**
     * 设置item上的数据
     * ------------------------------------------------------------------------*/
    public setDate(vo:tradeItemVo):void{ 
        this.trade = vo.trade - 1;
        this.tradeName.text = vo.getTradeName();
        this.tradeId.text = vo.tradeId.toString();
        this.tradeTime.text = vo.tradeTime;
        
        this.margin.text = vo.getMargin();
        this.text.text = vo.getText();

        this.buyPrice.text = "买入价："+(vo.buyPrice*vo.num).toString()+".000";
        this.salePrice.text = "卖出价："+(vo.salePrice*vo.num).toString()+".000";
        this.payPrice.text = "订货款："+(vo.payPrice*vo.num).toString()+".000";
        this.tip.text = "服务费："+(vo.tip*vo.num).toString()+".000";

        if(vo.getPrice() < 0){
            this.price.textColor = 0xa2ff01;
            this.price.strokeColor = 0x1a2d03;
            this.price.text = vo.getPrice()+".000";
        }else{
            this.price.textColor = 0xff2103;
            this.price.strokeColor = 0x450303;
            this.price.text = vo.getPrice()+".000";
        }
        this.gold.texture = RES.getRes(vo.getImgUrl());
        this.ico.texture = RES.getRes("ico_"+vo.type+"_png");
    }
}