var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var Data = (function () {
    function Data() {
    }
    return Data;
}());
Data.GAMEID = 0;
Data.COMMERID = 0; //数值为0，没有商会
//-----------------------------------------------------》仓库内物品数据模拟
//item的id
Data.Dtrade = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//类型：1：银    2：油     3：铜      
Data.Dtype = [1, 2, 1, 2, 3, 1, 2, 1, 2, 3];
//单位名称（规格） 1kg  5kg  10kg     
Data.Dunit = ["1kg", "10t", "1kg", "5t", "1kg", "1kg", "10t", "5kg", "1t", "10kg"];
//数目，买了多少箱
Data.Dnum = [2, 7, 5, 1, 8, 6, 10, 2, 3, 1];
//购买类型 0 金币；1钻石     
Data.Dcurrency = [1, 0, 1, 0, 1, 0, 1, 0, 0, 1];
//买入价格     
Data.Dprice = [10, 10, 10, 5, 5, 5, 10, 10, 10, 8];
//当前价格        
Data.Dprice2 = [12, 8, 7, 13, 15, 8, 3, 8, 7, 18];
//预测价格  
Data.Dprice3 = [4, -6, 8, -8, 4, -4, 6, -4, -4, 8];
// public static price4:Array<number> = [1,0,1,0,1,0,1,0,0,1];    
//-----------------------------------------------------》贸易订单数据模拟
Data.Ttrade = [1, 2, 3, 4, 5]; //item的id
Data.Ttype = [3, 1, 2, 1, 1]; //类型：1：银    2：油     3：铜
Data.TtradeId = [392019001, 392019002, 392019003, 392019004, 392019005]; //订单号
Data.TtradeTime = ["2017-3-10 09:12", "2017-3-10 14:44", "2017-3-11 00:08", "2017-3-11 13:35", "2017-3-13 16:58"]; //订单日期
Data.Tnum = [7, 5, 1, 8, 6]; //数目，买了多少箱
Data.Tcurrency = [1, 0, 1, 0, 1]; //购买类型  1：金币   0：钻石
Data.Tmargin = [4, -6, 8, -8, 4]; //价差
Data.TbuyPrice = [13, 15, 8, 3, 8]; //买入价钱
Data.TsalePrice = [10, 10, 5, 5, 8]; //卖出价钱
Data.TpayPrice = [13, 15, 8, 3, 8]; //订货款
Data.Ttip = [13, 15, 8, 3, 8]; //服务费  
//-----------------------------------------------------》钻石明细数据模拟
Data.TDtrade = [1, 2, 3, 4, 5, 6, 7]; //item的id
Data.TDtype = [2, 1, 1, 3, 2, 2, 1]; //类型：1：银    2：油     3：铜
Data.TDtradeId = [392019001, 392019002, 392019003, 392019004, 392019005, 392019006, 382019007]; //订单号
Data.TDtradeTime = ["2017-3-10 09:12", "2017-3-10 14:44", "2017-3-11 00:08", "2017-3-11 13:35", "2017-3-13 16:58", "2017-3-13 16:35", "2017-3-14 00:58"]; //订单日期
Data.TDprice = [313110, -121210, -45210, 12205, 85415, 54121, -25263]; //钻石收益  
//-----------------------------------------------------》租车行车辆信息
Data.Ctrade = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]; //item的id
Data.Ctype = [1, 3, 4, 2, 1, 5, 2, 4, 2, 1, 5, 2]; //类型：1-5
Data.CNum = ["金融城AAA210a", "金融城AAA211a", "金融城AAA212a", "金融城AAA213a", "金融城AAA214a", "金融城AAA215a", "金融城AAA216a", "金融城AAA217a", "金融城AAA218a", "金融城AAA219a", "金融城AAA220a", "金融城AAA221a", "金融城AAA222a", "金融城AAA223a"]; //车牌号
Data.CTime = ["2017-3-10 09:12", "2017-3-10 14:44", "2017-3-11 00:08", "2017-3-11 13:35", "2017-3-13 16:58", "2017-3-13 16:35", "2017-3-14 00:58", "2017-3-14 16:35", "2017-3-15 00:58", "2017-3-15 16:35", "2017-3-15 20:58", "2017-3-15 22:58"]; //订单日期
Data.CPrice = [313110, 121210, 45210, 12205, 85415, 54121, 25263, 121210, 45210, 12205, 85415, 54121]; //钻石收益  
Data.CResult = [0, 1, 2, 2, 1, 0, 0, 1, 2, 2, 1, 0]; //订单号
//-----------------------------------------------------》商会信息
Data.Comtrade = [1, 2, 3, 4, 5, 6, 7, 8, 9]; //item的id
Data.ComvipIcoNum = [2, 2, 2, 1, 1, 1, 1, 1, 1];
Data.CompeopleName = ["脱离黄钻用户", "酷酷猫", "柒槿年", "人狗殊途", "城堡下的诡洞", "淺笑嫣然", "浮生物语", "入戏太深", "红尘多变"];
Data.CompeopleNum = [100, 100, 97, 80, 41, 38, 31, 32, 12];
Data.CombonusPersent = [8, 8, 6, 5, 5, 5, 4, 4, 4];
Data.ComtradeNum = [998, 874, 533, 497, 201, 192, 188, 180, 102];
Data.Comtime = ["在线", "在线", "在线", "5分钟前", "8分钟前", "12分钟前", "18分钟前", "22分钟前", "34分钟前"];
//-----------------------------------------------------》商店商品数据
Data.ShopTrade = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
Data.ShopPrice = [6, 30, 68, 128, 328, 648, 6, 30, 68, 128, 328, 648];
//-----------------------------------------------------》邮件数据
Data.EmailId = [1, 2, 3, 4, 5];
Data.EmailTitle = ["租车行购车竞拍成功！", "租车行购车竞拍成功！", "租车行购车竞拍成功！", "租车行购车竞拍成功！", "租车行购车竞拍成功！"];
Data.EmailTime = ["2017-3-10 09:12", "2017-3-10 14:44", "2017-3-11 00:08", "2017-3-11 13:35", "2017-3-13 16:58"];
Data.EmailCont = ["邮件详细内容1", "邮件详细内容2", "邮件详细内容3", "邮件详细内容4", "邮件详细内容5"];
Data.EmailRead = [0, 0, 1, 1, 1];
Data.EmailAward = [0, 0, 0, 0, 0]; //是否领取奖励
Data.EmailAwardNum = [1000, 2000, 3000, 4000, 5000]; //奖励金额
Data.EmailAwardType = [1, 2, 1, 2, 1]; //奖励类型：0没有  1金币  2钻石
__reflect(Data.prototype, "Data");
//# sourceMappingURL=Data.js.map