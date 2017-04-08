var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/**
 * Created by xx on 2016-12-19.
 */
var EventManager = (function (_super) {
    __extends(EventManager, _super);
    function EventManager() {
        return _super.call(this) || this;
    }
    Object.defineProperty(EventManager, "instance", {
        get: function () {
            if (this._instance == undefined) {
                this._instance = new EventManager();
            }
            return this._instance;
        },
        enumerable: true,
        configurable: true
    });
    return EventManager;
}(egret.EventDispatcher));
EventManager._instance = undefined;
__reflect(EventManager.prototype, "EventManager");
//# sourceMappingURL=EventManager.js.map