var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var ButtonX = (function (_super) {
    __extends(ButtonX, _super);
    function ButtonX() {
        var _this = _super.call(this) || this;
        _this.skinMap = [];
        _this._hasAllSkin = false;
        return _this;
    }
    ButtonX.prototype.setSkin = function (normal, imgLabel, text, over, down, disabled) {
        if (normal === void 0) { normal = undefined; }
        if (imgLabel === void 0) { imgLabel = undefined; }
        if (text === void 0) { text = ""; }
        if (over === void 0) { over = undefined; }
        if (down === void 0) { down = undefined; }
        if (disabled === void 0) { disabled = undefined; }
        this.skinMap[ButtonXState.STATE_NORMAL] = normal;
        if (over == undefined) {
            this.skinMap[ButtonXState.STATE_OVER] = normal;
            this._hasAllSkin = false;
        }
        else {
            this.skinMap[ButtonXState.STATE_OVER] = over;
            this._hasAllSkin = true;
        }
        if (down == undefined) {
            this.skinMap[ButtonXState.STATE_DOWN] = normal;
            this._hasAllSkin = false;
        }
        else {
            this.skinMap[ButtonXState.STATE_DOWN] = down;
            this._hasAllSkin = true;
        }
        if (disabled == undefined) {
            this.skinMap[ButtonXState.STATE_DISABLE] = normal;
            this._hasAllSkin = false;
        }
        else {
            this.skinMap[ButtonXState.STATE_DISABLE] = disabled;
            this._hasAllSkin = true;
        }
        // this.skinMap[ButtonXState.STATE_DISABLE] = disabled;
        this._image = new egret.Bitmap();
        this._imgLabel = new egret.Bitmap();
        this._label = new egret.TextField();
        this._label.width = 100;
        this._label.height = 28;
        this._label.size = 24;
        this.addChild(this._image); //按钮图片皮肤
        this.addChild(this._imgLabel); //按钮的图片文字
        this.addChild(this._label); //按钮文本文字
        this.state = ButtonXState.STATE_NORMAL; //默认常态
        this.imgLabel = imgLabel; //取皮肤
        this.text = text;
        this.touchEnabled = true;
        this._image.touchEnabled = true;
        this._image.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onTouchEventX, this);
        this._image.addEventListener(egret.TouchEvent.TOUCH_END, this.onTouchEventX, this);
        // this._image.addEventListener(egret.TouchEvent.TOUCH_MOVE, this.onTouchEventX, this);
        // console.log("init over . ", this.x, this.y);
    };
    /**
     * Image 皮肤使用完，这里会把他清出显示列表
    */
    ButtonX.prototype.setSkinUseImage = function (normal, imgLabel, text, over, down, disabled) {
        if (normal === void 0) { normal = undefined; }
        if (imgLabel === void 0) { imgLabel = undefined; }
        if (text === void 0) { text = ""; }
        if (over === void 0) { over = undefined; }
        if (down === void 0) { down = undefined; }
        if (disabled === void 0) { disabled = undefined; }
        var normalSkin = normal.source;
        this.x = normal.x;
        this.y = normal.y;
        if (normal && normal.parent) {
            normal.parent.removeChild(normal);
        }
        var imgLabelSkin;
        if (imgLabel) {
            imgLabelSkin = imgLabel.source;
            if (imgLabel.parent) {
                imgLabel.parent.removeChild(imgLabel);
            }
        }
        var overSkin;
        if (over) {
            overSkin = over.source;
            if (overSkin.parent) {
                overSkin.parent.removeChild(overSkin);
            }
        }
        var downSkin;
        if (down) {
            downSkin = down.source;
            if (downSkin.parent) {
                downSkin.parent.removeChild(downSkin);
            }
        }
        var disabledSkin;
        if (disabled) {
            disabledSkin = disabled.source;
            if (disabledSkin.parent) {
                disabledSkin.parent.removeChild(disabledSkin);
            }
        }
        this.initSkin(normalSkin, imgLabelSkin, text, overSkin, downSkin, disabledSkin);
    };
    ButtonX.prototype.initSkin = function (normal, imgLabel, text, over, down, disabled) {
        if (normal === void 0) { normal = undefined; }
        if (imgLabel === void 0) { imgLabel = undefined; }
        if (text === void 0) { text = ""; }
        if (over === void 0) { over = undefined; }
        if (down === void 0) { down = undefined; }
        if (disabled === void 0) { disabled = undefined; }
        this.skinMap[ButtonXState.STATE_NORMAL] = normal;
        if (over == undefined) {
            this.skinMap[ButtonXState.STATE_OVER] = normal;
            this._hasAllSkin = false;
        }
        else {
            this.skinMap[ButtonXState.STATE_OVER] = over;
            this._hasAllSkin = true;
        }
        if (down == undefined) {
            this.skinMap[ButtonXState.STATE_DOWN] = normal;
            this._hasAllSkin = false;
        }
        else {
            this.skinMap[ButtonXState.STATE_DOWN] = down;
            this._hasAllSkin = true;
        }
        if (disabled == undefined) {
            this.skinMap[ButtonXState.STATE_DISABLE] = normal;
            this._hasAllSkin = false;
        }
        else {
            this.skinMap[ButtonXState.STATE_DISABLE] = disabled;
            this._hasAllSkin = true;
        }
        // this.skinMap[ButtonXState.STATE_DISABLE] = disabled;
        this._image = new egret.Bitmap();
        this._imgLabel = new egret.Bitmap();
        this._label = new egret.TextField();
        this._label.width = 100;
        this._label.height = 28;
        this._label.size = 24;
        this.addChild(this._image); //按钮图片皮肤
        this.addChild(this._imgLabel); //按钮的图片文字
        this.addChild(this._label); //按钮文本文字
        this.state = ButtonXState.STATE_NORMAL; //默认常态
        this.imgLabel = imgLabel; //取皮肤
        this.text = text;
        this.touchEnabled = true;
        this._image.touchEnabled = true;
        this._image.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onTouchEventX, this);
        this._image.addEventListener(egret.TouchEvent.TOUCH_END, this.onTouchEventX, this);
    };
    ButtonX.prototype.onTouchEventX = function (e) {
        switch (e.type) {
            case egret.TouchEvent.TOUCH_BEGIN:
                this.state = ButtonXState.STATE_DOWN;
                break;
            case egret.TouchEvent.TOUCH_END:
                this.state = ButtonXState.STATE_NORMAL;
                break;
            case egret.TouchEvent.TOUCH_MOVE:
                break;
        }
    };
    Object.defineProperty(ButtonX.prototype, "label", {
        get: function () {
            return this._label;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ButtonX.prototype, "imgLabel", {
        set: function (value) {
            var texture = RES.getRes(value);
            this._imgLabel.texture = texture;
            this._imgLabel.x = (this._image.width >> 1) - (this._imgLabel.width >> 1);
            this._imgLabel.y = (this._image.height >> 1) - (this._imgLabel.height >> 1);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ButtonX.prototype, "text", {
        set: function (value) {
            this._label.text = value;
            this._label.x = (this._image.width >> 1) - (this._label.width >> 1);
            this._label.y = (this._image.height >> 1) - (this._label.height >> 1);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ButtonX.prototype, "enable", {
        set: function (value) {
            if (value == true) {
                this.state = ButtonXState.STATE_NORMAL;
            }
            else if (value == false) {
                this.state = ButtonXState.STATE_DISABLE;
            }
            this._image.touchEnabled = value;
            this.touchEnabled = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ButtonX.prototype, "state", {
        set: function (value) {
            if ((this._image != undefined) && (this.skinMap[value] != undefined)) {
                var texture = RES.getRes(this.skinMap[value]);
                this._image.texture = texture;
                if (this._hasAllSkin == false && value != ButtonXState.STATE_NORMAL) {
                    this._image.scaleX = 0.9;
                    this._image.scaleY = 0.9;
                    this._imgLabel.scaleX = 0.9;
                    this._imgLabel.scaleY = 0.9;
                    this._label.scaleX = 0.95;
                    this._label.scaleY = 0.95;
                }
                else {
                    this._image.scaleX = 1;
                    this._image.scaleY = 1;
                    this._imgLabel.scaleX = 1;
                    this._imgLabel.scaleY = 1;
                    this._label.scaleX = 1;
                    this._label.scaleY = 1;
                }
            }
            // console.log("init over . ", this._image.x, this._image.y);
        },
        enumerable: true,
        configurable: true
    });
    ButtonX.prototype.dispose = function () {
        this._image.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onTouchEventX, this);
        this._image.removeEventListener(egret.TouchEvent.TOUCH_END, this.onTouchEventX, this);
        // this._image.removeEventListener(egret.TouchEvent.TOUCH_MOVE, this.onTouchEventX, this);
    };
    return ButtonX;
}(egret.DisplayObjectContainer));
__reflect(ButtonX.prototype, "ButtonX");
//# sourceMappingURL=ButtonX.js.map