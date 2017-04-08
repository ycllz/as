var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
/**
 *
 * @author
 *
 */
var ObjectUtil = (function () {
    function ObjectUtil() {
    }
    ObjectUtil.createBitMapText = function (font_name, txt, parent, x, y, align) {
        if (parent === void 0) { parent = null; }
        if (x === void 0) { x = 0; }
        if (y === void 0) { y = 0; }
        if (align === void 0) { align = egret.HorizontalAlign.RIGHT; }
        var bmt = new egret.BitmapText();
        bmt.textAlign = align;
        bmt.font = RES.getRes(font_name);
        bmt.text = txt;
        bmt.x = x;
        bmt.y = y;
        if (parent != null) {
            parent.addChild(bmt);
        }
        //console.log("obj util : ", bmt);
        return bmt;
    };
    ObjectUtil.createTextField = function (text, size, textColor, width, height, x, y, parent, bold, align, alpha, wordWrap, border, pw, type) {
        if (bold === void 0) { bold = false; }
        if (align === void 0) { align = egret.HorizontalAlign.LEFT; }
        if (alpha === void 0) { alpha = 1; }
        if (wordWrap === void 0) { wordWrap = false; }
        if (border === void 0) { border = false; }
        if (pw === void 0) { pw = false; }
        if (type === void 0) { type = egret.TextFieldType.DYNAMIC; }
        var textfield = new egret.TextField();
        textfield.width = width;
        if (height > 0) {
            textfield.height = height;
        }
        textfield.size = size;
        textfield.textColor = textColor;
        textfield.x = x;
        textfield.y = y;
        textfield.text = text;
        textfield.textAlign = align;
        textfield.alpha = alpha;
        textfield.bold = bold;
        textfield.border = border;
        textfield.displayAsPassword = pw;
        textfield.type = type;
        /*textfield.border = true;
        textfield.borderColor = 0xff0000;*/
        parent.addChild(textfield);
        return textfield;
    };
    /**
     * fixedCoordinateX 固定的竖直坐标, 就是 X 坐标
     * **/
    ObjectUtil.createBitMapTextAutoAlign = function (font_name, txt, parent, fixedCoordinateX, y, letterSpacing, align) {
        if (parent === void 0) { parent = null; }
        if (fixedCoordinateX === void 0) { fixedCoordinateX = 0; }
        if (y === void 0) { y = 0; }
        if (letterSpacing === void 0) { letterSpacing = 0; }
        if (align === void 0) { align = egret.HorizontalAlign.RIGHT; }
        var bmt = new BitmapTextAutoAlign();
        bmt.setTextAlign(align);
        bmt.bitmapText.font = RES.getRes(font_name);
        //console.log( "RES.getRes(font_name) ", RES.getRes(font_name) );
        bmt.fixedCoordinateX = fixedCoordinateX;
        bmt.bitmapText.y = y;
        bmt.bitmapText.letterSpacing = letterSpacing;
        bmt.text = txt;
        if (parent != null) {
            parent.addChild(bmt);
        }
        //console.log("obj util : ", bmt);
        return bmt;
    };
    ObjectUtil.createBitmapByName = function (name, x, y, paren, height, width, scalex, scaley) {
        if (height === void 0) { height = -1; }
        if (width === void 0) { width = -1; }
        if (scalex === void 0) { scalex = -1; }
        if (scaley === void 0) { scaley = -1; }
        var result = new egret.Bitmap();
        var texture = RES.getRes(name);
        result.texture = texture;
        result.x = x;
        result.y = y;
        if (height > 0) {
            result.height = height;
        }
        if (width > 0) {
            result.width = width;
        }
        if (scalex > 0) {
            result.scaleX = scalex;
        }
        if (scaley > 0) {
            result.scaleY = scaley;
        }
        paren.addChild(result);
        return result;
    };
    //把显示对象按照左边坐标开始，右边的坐标结束，均匀排布
    ObjectUtil.horizontalLayout = function (disObjList, leftXcoord, rightXcoord) {
        var howFarAway = rightXcoord - leftXcoord;
        var eachWidth = howFarAway / disObjList.length;
        var overWidth = eachWidth - disObjList[0].width;
        var realWidth = (overWidth / disObjList.length) + eachWidth;
        for (var i = 0; i < disObjList.length; i++) {
            var obj = disObjList[i];
            obj.x = leftXcoord + realWidth * i;
        }
    };
    //
    /****
     * 把显示对象按照左边坐标开始，右边的坐标结束，均匀排布，行列排布
     * @param column 列数
     *
    */
    ObjectUtil.tileList = function (disObjList, leftXcoord, rightXcoord, column) {
        var howFarAway = rightXcoord - leftXcoord;
        var eachWidth = howFarAway / disObjList.length;
        var overWidth = eachWidth - disObjList[0].width;
        var realWidth = (overWidth / disObjList.length) + eachWidth;
        for (var i = 0; i < disObjList.length; i++) {
            var obj = disObjList[i];
            obj.x = leftXcoord + realWidth * i;
        }
    };
    /**
     * 对象列表中的对象的图像资源以及加载了的，已经知道了具体宽高
     *
     * @param vgap 横向间隔
     * @param hgap 纵向间隔
    */
    ObjectUtil.tileDisplayObjectList = function (disObjList, column, vgap, hgap) {
        var shang = 0; //
        var yushu = 0; //
        for (var i = 0; i < disObjList.length; i++) {
            var obj = disObjList[i];
            shang = Math.floor(i / column); //set y coord, calculate this object in which line
            yushu = Math.floor(i % column); //set x coord
            obj.x = (obj.width + vgap) * yushu;
            obj.y = (obj.height + hgap) * shang;
            if (obj.parent) {
                obj.parent.addChild(obj);
            }
        }
    };
    return ObjectUtil;
}());
__reflect(ObjectUtil.prototype, "ObjectUtil");
//# sourceMappingURL=ObjectUtil.js.map