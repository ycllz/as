var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
/**
 *
 * @author xx 赔率相关的数据
 *
 */
var ConfigData = (function () {
    function ConfigData() {
    }
    Object.defineProperty(ConfigData, "strMachinehasMan", {
        get: function () {
            return this._strMachinehasMan;
        },
        set: function (value) {
            this._strMachinehasMan = value;
        },
        enumerable: true,
        configurable: true
    });
    return ConfigData;
}());
ConfigData.wStage = 1136;
ConfigData.hStage = 640;
/**五同（5K）：5张相同点数牌（至少一张王）；赔率 ： 600	500	400
大青（RS）：相同花色的10、J、Q、K、A；    赔率：400	300	200
小表（SF）：除大青外，花色相同、点数相连的牌形；赔率:250	200	150
四同（4K）：只有四张相同点数牌；	赔率：80	60	40
葫芦（FH）：有三张相同点数牌，并且另两张牌点数相同；赔率：12	10	8
同花（FT）：五张牌只是花色相同；      赔率：8	7	6
杂顺（ST）：五张牌只是点数相连；	赔率：6	5	4
三同（3K）：只有三张相同点数牌：	赔率：4	3	3
两对（2P）：（不做解释）		赔率：2	2	2
一对（1P）：（同上）			赔率：1	1	1*/
ConfigData.oddsOfWinning = [
    [1, 2, 4, 6, 8, 12, 80, 250, 400, 600],
    [1, 2, 3, 5, 7, 10, 60, 200, 300, 500],
    [1, 2, 3, 4, 6, 8, 40, 150, 200, 400] //低赔率
];
/** 翻倍玩法的倍率*/
ConfigData.doubleRates = [1, 2, 5, 15, 50, 500];
ConfigData._strMachinehasMan = "该机器已有玩家在玩，请选择其他机器，谢谢";
ConfigData.strDonotBet = "还没押分,请先押分再开始";
ConfigData.rulesAlert = "不同意游戏规则，不能进房间.";
ConfigData.signupSuccessAlert = "注册成功.";
ConfigData.signupFaildAlert = "注册失败.";
ConfigData.loginFaildAlert = "登陆失败.";
ConfigData.noRoom = "未开房间.";
ConfigData.noMachine = "房间无机器.";
ConfigData.liujistr = "请输入留机密码";
/////test
ConfigData.playeridlist = [10000, 10001, 10002, 10003, 10004, 10005, 10006, 10007];
ConfigData.rules = "1:本游戏仅供会员休闲娱乐，严禁赌博之用途;" +
    "2:在游戏过程中，如遇到爆币、涨币之现象属于机台故障，只能按游戏起始币数计算;" +
    "3:非正常使用游戏机者，本服有权停止该会员之游戏权利;" +
    "4:本游戏不该打满彩金奖励机制和其他奖励机制;" +
    "5:本游戏纯属娱乐，如遇掉线，自身网络原因掉币，游戏过程中的少币、差币本服一概不负责;" +
    "6:每月的1号，16号早8：00--9：00为系统维护时间，请注意上线时间;" +
    "最终解释权归本游戏商所有.";
__reflect(ConfigData.prototype, "ConfigData");
//# sourceMappingURL=ConfigData.js.map