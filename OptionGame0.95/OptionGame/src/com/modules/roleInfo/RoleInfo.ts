class RoleInfo extends eui.Component {
	public music:eui.Button;
	public sound:eui.Button;
	public bindphone:eui.Button;
	public close:eui.Button;

	private bindPanel:BindPhone;

	public constructor() {
		super();
		this.skinName = skins.roleInfo;
		this.close.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onclose, this);
		this.bindphone.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onbindphone, this);
		this.music.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onmusic, this);
		this.sound.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onsound, this);
	}

	private onmusic(){
		if(this.music.currentState=="up"){
			this.music.currentState = "disabled";
		}else{
			this.music.currentState = "up";
		}
		
	}
	private onsound(){
		if(this.sound.currentState=="up"){
			this.sound.currentState = "disabled";
		}else{
			this.sound.currentState = "up";
		}
	}

	private onclose(){
		if(this.parent){
			this.parent.removeChild(this);
		}
	}
	private onbindphone(){
		if(!this.bindPanel){
			this.bindPanel = new BindPhone();
		}
		LayerManager.instance.windowLayer.addChild(this.bindPanel);
		this.bindPanel.x = (LayerManager.instance.stageWidth>>1)-(this.bindPanel.width>>1);
        this.bindPanel.y = (LayerManager.instance.stageHeight>>1)-(this.bindPanel.height>>1);

		this.dispose();
	}

	public dispose(){
		if(this.parent){
			this.parent.removeChild(this);
		}
	}

}