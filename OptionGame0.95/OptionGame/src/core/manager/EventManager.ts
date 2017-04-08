/**
 * Created by xx on 2016-12-19.
 */
class EventManager extends egret.EventDispatcher {

    private static _instance: EventManager = undefined;

    public constructor() {
        super();
    }

    public static get instance(): EventManager {
        if(this._instance == undefined) {
            this._instance = new EventManager();
        }
        return this._instance;
    }

}