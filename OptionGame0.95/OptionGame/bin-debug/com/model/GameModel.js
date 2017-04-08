var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var GameModel = (function () {
    function GameModel() {
        EventManager.instance.removeEventListener(GlobalEvents.ReceiveServerMsg, this.OnReceive, this);
        // EventManager.instance.addEventListener(PokerEvents.playGame,this.onPlayGame,this);
        EventManager.instance.addEventListener(GlobalEvents.ReceiveServerMsg, this.OnReceive, this);
    }
    Object.defineProperty(GameModel, "instance", {
        get: function () {
            if (this._instance == null) {
                this._instance = new GameModel();
            }
            return this._instance;
        },
        enumerable: true,
        configurable: true
    });
    /**
     *
     *  收发游戏数据都在这里处理打开各个view，更新view 数据
     *  接到数据包， 接收到的 data 是已经解包的 proto 文件里的 message 对象
     **/
    GameModel.prototype.OnReceive = function (e) {
        // console.log("收到  e.data server : ", e.data);
        if (e && e.data) {
            switch (e.data.cid) {
                case EventConst.ON_ADDPOINTS_RESP_SC:
                    break;
            }
        }
    };
    return GameModel;
}());
GameModel._instance = null;
__reflect(GameModel.prototype, "GameModel");
//# sourceMappingURL=GameModel.js.map