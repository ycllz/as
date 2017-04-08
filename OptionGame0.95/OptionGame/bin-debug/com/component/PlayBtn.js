var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/**
 *
 * @author
 *
 */
var PlayBtn = (function (_super) {
    __extends(PlayBtn, _super);
    /**
     * txtTexttureName  按钮的文字图片的名称
     * */
    function PlayBtn(enableTTname, txtTexttureName, disableTTname, downTTname) {
        var _this = _super.call(this) || this;
        _this.btn = null;
        _this.txt = null;
        _this.enableTextTureName = "";
        _this.disableTextTureName = "";
        _this.downTextTureName = "";
        _this.btnTouchCallBack = null;
        //用来识别按钮
        _this.btnName = "";
        //唯一识别码
        _this.m_btnId = 0;
        _this.enableTextTureName = enableTTname;
        _this.disableTextTureName = disableTTname;
        _this.downTextTureName = downTTname;
        _this.btnName = txtTexttureName;
        _this.btn = new btns.BtnBmTf(enableTTname, "");
        _this.addChild(_this.btn);
        var tt = RES.getRes(txtTexttureName);
        var bmName = new egret.Bitmap(tt);
        bmName.x = _this.btn.x + _this.btn.width + 5;
        bmName.y = _this.btn.y + 8;
        _this.addChild(bmName);
        _this.txt = bmName;
        return _this;
    }
    Object.defineProperty(PlayBtn.prototype, "btnId", {
        get: function () {
            return this.m_btnId;
        },
        set: function (value) {
            this.m_btnId = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PlayBtn.prototype, "width", {
        get: function () {
            //console.log(this.btn.width + this.txt.width);
            if (this.btn != null && this.txt != null) {
                return this.btn.width + this.txt.width;
            }
            return 145;
        },
        enumerable: true,
        configurable: true
    });
    PlayBtn.prototype.setBtnState = function (enableTouch, callback, thisobj) {
        this.thisobj = thisobj;
        this.btn.touchEnabled = enableTouch ? true : false;
        this.btnTouchCallBack = callback;
        // this.btn.updateBtn(enableTouch ? this.enableTextTureName : this.disableTextTureName);
        if (true == this.btn.touchEnabled) {
            this.btn.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouch, this);
            this.btn.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onBegin, this);
            this.btn.removeEventListener(egret.TouchEvent.TOUCH_END, this.onEnd, this);
            this.btn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouch, this);
            this.btn.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onBegin, this);
            this.btn.addEventListener(egret.TouchEvent.TOUCH_END, this.onEnd, this);
        }
        else {
            this.btn.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouch, this);
            this.btn.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onBegin, this);
            this.btn.removeEventListener(egret.TouchEvent.TOUCH_END, this.onEnd, this);
        }
    };
    PlayBtn.prototype.onTouch = function () {
        //        console.log("touch enabled");
        if (this.btnTouchCallBack) {
            this.btnTouchCallBack.apply(this.thisobj, [this.btnName]);
        }
    };
    PlayBtn.prototype.onBegin = function () {
        // this.btn.updateBtn(this.downTextTureName);
    };
    PlayBtn.prototype.onEnd = function () {
        // this.btn.updateBtn(this.enableTextTureName);
    };
    return PlayBtn;
}(egret.DisplayObjectContainer));
__reflect(PlayBtn.prototype, "PlayBtn");
//# sourceMappingURL=PlayBtn.js.map