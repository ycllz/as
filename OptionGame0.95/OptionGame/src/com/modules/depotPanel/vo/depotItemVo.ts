/**
 * 仓库内item数据
 */
class depotItemVo{
    public trade:number;        //item的id
    public type:number;         //类型：1：银    2：油     3：铜
    public unit:string;         //单位名称（规格） 1kg  5kg  10kg

    public num:number;          //数目，买了多少箱
    public currency:number;      //购买类型 1涨 2跌
    public price:number;        //买入价格

    public price2:number;           //当前价格
    public price3:number;           //价差

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
        if(this.currency == 1){
            text = "买涨 "+this.num+"箱子";
        }else{
            text = "买跌 "+this.num+"箱子";
        }
        return text;
    }

    //返回购买总价
    public getPrice(){
        let text = (this.num*this.price)+"";
        return text;
    }

    //返回图片路径
    public getImgUrl(){
        if(this.currency == 1)
            return "gold_png";
        else
            return "zuanshi_png";
    }

    //返回预测结果图片
    public getResultUrl(){
        let num:number = (this.price2 - this.price);
        if(num >= 0)num = 1;
        else num = 0;
        if(num == this.currency)
            return "depotIco_1_png";
        else
            return "depotIco_0_png";
    }

    //返回当前差价
    public getResult(){
        let r:number = this.price2 - this.price;
        if(r >= 0)
            return "+"+r.toString()+".00"
        return r.toString()+".00";
    }

    //返回最多获利
    public getPrice4(){
        let num = (this.price3 * this.num);
        if(num < 0)num *= -1;
        return num.toString();
    }
}