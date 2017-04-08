var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var DepotConfig = (function () {
    function DepotConfig() {
    }
    Object.defineProperty(DepotConfig, "instance", {
        get: function () {
            if (!DepotConfig._instance) {
                DepotConfig._instance = new DepotConfig();
            }
            return DepotConfig._instance;
        },
        enumerable: true,
        configurable: true
    });
    return DepotConfig;
}());
__reflect(DepotConfig.prototype, "DepotConfig");
//# sourceMappingURL=DepotConfig.js.map