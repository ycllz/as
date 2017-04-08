class BindPhone extends eui.Component {

	public bindphone:eui.Button;

	public constructor() {
		super();
		this.skinName = skins.bindPhone;
		this.bindphone.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onbind, this);
	}

	private onbind(){
		if(this.parent){
			this.parent.removeChild(this);
		}
	}	
}