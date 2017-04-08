/**
 * 钻石明细item
 * */
class diamondItem extends eui.Component{
    private trade:number;
    private tradeName:eui.Label;    
    private text:eui.Label;
    private price:eui.Label;

    private tradeId:eui.Label;
    private tradeTime:eui.Label;


    private gold:eui.Image;
    private priceIco:eui.Image;

    /**
     * 构造函数
     * ------------------------------------------------------------------------*/
    public constructor() {
        super();
        this.skinName = skins.diamondLogItemSkin;
    }
    
    
    /**
     * 设置item上的数据
     * ------------------------------------------------------------------------*/
    public setDate(vo:diamondItemVo):void{ 
        this.trade = vo.trade - 1;
        this.tradeName.text = vo.getTradeName();
        this.tradeId.text = vo.tradeId.toString();
        this.tradeTime.text = vo.tradeTime;

        this.text.text = vo.getText();

        if(vo.price < 0){
            this.price.textColor = 0x9FFF00;
            this.price.strokeColor = 0x202D01;
            this.price.text = vo.getPrice();
        }else{
            this.price.textColor = 0xfd2307;
            this.price.strokeColor = 0x430709;
            this.price.text = vo.getPrice();
        }
        this.priceIco.texture = RES.getRes(vo.getImgUrl());
    }
}