class GameModel {
	private static _instance: GameModel = null;

    public static get instance(): GameModel {
        if (this._instance == null) {
            this._instance = new GameModel();
        }
        return this._instance;
    }

	public constructor() {
		EventManager.instance.removeEventListener(GlobalEvents.ReceiveServerMsg, this.OnReceive, this);

        // EventManager.instance.addEventListener(PokerEvents.playGame,this.onPlayGame,this);
        EventManager.instance.addEventListener(GlobalEvents.ReceiveServerMsg, this.OnReceive, this);
	}

	/**
     * 
     *  收发游戏数据都在这里处理打开各个view，更新view 数据
     *  接到数据包， 接收到的 data 是已经解包的 proto 文件里的 message 对象
     **/
    private OnReceive(e: egret.Event) {
        // console.log("收到  e.data server : ", e.data);

        if (e && e.data) {
			switch (e.data.cid) {
				case EventConst.ON_ADDPOINTS_RESP_SC://请求上分,返回

					break;
			}
		}
	}
}