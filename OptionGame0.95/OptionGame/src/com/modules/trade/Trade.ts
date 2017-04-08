
//贸易模块
class Trade extends eui.Component{

    private itemList:Array<TradeSymbolItem> = [];

    public btn_buy:eui.Button;
    public btn_sell:eui.Button;
    public btn_jian:eui.Button;
    public btn_jia:eui.Button;
    public btn_type1:eui.ToggleButton;
    public btn_type2:eui.ToggleButton;
    public btn_type3:eui.ToggleButton;
    public btn_close:eui.Button;
    public type1:TradeSymTypeItem;
    public type2:TradeSymTypeItem;
    public type3:TradeSymTypeItem;
    public img_flag1:eui.Image;
    public img_flag2:eui.Image;
    public img_flag3:eui.Image;
    public sym1:TradeSymbolItem;
    public sym2:TradeSymbolItem;
    public sym3:TradeSymbolItem;
    public txt_num:eui.Label;
    public txt_gold:eui.Label;
    public btn_depot:eui.Button;
    public btn_tradelog:eui.Button;
    

    // public detailcontext:any;
    // public detailfunc:Function;

    // public closecontext:any;
    // public closefunc:Function;

    // public onTouchBtn4:Function;
    // public onTouchBtn5:Function;

    public seleteSpreadType:number=1;
    public seleteType:number=1;
    public seleteSym:number=1;

    public constructor() {
        super();
        this.skinName = skins.tradeSkin;
    }

    public addEvents(){
        this.removeEvents();
        this.btn_buy.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onbuy, this);
        this.btn_sell.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onsell, this);
        this.btn_jia.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onjia, this);
        this.btn_jian.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onjian, this);
        this.btn_type1.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onbtntype1, this);
        this.btn_type2.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onbtntype2, this);
        this.btn_type3.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onbtntype3, this);
        this.type1.addEventListener(egret.TouchEvent.TOUCH_TAP, this.ontype1, this);
        this.type2.addEventListener(egret.TouchEvent.TOUCH_TAP, this.ontype2, this);
        this.type3.addEventListener(egret.TouchEvent.TOUCH_TAP, this.ontype3, this);
        this.sym1.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onsym1, this);
        this.sym2.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onsym2, this);
        this.sym3.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onsym3, this);
        this.btn_close.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onclose, this);
        this.btn_depot.addEventListener(egret.TouchEvent.TOUCH_TAP, this.ondepot, this);
        this.btn_tradelog.addEventListener(egret.TouchEvent.TOUCH_TAP, this.ontradelog, this);
    }

    public show(){
        this.addEvents();

        this.type1.txt_cost.text = "1000";
        this.type2.txt_cost.text = "2000";
        this.type3.txt_cost.text = "2000";
        this.type1.txt_type.text = "1000g/箱";
        this.type2.txt_type.text = "2000g/箱";
        this.type3.txt_type.text = "3000g/箱";
        this.sym1.txt_symbolprice.text = "100";
        this.sym2.txt_symbolprice.text = "200";
        this.sym3.txt_symbolprice.text = "300";

        let num:number=1;
        num = Number( this.txt_num.text);
        let oneCost:number = this.getOneCost();
        let totalcost:number = oneCost*num;
        this.txt_gold.text = totalcost.toString();

        this.onbtntype1();
        this.ontype1();
        this.onsym1();
    }

    private onbuy(){
        // btns.inScalePanel(MainPanel.iCont,0,0);   
        let vo:depotItemVo = new depotItemVo();
    //     public type:number;         //类型：1：银    2：油     3：铜
    // public unit:string;         //单位名称（规格） 1kg  5kg  10kg

    // public num:number;          //数目，买了多少箱
    // public currency:number;      //购买类型 1涨 2跌
    // public price:number;        //买入价格

    // public price2:number;           //当前价格
    // public price3:number;           //价差
        vo.type = this.seleteSym;
        vo.unit = this.seleteSpreadType.toString();
        vo.num = Number( this.txt_num.text);
        vo.currency = 1;
        vo.price = this.getSymCurPrice();
        vo.price2 = this.getSymCurPrice();
        vo.price3 = this.getTypeSpread();

        DepotConfig.instance.vo = vo;

        DepotModule.instance.show(2);
        // MainPanel.iCont.setDate(vo);

        // if(this.detailfunc){
        //     this.detailfunc.apply(this.detailcontext);
        // }
    }
    private onsell(){
        // btns.inScalePanel(MainPanel.iCont,0,0);
        let vo:depotItemVo = new depotItemVo();
    //     public type:number;         //类型：1：银    2：油     3：铜
    // public unit:string;         //单位名称（规格） 1kg  5kg  10kg

    // public num:number;          //数目，买了多少箱
    // public currency:number;      //购买类型 1涨 2跌
    // public price:number;        //买入价格

    // public price2:number;           //当前价格
    // public price3:number;           //价差
        vo.type = this.seleteSym;
        vo.unit = this.seleteSpreadType.toString();
        vo.num = Number( this.txt_num.text);
        // console.log(Number( this.txt_num.text));
        vo.currency = 2;
        vo.price = this.getSymCurPrice();
        vo.price2 = this.getSymCurPrice();
        vo.price3 = this.getTypeSpread();

        DepotConfig.instance.vo = vo;

        DepotModule.instance.show(2);

        // MainPanel.iCont.setDate(vo);

        // if(this.detailfunc){
        //     this.detailfunc.apply(this.detailcontext);
        // }
    }

    private onjia(){
        let num:number = Number(this.txt_num.text);
        num++;
        this.txt_num.text = num.toString();
        let oneCost:number = this.getOneCost();
        let totalcost:number = oneCost*num;
        this.txt_gold.text = totalcost.toString();
    }
    private onjian(){
        let num:number = Number(this.txt_num.text);
        num--;
        if(num<=1){
            num=1;
        }
        this.txt_num.text = num.toString();
        let oneCost:number = this.getOneCost();
        let totalcost:number = oneCost*num;
        this.txt_gold.text = totalcost.toString();
    }
    private getOneCost():number{
        if(this.seleteSpreadType==1){
            return Number(this.type1.txt_cost.text);
        }else if(this.seleteSpreadType==2){
            return Number(this.type2.txt_cost.text);
        }else if(this.seleteSpreadType==3){
            return Number(this.type3.txt_cost.text);
        }
        return 1;
    }

    private onbtntype1(){
        this.img_flag1.visible=true;
        this.img_flag2.visible=false;
        this.img_flag3.visible=false;
        
        this.seleteSpreadType=1;
    }
    private onbtntype2(){
        this.img_flag1.visible=false;
        this.img_flag2.visible=true;
        this.img_flag3.visible=false;
        
        this.seleteSpreadType=2;
    }
    private onbtntype3(){
        this.img_flag1.visible=false;
        this.img_flag2.visible=false;
        this.img_flag3.visible=true;
        this.seleteSpreadType=3;
    }
    private getTypeSpread():number{
        if(this.seleteSpreadType==1){
            return 4;
        }else if(this.seleteSpreadType==2){
            return 6;
        }else if(this.seleteSpreadType==3){
            return 10;
        }
        return 4;
    }
    private ontype1(){
        this.type1.seleted.visible = true;
        this.type2.seleted.visible = false;
        this.type3.seleted.visible = false;
        this.seleteType=1;
    }
    private ontype2(){
        this.type1.seleted.visible = false;
        this.type2.seleted.visible = true;
        this.type3.seleted.visible = false;
        this.seleteType=2;
    }
    private ontype3(){
        this.type1.seleted.visible = false;
        this.type2.seleted.visible = false;
        this.type3.seleted.visible = true;
        this.seleteType=3;
    }

    private onsym1(){
        this.sym1.img_seleted.visible=true;
        this.sym2.img_seleted.visible=false;
        this.sym3.img_seleted.visible=false;
        this.seleteSym=1;
    }
    private onsym2(){
        this.sym1.img_seleted.visible=false;
        this.sym2.img_seleted.visible=true;
        this.sym3.img_seleted.visible=false;
        this.seleteSym=2;
    }
    private onsym3(){
        this.sym1.img_seleted.visible=false;
        this.sym2.img_seleted.visible=false;
        this.sym3.img_seleted.visible=true;
        this.seleteSym=3;
    }
    private getSymCurPrice():number{
        if(this.seleteSym==1){
            return Number(this.sym1.txt_symbolprice.text);
        }else if(this.seleteSym==2){
            Number(this.sym2.txt_symbolprice.text);
        }else if(this.seleteSym==3){
            Number(this.sym3.txt_symbolprice.text);
        }
        return Number(this.sym1.txt_symbolprice.text);
    }

    private ontradelog(){
        // this.onTouchBtn4.apply(this.detailcontext);
        TradeLogModule.instance.show();
    }
    private ondepot(){
        // this.onTouchBtn5.apply(this.detailcontext);
        DepotModule.instance.show();
    }

    private onclose(){
        MainModule.instance.show();
        this.dispose();
    }

    // public resize(){
    //     this.x = Common.stageW-this.width;
    //     this.y = Common.stageH-this.height;
    // }

    public removeEvents(){
        this.btn_buy.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onbuy, this);
        this.btn_sell.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onsell, this);
        this.btn_close.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onclose, this);
        this.btn_jia.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onjia, this);
        this.btn_jian.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onjian, this);
        this.btn_type1.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onbtntype1, this);
        this.btn_type2.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onbtntype2, this);
        this.btn_type3.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onbtntype3, this);
        this.type1.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.ontype1, this);
        this.type2.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.ontype2, this);
        this.type3.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.ontype3, this);
        this.sym1.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onsym1, this);
        this.sym2.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onsym2, this);
        this.sym3.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onsym3, this);
        this.btn_depot.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onsym2, this);
        this.btn_tradelog.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onsym3, this);
    }

    public dispose(){
        this.removeEvents();
        
        if(this.parent){
            this.parent.removeChild(this);
        }
        // this.closefunc.apply(this.closecontext);
    }


}