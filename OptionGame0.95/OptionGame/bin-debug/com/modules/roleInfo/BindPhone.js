var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var BindPhone = (function (_super) {
    __extends(BindPhone, _super);
    function BindPhone() {
        var _this = _super.call(this) || this;
        _this.skinName = skins.bindPhone;
        _this.bindphone.addEventListener(egret.TouchEvent.TOUCH_TAP, _this.onbind, _this);
        return _this;
    }
    BindPhone.prototype.onbind = function () {
        if (this.parent) {
            this.parent.removeChild(this);
        }
    };
    return BindPhone;
}(eui.Component));
__reflect(BindPhone.prototype, "BindPhone");
//# sourceMappingURL=BindPhone.js.map