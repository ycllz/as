var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
/**
 * Created by xx on 2016-12-19.
 */
var PokerEvents = (function () {
    //public const playGame = "pokerPlayerGame";
    function PokerEvents() {
    }
    return PokerEvents;
}());
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
PokerEvents.breakGame = "pokerBreakGame"; //在游戏中的时候中断游戏，丢失抽牌赢得的分数
/**
 * 服务端返回数据后，发消息更新界面
 * */
PokerEvents.updatePokers = "pokerUpdataPokers"; //抽牌返回
PokerEvents.updateGameView = "pokerUpdataGameView"; //更新界面上的 金币 分数；上下分，押分，比倍，得分 之后都用这个通知更新
PokerEvents.doublere = "doublere";
PokerEvents.defen = "pokerdefen";
PokerEvents.startGame = "pokerStartGame"; //用于进房间后，选择机器的时候，如果机器有人，而且还是自己，然后就直接进
/**
 * 前端内部使用，切换界面
 * */
//gameview 包含 betview doubleview
PokerEvents.openGameView = "pokerOpenGameView"; //从比倍返回抽奖
PokerEvents.openBetView = "pokerOpenBetView"; //押注的显示界面
PokerEvents.openDoubleView = "pokeyOpenDoubleView"; //跳到比倍界面
PokerEvents.intoPokerRoom = "pokerIntoPokerRoom"; //进入房间
PokerEvents.openSignupView = "pokerOpenSignupView"; //打开注册界面
PokerEvents.setDoubleViewBtnState = "pokerSetDoubleViewBtnState";
__reflect(PokerEvents.prototype, "PokerEvents");
//# sourceMappingURL=PokerEvents.js.map