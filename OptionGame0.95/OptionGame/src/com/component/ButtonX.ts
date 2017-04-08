class ButtonX extends egret.DisplayObjectContainer {

	private skinMap: any[] = [];
	private _image: egret.Bitmap;
	private _label: egret.TextField;
	private _imgLabel: egret.Bitmap;
	private _hasAllSkin: boolean = false;

	public constructor() {
		super();
	}

	public setSkin(normal: string = undefined, imgLabel: string = undefined, text: string = "",
		over: string = undefined, down: string = undefined, disabled: string = undefined) {
		
		this.skinMap[ButtonXState.STATE_NORMAL] = normal;
		if (over == undefined) {
			this.skinMap[ButtonXState.STATE_OVER] = normal;
			this._hasAllSkin = false;
		}else {
			this.skinMap[ButtonXState.STATE_OVER] = over;
			this._hasAllSkin = true;
		}

		if (down == undefined) {
			this.skinMap[ButtonXState.STATE_DOWN] = normal;
			this._hasAllSkin = false;
		}else {
			this.skinMap[ButtonXState.STATE_DOWN] = down;
			this._hasAllSkin = true;
		}

		if (disabled == undefined) {
			this.skinMap[ButtonXState.STATE_DISABLE] = normal;
			this._hasAllSkin = false;
		}else {
			this.skinMap[ButtonXState.STATE_DISABLE] = disabled;
			this._hasAllSkin = true;
		}

		// this.skinMap[ButtonXState.STATE_DISABLE] = disabled;
		this._image = new egret.Bitmap();
		this._imgLabel = new egret.Bitmap();
		this._label = new egret.TextField();
		this._label.width = 100;
		this._label.height = 28;
		this._label.size = 24;

		this.addChild(this._image);//按钮图片皮肤
		this.addChild(this._imgLabel);//按钮的图片文字
		this.addChild(this._label);//按钮文本文字

		this.state = ButtonXState.STATE_NORMAL;//默认常态
		this.imgLabel = imgLabel;//取皮肤
		this.text = text;

		this.touchEnabled = true;
		this._image.touchEnabled = true;
		this._image.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onTouchEventX, this);
		this._image.addEventListener(egret.TouchEvent.TOUCH_END, this.onTouchEventX, this);
		// this._image.addEventListener(egret.TouchEvent.TOUCH_MOVE, this.onTouchEventX, this);

		// console.log("init over . ", this.x, this.y);
	}

	/**
	 * Image 皮肤使用完，这里会把他清出显示列表
	*/
	public setSkinUseImage(normal:eui.Image = undefined, imgLabel:eui.Image = undefined, text: string = "",
		over:eui.Image = undefined, down:eui.Image = undefined, disabled:eui.Image = undefined){
		let normalSkin:any = normal.source;
		this.x = normal.x;
		this.y = normal.y;
		if(normal && normal.parent){
			normal.parent.removeChild(normal);
		}
		let imgLabelSkin:any;
		if(imgLabel){
		   imgLabelSkin	= imgLabel.source;
		   if(imgLabel.parent){
			   imgLabel.parent.removeChild(imgLabel);
		   }
		}
		let overSkin:any;
		if(over){
			overSkin = over.source;
			if(overSkin.parent){
			   overSkin.parent.removeChild(overSkin);
		   }
		}
		let downSkin:any;
		if(down){
			downSkin = down.source;
			if(downSkin.parent){
			   downSkin.parent.removeChild(downSkin);
		   }
		}
		let disabledSkin:any;
		if(disabled){
			disabledSkin = disabled.source;
			if(disabledSkin.parent){
			   disabledSkin.parent.removeChild(disabledSkin);
		   }
		}
		this.initSkin(normalSkin, imgLabelSkin, text, overSkin, downSkin, disabledSkin);

	}

	private initSkin(normal: any = undefined, imgLabel: any = undefined, text: string = "",
		over: any = undefined, down: any = undefined, disabled: any = undefined){
		
		this.skinMap[ButtonXState.STATE_NORMAL] = normal;
		if (over == undefined) {
			this.skinMap[ButtonXState.STATE_OVER] = normal;
			this._hasAllSkin = false;
		}else {
			this.skinMap[ButtonXState.STATE_OVER] = over;
			this._hasAllSkin = true;
		}

		if (down == undefined) {
			this.skinMap[ButtonXState.STATE_DOWN] = normal;
			this._hasAllSkin = false;
		}else {
			this.skinMap[ButtonXState.STATE_DOWN] = down;
			this._hasAllSkin = true;
		}

		if (disabled == undefined) {
			this.skinMap[ButtonXState.STATE_DISABLE] = normal;
			this._hasAllSkin = false;
		}else {
			this.skinMap[ButtonXState.STATE_DISABLE] = disabled;
			this._hasAllSkin = true;
		}

		// this.skinMap[ButtonXState.STATE_DISABLE] = disabled;
		this._image = new egret.Bitmap();
		this._imgLabel = new egret.Bitmap();
		this._label = new egret.TextField();
		this._label.width = 100;
		this._label.height = 28;
		this._label.size = 24;

		this.addChild(this._image);//按钮图片皮肤
		this.addChild(this._imgLabel);//按钮的图片文字
		this.addChild(this._label);//按钮文本文字

		this.state = ButtonXState.STATE_NORMAL;//默认常态
		this.imgLabel = imgLabel;//取皮肤
		this.text = text;

		this.touchEnabled = true;
		this._image.touchEnabled = true;
		this._image.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onTouchEventX, this);
		this._image.addEventListener(egret.TouchEvent.TOUCH_END, this.onTouchEventX, this);
	}

	private onTouchEventX(e: egret.TouchEvent) {
		switch (e.type) {
			case egret.TouchEvent.TOUCH_BEGIN:
				this.state = ButtonXState.STATE_DOWN;
				break;
			case egret.TouchEvent.TOUCH_END:
				this.state = ButtonXState.STATE_NORMAL;
				break;
			case egret.TouchEvent.TOUCH_MOVE:
				break;
		}

	}

	public get label(): egret.TextField {
		return this._label;
	}

	public set imgLabel(value: string) {
		var texture: egret.Texture = RES.getRes(value);
		this._imgLabel.texture = texture;
		this._imgLabel.x = (this._image.width >> 1) - (this._imgLabel.width >> 1);
		this._imgLabel.y = (this._image.height >> 1) - (this._imgLabel.height >> 1);

	}

	public set text(value: string) {
		this._label.text = value;
		this._label.x = (this._image.width >> 1) - (this._label.width >> 1);
		this._label.y = (this._image.height >> 1) - (this._label.height >> 1);

	}

	public set enable(value: boolean) {
		if (value == true) {
			this.state = ButtonXState.STATE_NORMAL;
		} else if (value == false) {
			this.state = ButtonXState.STATE_DISABLE;
		}
		this._image.touchEnabled = value;
		this.touchEnabled = value;
	}

	private set state(value: string) {
		if ((this._image != undefined) && (this.skinMap[value] != undefined)) {
			var texture: egret.Texture = RES.getRes(this.skinMap[value]);
			this._image.texture = texture;
			if (this._hasAllSkin == false && value != ButtonXState.STATE_NORMAL) {
				this._image.scaleX = 0.9;
				this._image.scaleY = 0.9;
				this._imgLabel.scaleX = 0.9;
				this._imgLabel.scaleY = 0.9;
				this._label.scaleX = 0.95;
				this._label.scaleY = 0.95;
			} else {
				this._image.scaleX = 1;
				this._image.scaleY = 1;
				this._imgLabel.scaleX = 1;
				this._imgLabel.scaleY = 1;
				this._label.scaleX = 1;
				this._label.scaleY = 1;
			}

		}
		// console.log("init over . ", this._image.x, this._image.y);
	}

	public dispose() {
		this._image.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onTouchEventX, this);
		this._image.removeEventListener(egret.TouchEvent.TOUCH_END, this.onTouchEventX, this);
		// this._image.removeEventListener(egret.TouchEvent.TOUCH_MOVE, this.onTouchEventX, this);
	}



}