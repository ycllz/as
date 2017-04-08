var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var TipShow = (function (_super) {
    __extends(TipShow, _super);
    function TipShow() {
        var _this = _super.call(this) || this;
        _this.init();
        return _this;
    }
    TipShow.prototype.init = function () {
        this.textTip = new egret.TextField;
        utils.setProps(this.textTip, {});
        this.imgTip = new egret.Bitmap();
        this.addChild(this.imgTip);
        this.addEventListener(egret.TouchEvent.TOUCH_END, this.funTouchEnd, this);
    };
    TipShow.prototype.funTouchEnd = function () {
        this.funTouch.call(this.context);
        this.onRem();
    };
    TipShow.prototype.updateDraw = function (alpha, color) {
        this.graphics.clear();
        this.graphics.beginFill(color, alpha);
        this.graphics.drawRect(0, 0, this.parent.width, this.parent.height);
        this.graphics.endFill();
    };
    TipShow.prototype.timeoutTouch = function (funCall, context) {
        var _this = this;
        this.funTouch = funCall;
        this.context = context;
        this.touchEnabled = false;
        egret.setTimeout(function () {
            _this.touchEnabled = true;
        }, this, 1500);
    };
    TipShow.prototype.onRem = function () {
        this.parent.removeChild(this);
    };
    /**
     * API
     */
    TipShow.prototype.onAdd = function (container, funCall, context, alpha, color) {
        if (alpha === void 0) { alpha = 0.5; }
        if (color === void 0) { color = 0x000000; }
        container.addChild(this);
        this.updateDraw(alpha, color);
        this.timeoutTouch(funCall, context);
    };
    TipShow.prototype.setImg = function (nameTexture, objProps, arrAnchor) {
        if (arrAnchor === void 0) { arrAnchor = [0, 0]; }
        utils.setProps(this.imgTip, { texture: RES.getRes(nameTexture) });
        utils.setProps(this.imgTip, objProps, arrAnchor);
    };
    TipShow.getInst = function () {
        if (!this.inst)
            this.inst = new TipShow;
        return this.inst;
    };
    return TipShow;
}(egret.Sprite));
__reflect(TipShow.prototype, "TipShow");
//# sourceMappingURL=TipShow.js.map