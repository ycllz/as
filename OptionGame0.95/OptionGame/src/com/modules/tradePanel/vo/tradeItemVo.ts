/**
 * 贸易记录中item数据
 */
class tradeItemVo{
    public trade:number;        //item的id
    public type:number;         //类型：1：银    2：油     3：铜

    public tradeId:number;          //订单号
    public tradeTime:string;        //订单日期

    public num:number;          //数目，买了多少箱
    public currency:number;     //购买类型  1：金币   0：钻石
    public margin:number;           //价差

    public buyPrice:number;         //买入价钱
    public salePrice:number;        //卖出价钱
    public payPrice:number;         //订货款
    public tip:number;              //服务费

    //返回收益
    public getPrice(){
        let num:number = this.salePrice - this.buyPrice;
        return num;
    }

    //返回商品名称
    public getTradeName(){
        let text:string = "";
        switch(this.type){
            case 1:
                text = "银矿石";
                break;
            case 2:
                text = "原 油";
                break;
            case 3:
                text = "铜矿石";
                break;
        }
        return text;
    }

    //返回商品描述
    public getText(){
        let text:string = "";
        if(this.margin == 1){
            text = "买涨 "+this.num+"箱";
        }else{
            text = "买跌 "+this.num+"箱";
        }
        return text;
    }

    //返回图片路径
    public getImgUrl(){
        if(this.currency == 1)
            return "gold_png";
        else
            return "zuanshi_png";
    }

    //返回价差
    public getMargin(){
        let n:number = 0;
        if(this.margin < 0)
            n = -this.margin;
        else 
            n = this.margin;
        return "("+n+"价差)";
    }
  
}