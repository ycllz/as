var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
/**
 *
 * @author
 *
 */
var TimerUtil = (function () {
    function TimerUtil(delay, repeatCount) {
        if (repeatCount === void 0) { repeatCount = -1; }
        this.timer = null;
        this.callbackList = [];
        this.timer = new egret.Timer(delay, repeatCount);
        this.timer.addEventListener(egret.TimerEvent.TIMER, this.onTimer, this);
    }
    TimerUtil.prototype.add = function (key, callback) {
        if (!this.callbackList[key]) {
            this.callbackList[key] = callback;
        }
    };
    TimerUtil.prototype.remove = function (key) {
        if (this.callbackList[key]) {
            this.callbackList[key] = null;
            delete this.callbackList[key];
        }
    };
    TimerUtil.prototype.run = function () {
        this.timer.stop();
        this.timer.start();
    };
    TimerUtil.prototype.stopTm = function () {
        if (this.timer.running)
            this.timer.stop();
    };
    TimerUtil.prototype.onTimer = function () {
        for (var i = 0; i < this.callbackList.length; i++) {
            if (this.callbackList[i] && (this.callbackList[i] instanceof Function)) {
                this.callbackList[i]();
            }
        }
    };
    return TimerUtil;
}());
__reflect(TimerUtil.prototype, "TimerUtil");
//# sourceMappingURL=TimerUtil.js.map