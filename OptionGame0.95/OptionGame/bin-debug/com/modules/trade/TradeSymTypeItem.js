var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
// TypeScript file
var TradeSymTypeItem = (function (_super) {
    __extends(TradeSymTypeItem, _super);
    function TradeSymTypeItem() {
        var _this = _super.call(this) || this;
        _this.skinName = skins.tradeSymTypeItemSkin;
        return _this;
    }
    TradeSymTypeItem.prototype.data = function (obj) {
    };
    return TradeSymTypeItem;
}(eui.Component));
__reflect(TradeSymTypeItem.prototype, "TradeSymTypeItem");
//# sourceMappingURL=TradeSymTypeItem.js.map