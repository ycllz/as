/**
 * Created by Administrator on 2016/12/23 0023.
 */
var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var RulesTextField = (function (_super) {
    __extends(RulesTextField, _super);
    function RulesTextField() {
        var _this = _super.call(this) || this;
        _this.textFieldList = [];
        return _this;
    }
    RulesTextField.prototype.clean = function () {
    };
    /***
     *  分号冒号必须用英文字符
     *
     * "1:本游戏仅供会员休闲娱乐，严禁赌博之用途；2:在游戏过程中，如遇到爆币、涨币之现象属于机台故障，只能按游戏起始币数计算；"
     * separate to :
     *      [ [1:],[本游戏仅供会员休闲娱乐，严禁赌博之用途；] ]
     *      [ [2:], [在游戏过程中，如遇到爆币、涨币之现象属于机台故障，只能按游戏起始币数计算；] ]
     *      textColor: number,width: number,height: number,
     x: number,y: number,parent: egret.DisplayObjectContainer,bold: boolean=false,
     align: string = egret.HorizontalAlign.LEFT,alpha: number = 1, wordWrap:boolean=false,
     border:boolean=false
     * */
    RulesTextField.prototype.text = function (value, textfieldWidth, l_textSize, l_sep, eachStrSep, textColor, bold, align, wordWrap, alpha, border) {
        if (l_sep === void 0) { l_sep = "；"; }
        if (eachStrSep === void 0) { eachStrSep = "："; }
        if (textColor === void 0) { textColor = ColorUtil.white; }
        if (bold === void 0) { bold = false; }
        if (align === void 0) { align = egret.HorizontalAlign.LEFT; }
        if (wordWrap === void 0) { wordWrap = true; }
        if (alpha === void 0) { alpha = 1; }
        if (border === void 0) { border = false; }
        // let chatCode:number = l_sep.charCodeAt(0);
        var result = value.split(l_sep);
        var vgap = 7;
        for (var i = 0; i < result.length; i++) {
            var str = result[i];
            var eachStr = str.split(eachStrSep); //[1:本游戏仅供会员休闲娱乐，严禁赌博之用途；]
            var eachTxtArr = void 0;
            if (this.textFieldList[i]) {
                eachTxtArr = this.textFieldList[i];
                eachTxtArr[0].text = eachStr[0];
                eachTxtArr[1].text = eachStr[1];
            }
            else {
                eachTxtArr = [];
                eachTxtArr[0] = ObjectUtil.createTextField(eachStr[0] + eachStrSep, l_textSize, textColor, textfieldWidth, -1, 0, 0, this, bold, align, alpha, wordWrap, border);
                eachTxtArr[0].width = eachTxtArr[0].textWidth;
                eachTxtArr[0].x = 0;
                eachTxtArr[0].y = (i == 0) ? 0 : this.textFieldList[i - 1][1].y + this.textFieldList[i - 1][1].height + vgap;
                if (eachStr.length == 1) {
                    eachTxtArr[0].text = eachStr[0];
                    eachTxtArr[0].x = textfieldWidth - eachTxtArr[0].width;
                    eachTxtArr[0].y = (i == 0) ? 0 : this.textFieldList[i - 1][1].y + this.textFieldList[i - 1][1].height + 20 + vgap;
                }
                if (eachStr.length == 2) {
                    eachTxtArr[1] = ObjectUtil.createTextField(eachStr[1], l_textSize, textColor, textfieldWidth, -1, 0, 0, this, bold, align, alpha, wordWrap, border);
                    eachTxtArr[1].x = (i == 0) ? eachTxtArr[0].width : this.textFieldList[i - 1][1].x;
                    eachTxtArr[1].y = (i == 0) ? 0 : this.textFieldList[i - 1][1].y + this.textFieldList[i - 1][1].height + vgap;
                    this.textFieldList[i] = eachTxtArr;
                }
            }
        }
    };
    return RulesTextField;
}(egret.DisplayObjectContainer));
__reflect(RulesTextField.prototype, "RulesTextField");
//# sourceMappingURL=RulesTextField.js.map