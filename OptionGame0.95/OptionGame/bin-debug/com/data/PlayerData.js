var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
/**
 *
 * @author xx 不可以自己另外实例化，作为单例使用
 *
 */
var PlayerData = (function () {
    function PlayerData() {
    }
    Object.defineProperty(PlayerData, "instance", {
        get: function () {
            if (PlayerData._instance == null) {
                PlayerData._instance = new PlayerData();
            }
            return PlayerData._instance;
        },
        enumerable: true,
        configurable: true
    });
    PlayerData.prototype.initData = function () {
    };
    //return 金币：xxx
    PlayerData.goldNumStr = function () {
        return "金币：" + PlayerData.playerGold.toString();
    };
    return PlayerData;
}());
PlayerData._instance = null;
PlayerData.playerID = 123456;
PlayerData.playerName = "玩家名123"; //玩家名称
PlayerData.playerCredit = 1000; //金币兑换成的分数
PlayerData.playerGold = 1000; //金币数量
__reflect(PlayerData.prototype, "PlayerData");
//# sourceMappingURL=PlayerData.js.map