class BaseModule {
	public constructor() {
		
	}

	public parentLayer:egret.DisplayObjectContainer;
	private _ispop:boolean;

	protected connect:HttpConnect;

	public show(params?:any){
		
	}

	protected startLoadModuleRES(groupName:string, resProgress:Function=undefined){
		this.connect = HttpConnect.instance;
		// this.connect.initHttpEvent();
		loadx.instance.loadGroup( groupName, this.loadGroupRESOver, this, resProgress );
	}

	protected loadGroupRESOver(){

	}

	protected setIspop(param1:boolean){
		this._ispop = param1;
	}

	protected getIspop():boolean{
		if (!this.parentLayer){
			return false;
		}
		return this._ispop;
	}

/////////////////////////////////////////////////////////////////////////////////////////////////////
	/**网络通信，模块之间通信的方法，各个模块直接调用这里的方法，要扩展的再在子类重写方法*/

	///////////////////////////////// 发送文本 /////////////////////////////////////////////////
	protected sendHttpMessage(vo:Message){
		this.connect.sendPostRequest(vo.url, vo.params, vo.responseType, vo.requestHeader);
	}

	protected addHttpListener( lcommand:string, lhandler:Function, lcontext:any ){
		this.connect.addHttpListener( lcommand, lhandler, lcontext );
	}

	/**
	 * 删除消息处理监听
	*/
	protected removeHttpListener( lcommand:string, lhandler:Function, lcontext:any ):void {
		this.connect.removeHttpListener( lcommand, lhandler, lcontext );
	}
	/**
	 * 判断是否有消息监听
	 */
	protected hasHttptListener( lcommand:string ):Boolean{
		return this.connect.hasHttptListener( lcommand );
	}

	//////////////////////////////// 发送json //////////////////////////////////////////
	/**
	 * 发送json 格式
	*/
	protected sendPostRequestAsJson( lurl:string, lparams:any=undefined ){
		this.connect.sendPostRequestAsJson( lurl, lparams );
	}

	protected addHttpListenerJson( lcommand:string, lhandler:Function, lcontext:any ){
		this.connect.addHttpListenerJson( lcommand, lhandler, lcontext );
	}
	/**
	 * 删除消息处理监听
	*/
	protected removeHttpListenerJson( lcommand:string, lhandler:Function, lcontext:any ):void {
		this.connect.removeHttpListenerJson( lcommand, lhandler, lcontext );
	}
	/**
	 * 判断是否有消息监听
	 */
	protected hasSocketListenerJson( lcommand:string ):Boolean{
		return this.connect.hasHttpListenerJson( lcommand );
	}

	
/////////////////////////////////////////////////////////////////////////////////////////////////////

	public dispose(){
		
	}

}