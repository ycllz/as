var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var ShareMgr = (function () {
    function ShareMgr() {
        this.g_main = null;
        this.g_channel = null;
    }
    ShareMgr.getInstance = function () {
        if (ShareMgr.instance == null) {
            ShareMgr.instance = new ShareMgr();
        }
        return ShareMgr.instance;
    };
    return ShareMgr;
}());
ShareMgr.instance = null;
__reflect(ShareMgr.prototype, "ShareMgr");
//# sourceMappingURL=ShareMgr.js.map