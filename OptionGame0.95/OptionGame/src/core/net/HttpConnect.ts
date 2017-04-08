class HttpConnect extends egret.HttpRequest{

	private static _instance:HttpConnect=undefined;
	public static get instance():HttpConnect
	{
		if(!HttpConnect._instance){
			HttpConnect._instance = new HttpConnect();
			HttpConnect.instance.initHttpEvent();
		}
		return HttpConnect._instance;
	}

	// private static _instance:CarRentalModule;
	// public static get instance():CarRentalModule{
	// 	if(CarRentalModule._instance==undefined){
	// 		CarRentalModule._instance = new CarRentalModule();
	// 	}
	// 	return CarRentalModule._instance;
	// }

	public constructor() {
		super();
	}

	public beInit:boolean=false;
	public initHttpEvent(){
		if(this.beInit == true){
			return;
		}
		this.beInit = true;
		HttpConnect.instance.addEventListener(egret.Event.COMPLETE,this.onPostComplete,this);
        HttpConnect.instance.addEventListener(egret.IOErrorEvent.IO_ERROR,this.onPostIOError,this);
        HttpConnect.instance.addEventListener(egret.ProgressEvent.PROGRESS,this.onPostProgress,this);
	}



	private _messageMap = [];

///////////////////////////////////////////// 数据格式是一般的文本 ////////////////////////////////////////////////////////////////////

	/**
	 * @lurl 	服务端url
	 * @params  发给服务端参数"p1=postP1&p2=postP2"
	 * @lresponseType 服务端返回的数据格式，默认文本格式
	 * @lrequestHeader	发个服务端的数据格式化方式，默认 key value 方式格式化
	*/
	public sendPostRequest( lurl:string, lparams:any=undefined, lresponseType:any=egret.HttpResponseType.TEXT,
		lrequestHeader:any="application/x-www-form-urlencoded" ) {
        
        var request = HttpConnect.instance;
		
        request.responseType = lresponseType;//设置返回的数据格式, 默认为文本格式
        request.open( lurl, egret.HttpMethod.POST);
        request.setRequestHeader("Content-Type", lrequestHeader);//设置响应头, 默认使用key value 的方式来格式化参数
        if(lparams==undefined){
			request.send();
		}
		else{
			request.send(lparams);
		}
    }
	/***
	 *	收到数据，做分发处理 
	 */
    private onPostComplete(event:egret.Event) {
        var request = <egret.HttpRequest>event.currentTarget;

		HttpConnect.instance.dispatchEventWith("command1", false, request.response);

        console.log("POST response! post data : ", request.response);

    }

    private onPostIOError(event:egret.IOErrorEvent):void {
        console.log("post error : " + event);
    }

    private onPostProgress(event:egret.ProgressEvent):void {
        console.log("post progress : " + Math.floor(100*event.bytesLoaded/event.bytesTotal) + "%");
    }

	public addHttpListener( lcommand:string, lhandler:Function, lcontext:any ){
		HttpConnect.instance.addEventListener( lcommand, lhandler, lcontext );
	}

	/**
	 * 删除消息处理监听
	*/
	public removeHttpListener( lcommand:string, lhandler:Function, lcontext:any ):void {
		HttpConnect.instance.removeEventListener( lcommand, lhandler, lcontext );
	}
	/**
	 * 判断是否有消息监听
	 */
	public hasHttptListener( lcommand:string ):Boolean{
		return HttpConnect.instance.hasEventListener( lcommand );
	}


///////////////////////////////////////////// 数据格式是json ////////////////////////////////////////////////////////////////////
	private _urlLoader:egret.URLLoader;
	private _urlRequest:egret.URLRequest;

	public get urlLoader():egret.URLLoader{
		this.initUrlLoader();
		return this._urlLoader;
	}

	private initUrlLoader(){
		if(!this._urlLoader){
			this._urlLoader = new egret.URLLoader();
    		
    		this._urlLoader.addEventListener(egret.Event.COMPLETE, this.onReceive, this);
			this._urlLoader.addEventListener(egret.IOErrorEvent.IO_ERROR, this.onSendJsonIOError, this);
			this._urlLoader.addEventListener(egret.ProgressEvent.PROGRESS, this.onsendJsonProgress, this);
			
			this._urlRequest = new egret.URLRequest();
			this._urlRequest.method = egret.URLRequestMethod.POST;
		}
	}

	public sendPostRequestAsJson( lurl:string, lparams:any=undefined ){
		this.initUrlLoader();

		//发送数据格式："a=1&b=2&c=3"
		this._urlLoader.dataFormat = egret.URLLoaderDataFormat.TEXT;
		this._urlRequest.url = lurl;
		this._urlRequest.data = new egret.URLVariables(lparams);
		this._urlLoader.load(this._urlRequest);
	}

	private onReceive(event:egret.Event):void {
		var loader:egret.URLLoader = <egret.URLLoader> event.target;
		var data:egret.URLVariables = loader.data;
		console.log(data.toString());
		// 1.采用js的解析方法
		var js = eval("("+data.toString()+")");
		console.log("origin:"+js.origin);
		// 2.采用json解析器方法
		var txt = data.toString();
		var obj = JSON.parse(txt);
		console.log("origin:"+obj.origin);

		this._urlLoader.dispatchEventWith("command", false, data);
		
	}

	private onSendJsonIOError(event:egret.IOErrorEvent):void {
        console.log("post json error : " + event);
    }

    private onsendJsonProgress(event:egret.ProgressEvent):void {
        console.log("post json progress : " + Math.floor(100*event.bytesLoaded/event.bytesTotal) + "%");
    }


	/** 
	 * 监听消息
	*/
	public addHttpListenerJson( lcommand:string, lhandler:Function, lcontext:any ){
		this._urlLoader.addEventListener( lcommand, lhandler, lcontext );
	}
	/**
	 * 删除消息处理监听
	*/
	public removeHttpListenerJson( lcommand:string, lhandler:Function, lcontext:any ):void {
		this._urlLoader.removeEventListener( lcommand, lhandler, lcontext );
	}
	/**
	 * 判断是否有消息监听
	 */
	public hasHttpListenerJson( lcommand:string ):Boolean{
		return this._urlLoader.hasEventListener( lcommand );
	}

}