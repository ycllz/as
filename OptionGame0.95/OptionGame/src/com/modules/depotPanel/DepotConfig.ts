class DepotConfig {

	private static _instance:DepotConfig;
	public static get instance():DepotConfig{
		if(!DepotConfig._instance){
			DepotConfig._instance = new DepotConfig();
		}
		return DepotConfig._instance;
	}

	public constructor() {
	}


	public vo:depotItemVo;

}