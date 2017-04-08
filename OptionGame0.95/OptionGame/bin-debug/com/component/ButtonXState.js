var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var ButtonXState = (function () {
    function ButtonXState() {
    }
    return ButtonXState;
}());
ButtonXState.STATE_NORMAL = "normal";
ButtonXState.STATE_OVER = "over";
ButtonXState.STATE_DOWN = "down";
ButtonXState.STATE_DISABLE = "disable";
__reflect(ButtonXState.prototype, "ButtonXState");
//# sourceMappingURL=ButtonXState.js.map