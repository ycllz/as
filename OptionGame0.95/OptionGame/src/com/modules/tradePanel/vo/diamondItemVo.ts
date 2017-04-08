/**
 * 钻石明细item数据
 */
class diamondItemVo{
    public trade:number;        //item的id
    public type:number;         //类型：1：租车行

    public tradeId:number;          //订单号
    public tradeTime:string;        //订单日期

    public price:number;          //收益

    //返回商品名称
    public getTradeName(){
        let text:string = "";
        switch(this.type){
            case 1:
                text = "租车行";
                break;
            case 2:
                text = "充值";
                break;
            case 3:
                text = "商会";
                break;
        }
        return text;
    }

    //返回商品描述
    public getText(){
        let text:string = "";
        switch(this.type){
            case 1:
                text = "购买车辆1辆";
                break;
            case 2:
                text = "充值钻石";
                break;
            case 3:
                text = "商会分红";
                break;
        }
        return text;
    }

    //返回图片路径
    public getImgUrl(){
        if(this.price >= 0)
            return "inIco_png";
        else
            return "outIco_png";
    }

    //返回收益
    public getPrice(){
        let text:string = "";
        text = StringUtil.tranNumberToString(this.price);
        return text;
    }
}