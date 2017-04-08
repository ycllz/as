class Message {
	public constructor() {
	}
	public url:string;
	public params:any;
	public responseType:any=egret.HttpResponseType.TEXT;
	public requestHeader:any="application/x-www-form-urlencoded";
}