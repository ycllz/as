var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
/**
 * Created by xx on 2016-12-20.
 */
var ColorUtil = (function () {
    function ColorUtil() {
    }
    return ColorUtil;
}());
ColorUtil.white = 0xffffff;
ColorUtil.black = 0x000000;
ColorUtil.red = 0xff0000;
ColorUtil.lime = 0x00ff00;
ColorUtil.blue = 0x0000ff;
ColorUtil.gold = 0xffd700;
ColorUtil.yellow = 0xffff00;
__reflect(ColorUtil.prototype, "ColorUtil");
//# sourceMappingURL=ColorUtil.js.map