/**
 * 商会item
 * */
class commerceItem extends eui.Component{
    private trade:number;
    
    private vipIco:eui.Image;
    private peopleName:eui.Label;
    private peopleNum:eui.Label;
    private bonusPersent:eui.Label;
    private tradeNum:eui.Label;
    private bonus:eui.Label;
    private time:eui.Label;


    /**
     * 构造函数
     * ------------------------------------------------------------------------*/
    public constructor() {
        super();
        this.skinName = skins.commerceItemSkin;
    }
    
    
    /**
     * 设置item上的数据
     * ------------------------------------------------------------------------*/
    public setDate(vo:commerceItemVo):void{ 
        this.trade = vo.trade - 1;
        this.vipIco.texture = RES.getRes(vo.getVipIcoUrl());
        this.peopleName.text = vo.peopleName;
        this.peopleNum.text = vo.getPeopleNum();
        this.bonusPersent.text = vo.getBonusPersent();
        this.tradeNum.text = vo.getTradeNum();
        this.bonus.text = vo.getBonus();
        this.time.text = vo.time;

        if(vo.time == "在线"){
            this.time.textColor = 0xa9f12b;
        }else{
            this.time.textColor = 0xffeeba;
        }
    }
}