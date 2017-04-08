/**
 * Created by xx on 2016-12-19.
 */
class PokerEvents {

    //public const playGame = "pokerPlayerGame";

    public constructor() {

    }

    
    /**
     * 发去 gloabalmodel 问服务端取数据
     * */
    // public static playGame: string = "pokerPlayerGame";//抽牌

    // public static defen: string = "pokerDefen";//得分

    // public static bibei: string = "pokerDouble";//比倍

    /**
     * 还在游戏中的时候退出，服务端自动把 分数 credit 换成 金币
     * 
    */
    public static breakGame: string = "pokerBreakGame";//在游戏中的时候中断游戏，丢失抽牌赢得的分数


    /**
     * 服务端返回数据后，发消息更新界面
     * */
    public static updatePokers: string = "pokerUpdataPokers";//抽牌返回

    public static updateGameView:string = "pokerUpdataGameView";//更新界面上的 金币 分数；上下分，押分，比倍，得分 之后都用这个通知更新

    public static doublere:string = "doublere";

    public static defen:string = "pokerdefen";


    public static startGame:string = "pokerStartGame";//用于进房间后，选择机器的时候，如果机器有人，而且还是自己，然后就直接进



    /**
     * 前端内部使用，切换界面
     * */
    //gameview 包含 betview doubleview
    public static openGameView: string = "pokerOpenGameView";//从比倍返回抽奖
    public static openBetView: string = "pokerOpenBetView";//押注的显示界面
    public static openDoubleView: string = "pokeyOpenDoubleView";//跳到比倍界面

    public static intoPokerRoom: string = "pokerIntoPokerRoom";//进入房间

    public static openSignupView: string = "pokerOpenSignupView";//打开注册界面


    public static setDoubleViewBtnState: string = "pokerSetDoubleViewBtnState";


    //test
    // public static getcredit: string = "testgetcredit"//翻倍猜大小之后，把得到的分加到 credit


    //按得分按钮 需要滚动数字
    // public static runNum:string = "pokerRunNum";
    // public static runNumOver:string = "pokerRunNumOver";


}