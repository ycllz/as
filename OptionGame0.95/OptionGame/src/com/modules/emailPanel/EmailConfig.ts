class EmailConfig {
	

	public tradeIndex:number;

	public vo:EmailVo;

	private static _instance:EmailConfig;
	public static get instance():EmailConfig{
		if(!EmailConfig._instance){
			EmailConfig._instance = new EmailConfig();
		}
		return EmailConfig._instance;
	}

	public constructor() {
	}

	
}