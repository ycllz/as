var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/**
 * Created by xx on 2016-12-20.
 */
var Alert = (function (_super) {
    __extends(Alert, _super);
    function Alert() {
        var _this = _super.call(this) || this;
        _this.bgWidth = -1;
        _this.bgHeight = -1;
        _this.txtSize = 24;
        _this.text = "";
        _this.autoclose = false;
        _this.touchEnabled = true;
        return _this;
    }
    Object.defineProperty(Alert, "instance", {
        get: function () {
            if (this._instance == undefined) {
                this._instance = new Alert();
            }
            return this._instance;
        },
        enumerable: true,
        configurable: true
    });
    Alert.prototype.hide = function () {
        if (this.parent) {
            this.parent.removeChild(this);
        }
    };
    Alert.prototype.show = function (parent, texttureName, showTxt, txtSize, bgwidth, bgheight, autoclose) {
        if (txtSize === void 0) { txtSize = 24; }
        if (bgwidth === void 0) { bgwidth = -1; }
        if (bgheight === void 0) { bgheight = -1; }
        if (autoclose === void 0) { autoclose = false; }
        this.initRes(parent, texttureName, showTxt, txtSize, bgwidth, bgheight, autoclose);
    };
    Alert.prototype.initRes = function (parent, texttureName, showTxt, txtSize, bgwidth, bgheight, autoclose) {
        if (txtSize === void 0) { txtSize = 24; }
        if (bgwidth === void 0) { bgwidth = -1; }
        if (bgheight === void 0) { bgheight = -1; }
        if (autoclose === void 0) { autoclose = false; }
        parent.addChild(this);
        this.visible = false;
        this.text = showTxt;
        if (bgwidth > 0) {
            this.bgWidth = bgwidth;
        }
        if (bgheight > 0) {
            this.bgHeight = bgheight;
        }
        this.txtSize = txtSize;
        if (!this.okBtn) {
            RES.getResAsync(texttureName, this.onLoadOver, this);
        }
        else {
            this.onLoadOver();
        }
        if (autoclose) {
            this.closeTimeout = egret.setTimeout(this.onCloseTimeout, this, 1500);
        }
    };
    Alert.prototype.onCloseTimeout = function () {
        egret.clearTimeout(this.closeTimeout);
        this.hide();
    };
    Alert.prototype.onLoadOver = function () {
        if (!this.okBtn) {
            this.bg = ObjectUtil.createBitmapByName("tipsbg", 0, 0, this);
            //console.log("-----------------> ", this.bg.width, this.bg.height);
            if (this.bgHeight > 0) {
                this.bg.scaleY = this.bgHeight / this.bg.height;
            }
            if (this.bgWidth > 0) {
                this.bg.scaleX = this.bgWidth / this.bg.width;
            }
            //console.log("-----------------> ", this.bg.width, this.bg.height);
            this.okBtn = new btns.BtnBmBm("sokbtn", "okbtntxt");
            this.addChild(this.okBtn);
            if (this.bgWidth <= 0) {
                this.bgWidth = this.bg.width;
            }
            if (this.bgHeight <= 0) {
                this.bgHeight = this.bg.height;
            }
            this.tipsTxt = ObjectUtil.createTextField(this.text, this.txtSize, ColorUtil.white, this.bgWidth - 100, this.bgHeight - 160, 0, 0, this, true, egret.HorizontalAlign.CENTER, 1, true, false);
            utils.setProps(this.tipsTxt, { x: this.bg.x + 50, y: this.bg.y + 80 });
            utils.setProps(this.okBtn, { x: this.tipsTxt.x + (this.tipsTxt.width >> 1) - (this.okBtn.width >> 1),
                y: this.bgHeight - this.okBtn.height - 20 });
        }
        this.okBtn.ctrlTouch(true);
        this.okBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onOk, this);
        this.x = (this.stage.stageWidth >> 1) - (this.bgWidth >> 1);
        this.y = (this.stage.stageHeight >> 1) - (this.bgHeight >> 1);
        this.tipsTxt.text = this.text;
        this.visible = true;
    };
    Alert.prototype.onOk = function () {
        this.hide();
    };
    return Alert;
}(egret.DisplayObjectContainer));
__reflect(Alert.prototype, "Alert");
//# sourceMappingURL=Alert.js.map