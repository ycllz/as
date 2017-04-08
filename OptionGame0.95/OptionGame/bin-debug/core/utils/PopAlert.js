var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var PopAlert = (function (_super) {
    __extends(PopAlert, _super);
    function PopAlert() {
        var _this = _super.call(this) || this;
        _this.bgWidth = -1;
        _this.bgHeight = -1;
        _this.txtSize = 24;
        _this.text = "";
        _this.autoclose = false;
        _this.okCallBack = undefined;
        _this.context = undefined;
        _this.touchEnabled = true;
        return _this;
    }
    Object.defineProperty(PopAlert, "instance", {
        get: function () {
            if (this._instance == undefined) {
                this._instance = new PopAlert();
            }
            return this._instance;
        },
        enumerable: true,
        configurable: true
    });
    PopAlert.prototype.hide = function () {
        this.okBtn.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onOk, this);
        this.cancelBtn.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.oncancel, this);
        if (this.parent) {
            this.parent.removeChild(this);
        }
    };
    PopAlert.prototype.show = function (parent, texttureName, showTxt, txtSize, bgwidth, bgheight, autoclose, okCallBack, context) {
        if (txtSize === void 0) { txtSize = 24; }
        if (bgwidth === void 0) { bgwidth = -1; }
        if (bgheight === void 0) { bgheight = -1; }
        if (autoclose === void 0) { autoclose = false; }
        if (okCallBack === void 0) { okCallBack = undefined; }
        if (context === void 0) { context = undefined; }
        this.okCallBack = okCallBack;
        this.context = context;
        this.initRes(parent, texttureName, showTxt, txtSize, bgwidth, bgheight, autoclose);
        // this.tipsTxt.removeEventListener(egret.Event.CHANGE, this.textReturn, this);
        // this.tipsTxt.addEventListener(egret.Event.CHANGE, this.textReturn, this);
    };
    PopAlert.prototype.initRes = function (parent, texttureName, showTxt, txtSize, bgwidth, bgheight, autoclose) {
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
    // private textReturn():string{
    //     var txt:string = "";
    //     return txt;
    // }
    PopAlert.prototype.onCloseTimeout = function () {
        egret.clearTimeout(this.closeTimeout);
        this.hide();
    };
    PopAlert.prototype.onLoadOver = function () {
        if (this.okBtn == undefined) {
            this.bg = ObjectUtil.createBitmapByName("tipsbg", 0, 0, this);
            this.rescontainer = new egret.DisplayObjectContainer();
            this.addChild(this.rescontainer);
            //console.log("-----------------> ", this.bg.width, this.bg.height);
            if (this.bgHeight > 0) {
                this.bg.scaleY = this.bgHeight / this.bg.height;
            }
            if (this.bgWidth > 0) {
                this.bg.scaleX = this.bgWidth / this.bg.width;
            }
            //console.log("-----------------> ", this.bg.width, this.bg.height);
            this.okBtn = new ButtonX(); //new btns.BtnBmBm("sokbtn", "okbtntxt");
            this.okBtn.setSkin("sokbtn", "okbtntxt");
            this.rescontainer.addChild(this.okBtn);
            this.cancelBtn = new ButtonX(); //new btns.BtnBmBm("scancelbtn", "cancelbtntxt");
            this.cancelBtn.setSkin("scancelbtn", "cancelbtntxt");
            this.rescontainer.addChild(this.cancelBtn);
            if (this.bgWidth <= 0) {
                this.bgWidth = this.bg.width;
            }
            if (this.bgHeight <= 0) {
                this.bgHeight = this.bg.height;
            }
            this.tipsTxt = ObjectUtil.createTextField(this.text, this.txtSize, ColorUtil.white, this.bgWidth - 100, this.txtSize + 5, 0, 0, this.rescontainer, true, egret.HorizontalAlign.CENTER, 1, true, false);
            utils.setProps(this.tipsTxt, { x: this.bg.x + 50, y: this.bg.y + 80 });
            var inputtxtbg = ObjectUtil.createBitmapByName("sinputtxtbg", this.tipsTxt.x, this.tipsTxt.y + this.tipsTxt.height + 15, this.rescontainer);
            inputtxtbg.height = this.tipsTxt.height + 20;
            inputtxtbg.width = this.tipsTxt.width;
            this.inputTxt = ObjectUtil.createTextField("123456", this.txtSize, ColorUtil.black, this.tipsTxt.width, this.txtSize + 5, inputtxtbg.x + 7, inputtxtbg.y + 7, this.rescontainer, true, egret.HorizontalAlign.LEFT, 1, true, false, true, egret.TextFieldType.INPUT);
            this.inputTxt.restrict = "^\u4E00-\u9FA5";
            this.okBtn.scaleX = 0.7;
            this.okBtn.scaleY = 0.7;
            this.cancelBtn.scaleX = 0.7;
            this.cancelBtn.scaleY = 0.7;
            utils.setProps(this.okBtn, { x: this.inputTxt.x, y: this.inputTxt.y + this.inputTxt.height + 30 });
            utils.setProps(this.cancelBtn, { x: this.okBtn.x + this.okBtn.width + 15, y: this.okBtn.y });
        }
        this.okBtn.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onOk, this);
        this.cancelBtn.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.oncancel, this);
        this.okBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onOk, this);
        this.cancelBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.oncancel, this);
        this.x = (this.stage.stageWidth >> 1) - (this.bgWidth >> 1);
        this.y = (this.stage.stageHeight >> 1) - (this.bgHeight >> 1);
        this.tipsTxt.text = this.text;
        this.visible = true;
    };
    PopAlert.prototype.oncancel = function () {
        this.hide();
    };
    PopAlert.prototype.onOk = function () {
        if (this.okCallBack != undefined) {
            this.okCallBack.apply(this.context, [this.tipsTxt.text]);
        }
        this.hide();
    };
    return PopAlert;
}(egret.DisplayObjectContainer));
__reflect(PopAlert.prototype, "PopAlert");
//# sourceMappingURL=PopAlert.js.map