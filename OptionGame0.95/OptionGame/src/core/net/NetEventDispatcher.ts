class NetEventDispatcher {
	public constructor() {
	}

	private static _instance:NetEventDispatcher;
	public get instance():NetEventDispatcher{
		if(NetEventDispatcher._instance==undefined){
			NetEventDispatcher._instance = new NetEventDispatcher();
		}
		return NetEventDispatcher._instance;
	}

	
}