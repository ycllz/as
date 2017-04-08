/**
 *
 * @author xx 不可以自己另外实例化，作为单例使用
 *
 */
class PlayerData {
    public constructor() {
    }
    private static _instance = null;
    public static get instance(): PlayerData {
        if(PlayerData._instance == null) {
            PlayerData._instance = new PlayerData();
        }
        return PlayerData._instance;
    }

    private initData(){
        
    }

    public static playerID: number = 123456;
    public static playerName: string = "玩家名123";//玩家名称
    public static playerCredit: number = 1000;//金币兑换成的分数
    public static playerGold: number = 1000;//金币数量

    //return 金币：xxx
    static goldNumStr(): string {
        return "金币：" + PlayerData.playerGold.toString();
    }


}
