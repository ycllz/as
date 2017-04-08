var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
//贸易模块
var Trade = (function (_super) {
    __extends(Trade, _super);
    function Trade() {
        var _this = _super.call(this) || this;
        _this.itemList = [];
        // public detailcontext:any;
        // public detailfunc:Function;
        // public closecontext:any;
        // public closefunc:Function;
        // public onTouchBtn4:Function;
        // public onTouchBtn5:Function;
        _this.seleteSpreadType = 1;
        _this.seleteType = 1;
        _this.seleteSym = 1;
        _this.skinName = skins.tradeSkin;
        return _this;
    }
    Trade.prototype.addEvents = function () {
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
    };
    Trade.prototype.show = function () {
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
        var num = 1;
        num = Number(this.txt_num.text);
        var oneCost = this.getOneCost();
        var totalcost = oneCost * num;
        this.txt_gold.text = totalcost.toString();
        this.onbtntype1();
        this.ontype1();
        this.onsym1();
    };
    Trade.prototype.onbuy = function () {
        // btns.inScalePanel(MainPanel.iCont,0,0);   
        var vo = new depotItemVo();
        //     public type:number;         //类型：1：银    2：油     3：铜
        // public unit:string;         //单位名称（规格） 1kg  5kg  10kg
        // public num:number;          //数目，买了多少箱
        // public currency:number;      //购买类型 1涨 2跌
        // public price:number;        //买入价格
        // public price2:number;           //当前价格
        // public price3:number;           //价差
        vo.type = this.seleteSym;
        vo.unit = this.seleteSpreadType.toString();
        vo.num = Number(this.txt_num.text);
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
    };
    Trade.prototype.onsell = function () {
        // btns.inScalePanel(MainPanel.iCont,0,0);
        var vo = new depotItemVo();
        //     public type:number;         //类型：1：银    2：油     3：铜
        // public unit:string;         //单位名称（规格） 1kg  5kg  10kg
        // public num:number;          //数目，买了多少箱
        // public currency:number;      //购买类型 1涨 2跌
        // public price:number;        //买入价格
        // public price2:number;           //当前价格
        // public price3:number;           //价差
        vo.type = this.seleteSym;
        vo.unit = this.seleteSpreadType.toString();
        vo.num = Number(this.txt_num.text);
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
    };
    Trade.prototype.onjia = function () {
        var num = Number(this.txt_num.text);
        num++;
        this.txt_num.text = num.toString();
        var oneCost = this.getOneCost();
        var totalcost = oneCost * num;
        this.txt_gold.text = totalcost.toString();
    };
    Trade.prototype.onjian = function () {
        var num = Number(this.txt_num.text);
        num--;
        if (num <= 1) {
            num = 1;
        }
        this.txt_num.text = num.toString();
        var oneCost = this.getOneCost();
        var totalcost = oneCost * num;
        this.txt_gold.text = totalcost.toString();
    };
    Trade.prototype.getOneCost = function () {
        if (this.seleteSpreadType == 1) {
            return Number(this.type1.txt_cost.text);
        }
        else if (this.seleteSpreadType == 2) {
            return Number(this.type2.txt_cost.text);
        }
        else if (this.seleteSpreadType == 3) {
            return Number(this.type3.txt_cost.text);
        }
        return 1;
    };
    Trade.prototype.onbtntype1 = function () {
        this.img_flag1.visible = true;
        this.img_flag2.visible = false;
        this.img_flag3.visible = false;
        this.seleteSpreadType = 1;
    };
    Trade.prototype.onbtntype2 = function () {
        this.img_flag1.visible = false;
        this.img_flag2.visible = true;
        this.img_flag3.visible = false;
        this.seleteSpreadType = 2;
    };
    Trade.prototype.onbtntype3 = function () {
        this.img_flag1.visible = false;
        this.img_flag2.visible = false;
        this.img_flag3.visible = true;
        this.seleteSpreadType = 3;
    };
    Trade.prototype.getTypeSpread = function () {
        if (this.seleteSpreadType == 1) {
            return 4;
        }
        else if (this.seleteSpreadType == 2) {
            return 6;
        }
        else if (this.seleteSpreadType == 3) {
            return 10;
        }
        return 4;
    };
    Trade.prototype.ontype1 = function () {
        this.type1.seleted.visible = true;
        this.type2.seleted.visible = false;
        this.type3.seleted.visible = false;
        this.seleteType = 1;
    };
    Trade.prototype.ontype2 = function () {
        this.type1.seleted.visible = false;
        this.type2.seleted.visible = true;
        this.type3.seleted.visible = false;
        this.seleteType = 2;
    };
    Trade.prototype.ontype3 = function () {
        this.type1.seleted.visible = false;
        this.type2.seleted.visible = false;
        this.type3.seleted.visible = true;
        this.seleteType = 3;
    };
    Trade.prototype.onsym1 = function () {
        this.sym1.img_seleted.visible = true;
        this.sym2.img_seleted.visible = false;
        this.sym3.img_seleted.visible = false;
        this.seleteSym = 1;
    };
    Trade.prototype.onsym2 = function () {
        this.sym1.img_seleted.visible = false;
        this.sym2.img_seleted.visible = true;
        this.sym3.img_seleted.visible = false;
        this.seleteSym = 2;
    };
    Trade.prototype.onsym3 = function () {
        this.sym1.img_seleted.visible = false;
        this.sym2.img_seleted.visible = false;
        this.sym3.img_seleted.visible = true;
        this.seleteSym = 3;
    };
    Trade.prototype.getSymCurPrice = function () {
        if (this.seleteSym == 1) {
            return Number(this.sym1.txt_symbolprice.text);
        }
        else if (this.seleteSym == 2) {
            Number(this.sym2.txt_symbolprice.text);
        }
        else if (this.seleteSym == 3) {
            Number(this.sym3.txt_symbolprice.text);
        }
        return Number(this.sym1.txt_symbolprice.text);
    };
    Trade.prototype.ontradelog = function () {
        // this.onTouchBtn4.apply(this.detailcontext);
        TradeLogModule.instance.show();
    };
    Trade.prototype.ondepot = function () {
        // this.onTouchBtn5.apply(this.detailcontext);
        DepotModule.instance.show();
    };
    Trade.prototype.onclose = function () {
        MainModule.instance.show();
        this.dispose();
    };
    // public resize(){
    //     this.x = Common.stageW-this.width;
    //     this.y = Common.stageH-this.height;
    // }
    Trade.prototype.removeEvents = function () {
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
    };
    Trade.prototype.dispose = function () {
        this.removeEvents();
        if (this.parent) {
            this.parent.removeChild(this);
        }
        // this.closefunc.apply(this.closecontext);
    };
    return Trade;
}(eui.Component));
__reflect(Trade.prototype, "Trade");
//# sourceMappingURL=Trade.js.map