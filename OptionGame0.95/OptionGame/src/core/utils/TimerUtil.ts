/**
 *
 * @author 
 *
 */
class TimerUtil{
    
    private timer:egret.Timer = null;
    
    private callbackList:Function[] = [];

    
    
    public constructor(delay: number,repeatCount:number=-1) {
        this.timer = new egret.Timer(delay, repeatCount);
        this.timer.addEventListener(egret.TimerEvent.TIMER, this.onTimer, this);
	}

	public add(key:any, callback:Function){
	    if(!this.callbackList[key]){
	        this.callbackList[key] = callback;
	    }
	}
	
	public remove(key:any){
	    if(this.callbackList[key]){
            this.callbackList[key] = null;
            delete this.callbackList[key];
	    }
	}
	
	public run(){
        this.timer.stop();
        this.timer.start();
	}
	
    private stopTm(){
        if (this.timer.running)
            this.timer.stop();
    }
	
	private onTimer(){
	    for(var i:number = 0; i < this.callbackList.length; i++){
            if (this.callbackList[i] && (this.callbackList[i] instanceof Function) ){
                this.callbackList[i]();
            }
	    }
	}
}
