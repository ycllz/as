var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var TimeFrame = (function () {
    function TimeFrame() {
        this.timer = undefined;
        this.callbackList = [];
    }
    Object.defineProperty(TimeFrame, "instance", {
        get: function () {
            if (this._instance == undefined) {
                this._instance = new TimeFrame();
            }
            return this._instance;
        },
        enumerable: true,
        configurable: true
    });
    TimeFrame.prototype.createTimer = function (delay, repeatCount) {
        if (delay === void 0) { delay = 1000; }
        if (repeatCount === void 0) { repeatCount = 0; }
        if (this.timer == undefined) {
            this.timer = new egret.Timer(delay, repeatCount);
            this.callbackList.length = 0;
        }
        this.timer.removeEventListener(egret.TimerEvent.TIMER, this.onTimer, this);
        this.timer.addEventListener(egret.TimerEvent.TIMER, this.onTimer, this);
    };
    // public add(key: string, callback: Function, l_context: any) {
    // 	var hasKey: boolean = false;
    // 	for (var i: number = 0; i < this.callbackList.length; i++) {
    // 		var obj = this.callbackList[i];
    // 		//console.log("obj 1111111111111 ", obj);
    // 		if (obj.key == key) {
    // 			hasKey = true;
    // 			//console.log("obj 22222222222 ", obj);
    // 			break;
    // 		}
    // 	}
    // 	if (hasKey == false) {
    // 		//console.log("add ------------------, ", this.callbackList );
    // 		this.callbackList.push({ key: key, func: callback, context: l_context });
    // 		this.run();
    // 	}
    // }
    TimeFrame.prototype.addOne = function (id, callback, thisobj) {
        var hasId = false;
        for (var i = 0; i < this.callbackList.length; i++) {
            var arr = this.callbackList[i];
            if (arr[0] == id) {
                hasId = true;
                break;
            }
        }
        if (hasId == false) {
            this.callbackList.push([id, callback, thisobj]);
            this.run();
        }
    };
    // public remove(key: string) {
    // 	let hasKey: boolean = false;
    // 	for (let i: number = 0; i < this.callbackList.length; i++) {
    // 		let obj = this.callbackList[i];
    // 		if (obj.key == key) {
    // 			hasKey = true;
    // 			//console.log(this.callbackList.splice(i, 1));
    // 			//console.log("left : ", this.callbackList);
    // 			break;
    // 		}
    // 	}
    // }
    TimeFrame.prototype.removeOne = function (id) {
        var hasId = false;
        for (var i = 0; i < this.callbackList.length; i++) {
            var arr = this.callbackList[i];
            if (arr[0] == id) {
                hasId = true;
                //console.log(this.callbackList.splice(i, 1));
                break;
            }
        }
    };
    TimeFrame.prototype.run = function () {
        if (this.timer && this.timer.running) {
            return;
        }
        // //console.log("run timer ............................");
        this.createTimer();
        this.timer.stop();
        this.timer.start();
    };
    TimeFrame.prototype.stopTimer = function () {
        if (this.timer && this.timer.running) {
            this.timer.stop();
        }
    };
    TimeFrame.prototype.onTimer = function () {
        // //console.log("start ontimer 99999999999999999999");
        // //console.log("this.callbackList.length : ", this.callbackList.length);
        var obj;
        for (var i = 0; i < this.callbackList.length; i++) {
            this.callbackList[i][1].apply(this.callbackList[i][2]);
        }
        if (this.callbackList == undefined || this.callbackList.length <= 0) {
            this.stopTimer();
        }
    };
    return TimeFrame;
}());
TimeFrame._instance = undefined;
__reflect(TimeFrame.prototype, "TimeFrame");
//# sourceMappingURL=TimeFrame.js.map