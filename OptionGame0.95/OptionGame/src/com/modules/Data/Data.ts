class Data{
    public static GAMEID = 0;
    public static COMMERID = 0;         //数值为0，没有商会

    //-----------------------------------------------------》仓库内物品数据模拟
    //item的id
    public static Dtrade:Array<number> = [1,2,3,4,5,6,7,8,9,10];  
    //类型：1：银    2：油     3：铜      
    public static Dtype:Array<number> = [1,2,1,2,3,1,2,1,2,3];    
    //单位名称（规格） 1kg  5kg  10kg     
    public static Dunit:Array<string> = ["1kg","10t","1kg","5t","1kg","1kg","10t","5kg","1t","10kg"];         

    //数目，买了多少箱
    public static Dnum:Array<number> = [2,7,5,1,8,6,10,2,3,1];  
    //购买类型 0 金币；1钻石     
    public static Dcurrency:Array<number> = [1,0,1,0,1,0,1,0,0,1];
    //买入价格     
    public static Dprice:Array<number> = [10,10,10,5,5,5,10,10,10,8];  

    //当前价格        
    public static Dprice2:Array<number> = [12,8,7,13,15,8,3,8,7,18];   
    //预测价格  
    public static Dprice3:Array<number> = [4,-6,8,-8,4,-4,6,-4,-4,8];     
    // public static price4:Array<number> = [1,0,1,0,1,0,1,0,0,1];    

    //-----------------------------------------------------》贸易订单数据模拟
    public static Ttrade:Array<number> = [1,2,3,4,5];        //item的id
    public static Ttype:Array<number> = [3,1,2,1,1];         //类型：1：银    2：油     3：铜

    public static TtradeId:Array<number> = [392019001,392019002,392019003,392019004,392019005];          //订单号
    public static TtradeTime:Array<string> = ["2017-3-10 09:12","2017-3-10 14:44","2017-3-11 00:08","2017-3-11 13:35","2017-3-13 16:58"];        //订单日期

    public static Tnum:Array<number> = [7,5,1,8,6];          //数目，买了多少箱
    public static Tcurrency:Array<number> = [1,0,1,0,1];     //购买类型  1：金币   0：钻石
    public static Tmargin:Array<number> = [4,-6,8,-8,4];           //价差

    public static TbuyPrice:Array<number> = [13,15,8,3,8];         //买入价钱
    public static TsalePrice:Array<number> = [10,10,5,5,8];        //卖出价钱
    public static TpayPrice:Array<number> = [13,15,8,3,8];         //订货款
    public static Ttip:Array<number> = [13,15,8,3,8];              //服务费  

    //-----------------------------------------------------》钻石明细数据模拟
    public static TDtrade:Array<number> = [1,2,3,4,5,6,7];        //item的id
    public static TDtype:Array<number> = [2,1,1,3,2,2,1];         //类型：1：银    2：油     3：铜
    public static TDtradeId:Array<number> = [392019001,392019002,392019003,392019004,392019005,392019006,382019007];          //订单号
    public static TDtradeTime:Array<string> = ["2017-3-10 09:12","2017-3-10 14:44","2017-3-11 00:08","2017-3-11 13:35","2017-3-13 16:58","2017-3-13 16:35","2017-3-14 00:58"];        //订单日期
    public static TDprice:Array<number> = [313110,-121210,-45210,12205,85415,54121,-25263];      //钻石收益  

     //-----------------------------------------------------》租车行车辆信息
    public static Ctrade:Array<number> = [1,2,3,4,5,6,7,8,9,10,11,12];        //item的id
    public static Ctype:Array<number> = [1,3,4,2,1,5,2,4,2,1,5,2];         //类型：1-5
    public static CNum:Array<string> = ["金融城AAA210a","金融城AAA211a","金融城AAA212a","金融城AAA213a","金融城AAA214a","金融城AAA215a","金融城AAA216a","金融城AAA217a","金融城AAA218a","金融城AAA219a","金融城AAA220a","金融城AAA221a","金融城AAA222a","金融城AAA223a"];            //车牌号
    public static CTime:Array<string> = ["2017-3-10 09:12","2017-3-10 14:44","2017-3-11 00:08","2017-3-11 13:35","2017-3-13 16:58","2017-3-13 16:35","2017-3-14 00:58","2017-3-14 16:35","2017-3-15 00:58","2017-3-15 16:35","2017-3-15 20:58","2017-3-15 22:58"];        //订单日期
    public static CPrice:Array<number> = [313110,121210,45210,12205,85415,54121,25263,121210,45210,12205,85415,54121];      //钻石收益  
    public static CResult:Array<number> = [0,1,2,2,1,0,0,1,2,2,1,0];          //订单号

    //-----------------------------------------------------》商会信息
    public static Comtrade:Array<number> = [1,2,3,4,5,6,7,8,9];        //item的id
    public static ComvipIcoNum:Array<number> = [2,2,2,1,1,1,1,1,1];
    public static CompeopleName:Array<string> = ["脱离黄钻用户","酷酷猫","柒槿年","人狗殊途","城堡下的诡洞","淺笑嫣然","浮生物语","入戏太深","红尘多变"];
    public static CompeopleNum:Array<number> = [100,100,97,80,41,38,31,32,12];
    public static CombonusPersent:Array<number> = [8,8,6,5,5,5,4,4,4];
    public static ComtradeNum:Array<number> = [998,874,533,497,201,192,188,180,102];
    public static Comtime:Array<string> = ["在线","在线","在线","5分钟前","8分钟前","12分钟前","18分钟前","22分钟前","34分钟前"];


    //-----------------------------------------------------》商店商品数据
    public static ShopTrade:Array<number> = [1,2,3,4,5,6,7,8,9,10,11,12];
    public static ShopPrice:Array<number> = [6,30,68,128,328,648,6,30,68,128,328,648];

    //-----------------------------------------------------》邮件数据
    public static EmailId:Array<number> = [1,2,3,4,5];
    public static EmailTitle:Array<string> = ["租车行购车竞拍成功！","租车行购车竞拍成功！","租车行购车竞拍成功！","租车行购车竞拍成功！","租车行购车竞拍成功！"];
    public static EmailTime:Array<string> = ["2017-3-10 09:12","2017-3-10 14:44","2017-3-11 00:08","2017-3-11 13:35","2017-3-13 16:58"];
    public static EmailCont:Array<string> = ["邮件详细内容1","邮件详细内容2","邮件详细内容3","邮件详细内容4","邮件详细内容5"];

    public static EmailRead:Array<number> = [0,0,1,1,1];
    public static EmailAward:Array<number> = [0,0,0,0,0];            //是否领取奖励
    public static EmailAwardNum:Array<number> = [1000,2000,3000,4000,5000];         //奖励金额
    public static EmailAwardType:Array<number> = [1,2,1,2,1];        //奖励类型：0没有  1金币  2钻石
}