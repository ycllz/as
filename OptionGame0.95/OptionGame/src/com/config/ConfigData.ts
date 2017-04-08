/**
 *
 * @author xx 赔率相关的数据
 *
 */
class ConfigData {
    public static get strMachinehasMan(): string {
        return this._strMachinehasMan;
    }

    public static set strMachinehasMan(value: string) {
        this._strMachinehasMan = value;
    }
    public static wStage: number = 1136;
    public static hStage: number = 640;

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
    public static oddsOfWinning: number[][] = [
        [1,2,4,6,8,12,80,250,400,600],//高赔率
        [1,2,3,5,7,10,60,200,300,500],//中赔率
        [1,2,3,4,6,8,40,150,200,400]//低赔率
        //[1, 1, 1],
        //[2, 2, 2],
        //[4, 3, 3],
        //[6, 5, 4],
        //[8, 7, 6],
        //[12, 10, 8],
        //[80, 60, 40],
        //[250, 200, 150],
        //[400, 300, 200],
        //[600, 500, 400]
    ];

    /** 翻倍玩法的倍率*/
    public static doubleRates: number[] = [1,2,5,15,50,500];


    private static _strMachinehasMan: string = "该机器已有玩家在玩，请选择其他机器，谢谢";
    public static strDonotBet: string = "还没押分,请先押分再开始";

    public static rulesAlert: string = "不同意游戏规则，不能进房间.";

    public static signupSuccessAlert: string = "注册成功.";
    public static signupFaildAlert: string = "注册失败.";
    
    public static loginFaildAlert: string = "登陆失败.";
    
    public static noRoom: string = "未开房间.";
    
    public static noMachine: string = "房间无机器.";

    public static liujistr:string = "请输入留机密码";

    /////test
    public static playeridlist: number[] = [10000,10001,10002,10003,10004,10005,10006,10007];


    public static rules: string = "1:本游戏仅供会员休闲娱乐，严禁赌博之用途;" +
    "2:在游戏过程中，如遇到爆币、涨币之现象属于机台故障，只能按游戏起始币数计算;" +
    "3:非正常使用游戏机者，本服有权停止该会员之游戏权利;" +
    "4:本游戏不该打满彩金奖励机制和其他奖励机制;" +
    "5:本游戏纯属娱乐，如遇掉线，自身网络原因掉币，游戏过程中的少币、差币本服一概不负责;" +
    "6:每月的1号，16号早8：00--9：00为系统维护时间，请注意上线时间;" +
    "最终解释权归本游戏商所有.";
    //public static

    //五同（5K）：5张相同点数牌（至少一张王）；赔率 ： 600	500	400
    //大青（RS）：相同花色的10、J、Q、K、A；    赔率：400	300	200
    //小表（SF）：除大青外，花色相同、点数相连的牌形；赔率:250	200	150
    //四同（4K）：只有四张相同点数牌；	赔率：80	60	40
    //葫芦（FH）：有三张相同点数牌，并且另两张牌点数相同；赔率：12	10	8
    //同花（FT）：五张牌只是花色相同；      赔率：8	7	6
    //杂顺（ST）：五张牌只是点数相连；	赔率：6	5	4
    //三同（3K）：只有三张相同点数牌：	赔率：4	3	3
    //两对（2P）：（不做解释,任意大小）		赔率：2	2	2
    //一对（1P）：（10或者10以上）			赔率：1	1	1



}
