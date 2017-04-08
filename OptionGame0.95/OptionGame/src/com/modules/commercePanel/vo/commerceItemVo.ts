/**
 * 商会item数据
 */
class commerceItemVo{
    public trade:number;        //item的id
    public vipIcoNum:number;
    public peopleName:string;
    public peopleNum:number;
    public bonusPersent:number;
    public tradeNum:number;
    public time:string;

    public getVipIcoUrl(){
        return "Vip"+this.vipIcoNum+"_png";
    }

    public getPeopleNum(){
        return this.peopleNum+"";
    }

    public getBonusPersent(){
        return this.bonusPersent+"%";
    }

    public getTradeNum(){
        return this.tradeNum+"万";
    }

    public getBonus(){
        let num = Math.floor(this.bonusPersent * this.tradeNum * 100);
        let text:string = "";
        text = StringUtil.tranNumberToString(num);
        return text;
    }
}