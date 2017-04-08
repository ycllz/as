

class TradeSymbolItem extends eui.Component{

    public txt_symbolname:eui.TextInput;
    public txt_symbolprice:eui.TextInput;
    public img_flagup:eui.Image;
    public img_flagdown:eui.Image;
    public img_seleted:eui.Image;
    private icon:eui.Image; 

    public constructor() {
        super();
        this.skinName = skins.tradeSymbolItemSkin;
        this.width=296;
        this.height=102;
        
    }
    public data(obj:Object){
        this.icon = RES.getRes("ico_1"+"_png");
        this.txt_symbolname.text = "银矿石";
        this.txt_symbolprice.text = "381,099";
        this.txt_symbolname.textColor = ColorUtil.red;
        this.txt_symbolprice.textColor = ColorUtil.red;
        this.img_flagdown.visible = false;
    }


}