var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var TradeSymbolItem = (function (_super) {
    __extends(TradeSymbolItem, _super);
    function TradeSymbolItem() {
        var _this = _super.call(this) || this;
        _this.skinName = skins.tradeSymbolItemSkin;
        _this.width = 296;
        _this.height = 102;
        return _this;
    }
    TradeSymbolItem.prototype.data = function (obj) {
        this.icon = RES.getRes("ico_1" + "_png");
        this.txt_symbolname.text = "银矿石";
        this.txt_symbolprice.text = "381,099";
        this.txt_symbolname.textColor = ColorUtil.red;
        this.txt_symbolprice.textColor = ColorUtil.red;
        this.img_flagdown.visible = false;
    };
    return TradeSymbolItem;
}(eui.Component));
__reflect(TradeSymbolItem.prototype, "TradeSymbolItem");
//# sourceMappingURL=TradeSymbolItem.js.map