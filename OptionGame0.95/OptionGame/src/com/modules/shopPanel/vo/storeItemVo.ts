/**
 * 我的租车行中车辆信息item数据
 */
class storeItemVo{
    public trade:number;        //item的id
    
    public price:number;

    //返回图片路径
    public getBgImgUrl(){
        if(this.trade <= 6)
            return "diamondBg_png";
        else   
            return "goldBg_png"; 
    }

    public getShopIco(){
        let num = this.trade%6;
        if(num == 0)num = 6;
        if(this.trade <= 6)
            return "ico_diamond"+num+"_png";
        else   
            return "ico_gold"+num+"_png"; 
    }

    public getTypeIco(){
        if(this.trade <= 6)
            return "renmingbi_png";
        else   
            return "zuanshi_png";
    }

    public getPrice(){
        if(this.trade <= 6)
            return this.price.toString();
        else
            return (this.price*10).toString();
    }

    public getName(){
        if(this.trade <= 6)
            return "钻石"+this.price+"0";
        else   
            return "金币"+this.price+"0"; 
    }
 
}