var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var StringUtil = (function () {
    function StringUtil() {
    }
    /**
     *ÿ3λ����ʾ����
     * @param value
     * @return
     *
     */
    StringUtil.tranNumberToString = function (value, delim) {
        if (delim === void 0) { delim = "."; }
        var temp = String(value);
        var str = "";
        for (var i = 0; i < temp.length; i++) {
            var c = temp.charAt(temp.length - i - 1);
            str = c + str;
            if (Number(i + 1) % 3 == 0)
                str = delim + str;
        }
        if (str.charAt(0) == delim)
            str = str.slice(1);
        return str;
    };
    return StringUtil;
}());
__reflect(StringUtil.prototype, "StringUtil");
//# sourceMappingURL=StringUtil.js.map