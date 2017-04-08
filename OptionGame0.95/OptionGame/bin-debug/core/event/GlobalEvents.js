var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
/**
 *
 * @author
 *
 */
var GlobalEvents = (function () {
    function GlobalEvents() {
    }
    return GlobalEvents;
}());
//收到服务端消息,解包后派发这条消息，携带了 proto 数据对象
GlobalEvents.ReceiveServerMsg = "gameReceiveServerMsg";
__reflect(GlobalEvents.prototype, "GlobalEvents");
//# sourceMappingURL=GlobalEvents.js.map