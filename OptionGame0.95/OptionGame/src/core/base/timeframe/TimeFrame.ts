
class TimeFrame {

	private static _instance: TimeFrame = undefined;
    public static get instance(): TimeFrame {
        if (this._instance == undefined) {
            this._instance = new TimeFrame();
        }
        return this._instance;
    }

	public constructor() {
	}

	private timer: egret.Timer = undefined;
	private callbackList:any[][] = [];

	private createTimer(delay: number = 1000, repeatCount: number = 0) {
		if (this.timer == undefined) {
			this.timer = new egret.Timer(delay, repeatCount);
			this.callbackList.length = 0;
		}
		this.timer.removeEventListener(egret.TimerEvent.TIMER, this.onTimer, this);
        this.timer.addEventListener(egret.TimerEvent.TIMER, this.onTimer, this);
	}

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

	public addOne(id: any, callback: Function, thisobj: any) {
		var hasId: boolean = false;
		for (var i: number = 0; i < this.callbackList.length; i++) {
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
	}

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

	public removeOne(id: any) {
		var hasId: boolean = false;
		for (var i: number = 0; i < this.callbackList.length; i++) {
			var arr = this.callbackList[i];
			if (arr[0] == id) {
				hasId = true;
				//console.log(this.callbackList.splice(i, 1));
				break;
			}
		}
	}

	public run() {
		if (this.timer && this.timer.running) {
			return;
		}
		// //console.log("run timer ............................");
		this.createTimer();
        this.timer.stop();
        this.timer.start();
	}

    private stopTimer() {
        if (this.timer && this.timer.running) {
			this.timer.stop();
		}
    }

	private onTimer() {
		// //console.log("start ontimer 99999999999999999999");
		// //console.log("this.callbackList.length : ", this.callbackList.length);
		var obj: any;
		for (var i: number = 0; i < this.callbackList.length; i++) {
			this.callbackList[i][1].apply(this.callbackList[i][2]);
			// //console.log("exec apply 33333333333333333333333333333");
			// obj = this.callbackList[i];
			// // //console.log("ontimer 0000000000000000000000000000000000000");
			// if ((obj != undefined) && (obj.func != undefined) && (obj.func instanceof Function)) {
			// 	//console.log("exec apply 33333333333333333333333333333");
			// 	obj.func.apply(obj.context);
			// }
		}
		if(this.callbackList==undefined || this.callbackList.length<=0){
			this.stopTimer();
		}
	}

}