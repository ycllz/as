var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var NetEventDispatcher = (function () {
    function NetEventDispatcher() {
    }
    Object.defineProperty(NetEventDispatcher.prototype, "instance", {
        get: function () {
            if (NetEventDispatcher._instance == undefined) {
                NetEventDispatcher._instance = new NetEventDispatcher();
            }
            return NetEventDispatcher._instance;
        },
        enumerable: true,
        configurable: true
    });
    return NetEventDispatcher;
}());
__reflect(NetEventDispatcher.prototype, "NetEventDispatcher");
//# sourceMappingURL=NetEventDispatcher.js.map