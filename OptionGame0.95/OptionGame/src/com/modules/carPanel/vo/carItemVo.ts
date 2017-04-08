/**
 * 我的租车行中车辆信息item数据
 */
class carItemVo{
    public trade:number;        //item的id
    public type:number;         //类型：1~5
    
    public carNum:string;            //汽车车牌号
    public carTime:string;        //订单日期
    public carPrice:number;        //订单价钱
    public carResult:number;        //0:失败，1：成功，2：等待


    //返回状态
    public getResult(){
        let text:string = "carResult"+this.carResult+"_png";
        return text;
    }

    //返回商品描述
    public getText(){
        let text:string = "";
        text = "购买车辆1辆";
        return text;
    }

    //返回图片路径
    public getImgUrl(){
        return "carLongIco"+this.type+"_png";
    }

    //返回收益
    public getPrice(){
        let text:string = "";
        text = StringUtil.tranNumberToString(this.carPrice);
        return text;
    }
}