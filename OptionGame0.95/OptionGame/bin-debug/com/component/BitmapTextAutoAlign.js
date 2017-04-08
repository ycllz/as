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
 * @author xx 自动左或者右对齐的图片文本框, 根据保存的固定坐标，左或者右对齐，计算文本宽度来自动对齐
 *  比如 右对齐
 *   5000
 *   2000
 *    500
 *    200
 *     10
 *  或者左对齐
 *    5000
 *    2000
 *    500
 *    200
 *    10
 */
var BitmapTextAutoAlign = (function (_super) {
    __extends(BitmapTextAutoAlign, _super);
    /**
     *
     */
    function BitmapTextAutoAlign() {
        var _this = _super.call(this) || this;
        _this.m_fixedCoordinateX = 0; //固定的坐标 X
        _this.m_textAlign = egret.HorizontalAlign.LEFT;
        _this.m_bitmapText = null;
        _this.m_txtNum = 0;
        _this.m_bitmapText = new egret.BitmapText();
        _this.addChild(_this.m_bitmapText);
        return _this;
    }
    Object.defineProperty(BitmapTextAutoAlign.prototype, "bitmapText", {
        get: function () {
            return this.m_bitmapText;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BitmapTextAutoAlign.prototype, "fixedCoordinateX", {
        set: function (value) {
            this.m_fixedCoordinateX = value;
        },
        enumerable: true,
        configurable: true
    });
    BitmapTextAutoAlign.prototype.setTextAlign = function (value) {
        this.m_textAlign = value;
        this.m_bitmapText.textAlign = value;
    };
    //更新纹理，
    /**
     * 更新纹理， 会把数值一起更新了
     * */
    BitmapTextAutoAlign.prototype.updateTextTure = function (font_name, value) {
        if (value === void 0) { value = undefined; }
        this.bitmapText.font = RES.getRes(font_name);
        // RES.getRes(font_name);
        if (value == undefined) {
            this.text = this.m_bitmapText.text;
        }
        else {
            this.text = value.toString();
        }
    };
    Object.defineProperty(BitmapTextAutoAlign.prototype, "text", {
        /**
         * 可以从这里得到文本框最新的值，转 int 就可以了
         * */
        get: function () {
            return this.m_bitmapText.text;
        },
        set: function (value) {
            this.m_txtNum = parseInt(value);
            this.m_bitmapText.text = value;
            this.updateAlign();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BitmapTextAutoAlign.prototype, "realTextNumberValue", {
        get: function () {
            return parseInt(this.m_bitmapText.text);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BitmapTextAutoAlign.prototype, "textNumberValue", {
        /**
         * 返回的是设置 text 属性的时候的值，如果没有更新 text 属性，这个值就一直是最开始的
         * */
        get: function () {
            return this.m_txtNum;
        },
        enumerable: true,
        configurable: true
    });
    /**
     *  设置完文本后自动根据 对齐方式 跟 固定坐标 来调整 X 坐标... 默认右对齐
     */
    BitmapTextAutoAlign.prototype.updateAlign = function () {
        if (egret.HorizontalAlign.LEFT == this.m_textAlign) {
            this.m_bitmapText.x = this.m_fixedCoordinateX; // + this.m_bitmapText.textWidth;
        }
        else {
            this.x = this.m_fixedCoordinateX - this.m_bitmapText.textWidth;
        }
        this.addChild(this.m_bitmapText);
    };
    return BitmapTextAutoAlign;
}(egret.DisplayObjectContainer));
__reflect(BitmapTextAutoAlign.prototype, "BitmapTextAutoAlign");
//# sourceMappingURL=BitmapTextAutoAlign.js.map